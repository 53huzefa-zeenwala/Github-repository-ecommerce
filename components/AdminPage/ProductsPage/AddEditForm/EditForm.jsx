import React, { useState } from 'react'
import { useStateContext } from '../../../../context/Statecontext'
import Form from './Form'
import styles from '../../../../styles/Adminpage/ProductsPage/EditForm.module.css'
import axios from 'axios'
import RemoveUploadedItem from './RemoveUploadedItem'
import { useRouter } from 'next/router'

export default function EditForm({ product: {
    title, description, price: productPrice, mrp, discount, category, brand, frameType, color, productDetail, images, inStock: productStock, _id
} }) {
    const { setAlert, setLoading } = useStateContext()
    const { push } = useRouter()

    const [productModal, setProductModal] = useState({ item: "", isOpen: false })

    const [productName, setProductName] = useState(title)
    const [productDescription, setProductDescription] = useState(description)
    const [price, setPrice] = useState(productPrice)
    const [mrpPrice, setMrpPrice] = useState(mrp)
    const [totalDiscount, setTotalDiscount] = useState(discount)

    const [productCategory, setProductCategory] = useState(category)
    const [productBrand, setProductBrand] = useState(brand)
    const [productFrameType, setProductFrameType] = useState(frameType)
    const [productColor, setProductColor] = useState(color)
    const [productDetails, setProductDetails] = useState(productDetail)

    const [file, setFile] = useState(images)

    const [inStock, setInStock] = useState(productStock)

    const submitProduct = async (e) => {
        e.preventDefault()
        console.log(productName.length >= 0 || productDescription.length >= 0 || price.length >= 0 || mrpPrice.length >= 0 || totalDiscount.length >= 0 || productCategory.length >= 0 || productBrand.length >= 0 || productFrameType.length >= 0 || productColor.length >= 0 || productDetails.length >= 0 || file.length >= 0)
        if (productName.length <= 0 || productDescription.length <= 0 || price.length <= 0 || mrpPrice.length <= 0 || totalDiscount.length <= 0 || productCategory.length <= 0 || productBrand.length <= 0 || productFrameType.length <= 0 || productColor.length <= 0 || productDetails.length <= 0 || file.length <= 0) {
            setAlert({ show: true, type: 'info', message: 'fill every field before submitting', timeout: 3000 })
            return
        }
        setLoading(true)
        try {
            const data = {
                title: productName, description: productDescription, price, mrp: mrpPrice, discount: totalDiscount, category: productCategory, brand: productBrand, frameType: productFrameType, color: productColor, productDetail: productDetails, images: file, inStock
            }
            await axios.put(`http://localhost:3000/api/products/${_id}`, data)
            setAlert({ show: true, type: 'success', message: 'product updated successfully', timeout: 3000 })
        } catch (error) {
            setAlert({ show: true, type: 'error', message: error.message, timeout: 3000 })
        }
        setLoading(false)
    }

    const removeProduct = async () => {
        try {
            await axios.delete(`http://localhost:3000/api/products/${_id}`)
            setAlert({ show: true, type: 'error', message: 'product is deleted successfully', timeout: 3000 })
            push('/admin/products')
        } catch (error) {
            setAlert({ show: true, type: 'error', message: error.message, timeout: 3000 })
        }
        setProductModal({ item: "", isOpen: false })
    }


    return (
        <div className={styles.editMain}>
            {productModal.isOpen && <RemoveUploadedItem removeItem={removeProduct} setModal={setProductModal} title="Are sure you want to permanently delete this product?" />}
            <Form {...{
                productName, setProductName, productDescription, setProductDescription, price, setPrice, mrpPrice, setMrpPrice, totalDiscount, setTotalDiscount, productCategory, setProductCategory, productBrand, setProductBrand, productFrameType, setProductFrameType, productColor, setProductColor, productDetails, setProductDetails, inStock, setInStock, file, setFile, submitProduct, title: "Update Product"
            }} />
            <div className={styles.form}>
                <button onClick={() => setProductModal({ item: _id, isOpen: true })} >Delete Product</button>
            </div>
        </div>
    )
}
