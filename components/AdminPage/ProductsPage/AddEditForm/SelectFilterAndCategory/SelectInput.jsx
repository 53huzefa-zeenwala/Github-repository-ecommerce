import React from 'react'
import styles from '../../../../../styles/Adminpage/ProductsPage/AddEditProduct.module.css'

export default function SelectInput({ data, name, setModal, setOpenModal, setProductValue, productValue }) {
    const openModal = () => {
        setModal(true)
        setOpenModal(true)
    }
    return (
        <div className={styles.selectData}>
            <select value={productValue} onChange={e => setProductValue(e.target.value)} name={name} required>
                <option >Select {name}</option>
                {data?.map((data) => (
                    <option key={data._id} value={data.title}>{data.title}</option>
                ))}
            </select>
            <input type="button" value={`Add New ${name}`} onClick={openModal} />
        </div>
    )
}
