import styles from '../../../styles/Homepage/Products.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Product({ product }) {
    return (
        <Link href={`products/${product._id}`} passHref>
        <div className={styles.productDiv}>
            <div className={styles.imageDiv}>
                <Image src={product.image[0].url} layout="fill" objectFit='contain' />
            </div>
            <h1>{product.name}</h1>
            <h3>₹{product.price}</h3>
            {product.discountPercentage && <i>Get {product.discountPercentage}% off</i>}
        </div>
        </Link>
    )
}
