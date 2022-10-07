import { useEffect, useState } from 'react'
import styles from '../../styles/Productpage/Product.module.css'
import ImageSlider from './ImageSlider'
import ImageModel from './ImageModel'
import Details from './Details'
import CommentForm from './CommentForm'
import Products from './Products'
import { newArrival } from '../../utils/fakedata'

export default function Product({ product }) {
  const [discountPercent, setDiscountPercent] = useState()
  const [displayModal, setDisplayModal] = useState(false)
  useEffect(() => {
    if (product.mrpPrice) {
      const totalLess = ((product.mrpPrice - product.price) / product.mrpPrice) * 100
      setDiscountPercent(totalLess)
    }
  }, [product.mrpPrice])
  return (
    <>
      {displayModal &&
        <ImageModel image={product.image} setDisplayModal={setDisplayModal} />
      }

      {displayModal ||
        <div className={styles.mainDiv}>
          <ImageSlider image={product.image} setDisplayModal={setDisplayModal} />
          {discountPercent && <span className={styles.discountCircle}>-{discountPercent}%</span>}

          <Details discountPercent={discountPercent} product={product} />
          <CommentForm />
          <Products products={newArrival} title="People also like this product"/>
          <Products products={newArrival} title="Recommended for you"/>
        </div>
      }
    </>
  )
}
