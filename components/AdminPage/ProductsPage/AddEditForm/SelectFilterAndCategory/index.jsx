import axios from "axios";
import { useEffect, useState } from "react";
import { useStateContext } from "../../../../../context/Statecontext";
import Modal from "./Modal";
import SelectInput from "./SelectInput";

export default function SelectFilterAndCategory({
    productColor,
    setProductColor,
    productFrameType,
    setProductFrameType,
    productBrand,
    setProductBrand,
    productCategory,
    setProductCategory,
}) {

    const { setLoading, setAlert } = useStateContext();

    const [categories, setCategories] = useState();
    const [colors, setColors] = useState();
    const [brands, setBrands] = useState();
    const [frameTypes, setFrameTypes] = useState();
    const [updateData, setUpdateData] = useState("");

    const [openCategories, setOpenCategories] = useState(false);
    const [openBrands, setOpenBrands] = useState(false);
    const [openColors, setOpenColors] = useState(false);
    const [openFrameTypes, setOpenFrameTypes] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [newFilterData, setNewFilterData] = useState("");
    const [error, setError] = useState(false);
    useEffect(() => {
        const getData = async () => {
            try {
                setCategories(await axios.get("http://localhost:3000/api/categories"));
                setBrands(await axios.get("http://localhost:3000/api/filters/brands"));
                setColors(await axios.get("http://localhost:3000/api/filters/colors"));
                setFrameTypes(
                    await axios.get("http://localhost:3000/api/filters/frameTypes")
                );
            } catch (error) {
                setAlert({ show: true, type: 'error', message: error.message, timeout: 3000 })
            }
        };
        getData();
    }, [updateData]);

    const closeModal = () => {
        setNewFilterData("");
        setOpenModal(false);
        setError(false);
        setOpenCategories(false);
        setOpenBrands(false);
        setOpenColors(false);
        setFrameTypes(false);
    };

    const addNewFilterToDatabase = async () => {
        if (newFilterData.length <= 2) {
            setError(true);
            return;
        }

        try {
            setLoading(true);
            const data = { title: newFilterData };
            if (openCategories) {
                await axios.post("http://localhost:3000/api/categories", data);
            } else if (openBrands) {
                await axios.post("http://localhost:3000/api/filters/brands", data);
            } else if (openColors) {
                await axios.post("http://localhost:3000/api/filters/colors", data);
            } else if (openFrameTypes) {
                await axios.post("http://localhost:3000/api/filters/frameTypes", data);
            }
            setUpdateData(newFilterData);
            setAlert({ show: true, type: 'success', message: 'New filter is added to your database', timeout: 3000 })
        } catch (error) {
            setAlert({ show: true, type: 'error', message: error.message, timeout: 3000 });
        }
        closeModal();
        setLoading(false);
    };
    return (
        <>
            {openModal && (
                <Modal
                    {...{ newFilterData, setNewFilterData, addNewFilterToDatabase, error, closeModal }}
                />
            )}

            <SelectInput
                data={categories?.data}
                name="category"
                setModal={setOpenCategories}
                setOpenModal={setOpenModal}
                productValue={productCategory}
                setProductValue={setProductCategory}
            />

            <SelectInput
                data={brands?.data}
                name="brand"
                setModal={setOpenBrands}
                setOpenModal={setOpenModal}
                productValue={productBrand}
                setProductValue={setProductBrand}
            />

            <SelectInput
                data={frameTypes?.data}
                name="Frame Type"
                setModal={setOpenFrameTypes}
                setOpenModal={setOpenModal}
                productValue={productFrameType}
                setProductValue={setProductFrameType}
            />

            <SelectInput
                data={colors?.data}
                name="color"
                setModal={setOpenColors}
                setOpenModal={setOpenModal}
                productValue={productColor}
                setProductValue={setProductColor}
            />
        </>
    );
}
