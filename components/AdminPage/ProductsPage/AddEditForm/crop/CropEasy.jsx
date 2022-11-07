// import { Box, Button, DialogActions, DialogContent, Slider, Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import Cropper from 'react-easy-crop'
import { useStateContext } from "../../../../../context/Statecontext"
// import { Cancel } from '@mui/icons-material'
// import CropIcon from '@mui/icons-material/Crop'
import getCroppedImg from "./utils/cropImage"
// import { useAuth } from "../../context/AuthContext"


const CropEasy = ({ photoURL, setOpenCrop, setPhotoURL, setFile }) => {
    const { setLoading, setAlert } = useStateContext()
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [rotation, setRotation] = useState(0)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(0)

    const cropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }
    const cropImage = async () => {
        setLoading(true)
        try {
            const { file, url } = await getCroppedImg(photoURL, croppedAreaPixels, rotation)
            const data = new FormData()
            data.append("file", file)
            data.append("upload_preset", "uploads");
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/indvidual/image/upload", data)

            console.log(uploadRes.data, "url")
            setPhotoURL(url)

            setFile((perv) => [
                ...perv,
                uploadRes.data.url
            ])

        } catch (error) {
            setAlert({ show: true, type: 'error', message: error.message, timeout: 3000 })
            console.log(error);
        }
        setOpenCrop(false)
        setLoading(false)
    }

    const closeModal = () => {
        setPhotoURL(null)
        setOpenCrop(false)
    }
    return (
        <>
            <div id="defaultModal" tabIndex="-1" aria-hidden="false" className=" overflow-y-auto overflow-x-hidden z-50 w-full md:inset-0 h-modal md:h-full">
                <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Crop Image
                            </h3>

                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="space-y-6 gap-2 py-3 flex flex-col relative">
                            <div className="relative h-52">
                                <Cropper image={photoURL} crop={crop} zoom={zoom} rotation={rotation} aspect={1} onZoomChange={setZoom} onRotationChange={setRotation} onCropChange={setCrop} onCropComplete={cropComplete} />
                            </div>
                            <div className="flex items-center flex-col">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="range">{zoom * 10}%</label>
                                <input className="w-3/4 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700" type="range" name="range" id="" min={1} max={3} step={0.1} value={zoom} onChange={(e) => setZoom(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                            <button onClick={cropImage} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crop</button>
                            <button onClick={closeModal} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CropEasy

const zoomPercent = (value) => {
    return `${Math.round(value * 100)}%`
}