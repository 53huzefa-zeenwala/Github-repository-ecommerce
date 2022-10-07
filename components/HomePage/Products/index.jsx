import styles from '../../../styles/Homepage/Products.module.css'
import Link from 'next/link'
import Product from './Product'

export default function Products({ type, products }) {
    return (
        <div className={styles.mainDiv}>
            <h1>{type}</h1>
            {products.length >= 8 && <Link href={`/type/${type}`}> View All</Link>}
            <div className={styles.productsDiv}>
                {products.map(product => (
                    <Product product={product} key={product._id} />
                ))}
            </div>
        </div>
    )
}
