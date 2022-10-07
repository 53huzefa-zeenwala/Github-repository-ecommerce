import React from 'react'
import Product from '../../components/ProductPage'
import { productD, productDetail } from '../../utils/fakedata'

export default function product() {
  return (
    <div>
        <Product product={productDetail}/>
    </div>
  )
}
