import axios from 'axios'
import React, { useState } from 'react'
import { useStateContext } from '../../../../context/Statecontext'
import Form from './Form'

export default function AddForm() {
    const { setAlert, setLoading } = useStateContext()

    const [productName, setProductName] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [mrpPrice, setMrpPrice] = useState(0)
    const [totalDiscount, setTotalDiscount] = useState(0)

    const [productCategory, setProductCategory] = useState("")
    const [productBrand, setProductBrand] = useState("")
    const [productFrameType, setProductFrameType] = useState("")
    const [productColor, setProductColor] = useState("")
    const [productDetails, setProductDetails] = useState([])

    const [file, setFile] = useState([])

    const [inStock, setInStock] = useState(0)

    const submitProduct = async (e) => {
        e.preventDefault()
        if (productName.length >= 0 || productDescription.length >= 0 || price.length >= 0 || mrpPrice.length >= 0 || totalDiscount.length >= 0 || productCategory.length >= 0 || productBrand.length >= 0 || productFrameType.length >= 0 || productColor.length >= 0 || productDetails.length >= 0 || file.length >= 0 || inStock.length >= 0) {
            setAlert({ show: true, type: 'info', message: 'fill every field before submitting', timeout: 3000 })
            return
        }
        setLoading(true)
        try {
            const data = {
                title: productName, description: productDescription, price, mrp: mrpPrice, discount: totalDiscount, category: productCategory, brand: productBrand, frameType: productFrameType, color: productColor, productDetail: productDetails, images: file, inStock
            }
            console.log(data.title.length)
            await axios.post("http://localhost:3000/api/products", data)
            setProductName("")
            setProductDescription('')
            setPrice(0)
            setMrpPrice(0)
            setTotalDiscount(0)
            setProductCategory('')
            setProductBrand('')
            setProductFrameType('')
            setProductColor('')
            setProductDetails([])
            setInStock(0)
            setFile([])
            setAlert({ show: true, type: 'success', message: 'product added successfully', timeout: 3000 })

        } catch (error) {
            setAlert({ show: true, type: 'error', message: error.message, timeout: 3000 })
            console.log(error)
        }
        setLoading(false)
    }

    return (
        <div>
            <Form {...{
                productName, setProductName, productDescription, setProductDescription, price, setPrice, mrpPrice, setMrpPrice, totalDiscount, setTotalDiscount, productCategory, setProductCategory, productBrand, setProductBrand, productFrameType, setProductFrameType, productColor, setProductColor, productDetails, setProductDetails, inStock, setInStock, file, setFile, submitProduct, title: "Add Product"
            }} />
        </div>
    )
}
