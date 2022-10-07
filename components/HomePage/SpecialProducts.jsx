import styles from '../../styles/HomePage/SpecialProducts.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function SpecialProducts({ specialProducts }) {
    
    return (
        <div className={styles.mainDiv}>
            {specialProducts.map((product) => (
                <div className={styles.displayDiv} key={product._id}>
                    <Image src={product.image[0].url} layout="fill" objectFit='cover' quality={50} />
                    <div className={styles.text}>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <div>
                            <h3>₹{product.price}</h3>
                            <button>
                                <Link href={`/products/${product.name}`}>
                                    Shop Now
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
