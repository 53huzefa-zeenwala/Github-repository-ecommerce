import styles from '../../styles/Checkoutpage/Checkout.module.css'
import Image from 'next/image'

export default function Products({ products }) {
  // console.log(products)
  return (
    <div className={styles.productsDiv}>
      
      {products.map(product => (
        <div className={styles.productDiv} key={product._id}>
          <div className={styles.imageDiv}>
            <Image src={product.image[0].url} layout="fill" objectFit='contain' />
          </div>
          <div>
            <h2>{product.name}</h2>
            <h3>₹{product.price} <span>&#10088;{product.discountPercentage}% off&#10089;</span></h3>
          </div>
        </div>
      ))
      }
    </div>
  )
}
