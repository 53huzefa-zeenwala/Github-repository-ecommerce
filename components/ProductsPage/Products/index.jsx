import styles from '../../../styles/Productspage/Products.module.css'
import Product from './Product'

export default function Products({ products }) {
    return (
        <div className={styles.mainDiv}>
            <h1>Results</h1>
            <div className={styles.productsDiv}>
                {products.map(product => (
                    <Product product={product} key={product._id} />
                ))}
            </div>
        </div>
    )
}
