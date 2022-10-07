import React from 'react'
import Categories from '../../../components/AdminPage/Categories'
import AddEditForm from '../../../components/AdminPage/ProductsPage/AddEditForm'

export default function addNewProduct() {
  return (
    <>
        <Categories />
        <AddEditForm title="Add New Product"/>
    </>
  )
}
