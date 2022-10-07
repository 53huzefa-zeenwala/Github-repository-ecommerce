import styles from '../../../styles/Productspage/Products.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Product({ product }) {
    const PRODUCTNAMELENGHT = 35
   
    return (
        <Link href={`products/${product._id}`} passHref>
            <div className={styles.productDiv}>
                <div>
                    <div className={styles.imageDiv}>
                        <Image src={product.image[0].url} layout="fill" objectFit='contain' />
                    </div>
                </div>
                <div className={styles.textDiv}>
                    <h1 className={styles.productName}>{product.name.length > PRODUCTNAMELENGHT ? product.name.slice(0, PRODUCTNAMELENGHT - 1) + "..." : product.name}</h1>

                    {product.brand && <h2>by <span>{product.brand}</span></h2>}
                    
                    <h3>₹{product.price} <span>₹{product.mrpPrice}</span> <span>&#10088;{product.discountPercentage}% off&#10089;</span></h3>
                    {product.category && <h1><span>{product.category}</span></h1>}
                </div>
            </div>
        </Link>
    )
}
