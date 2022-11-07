import Link from 'next/link'
import styles from '../../../styles/Adminpage/ProductsPage/Product.module.css'
import Product from '../../ProductsPage/Products/Product'

export default function ProductsPage({ products }) {
    return (
        <main className={styles.main}>
            <div className={styles.buttonDiv}>
                <button>
                    <Link href={'products/newproduct'}>
                        Add New Products
                    </Link>
                </button>
            </div>
            <div className={styles.productList}>
                {products.map(product => (
                    <div key={product._id}>
                        <Product product={product} />
                        <Link href={`products/editproduct/${product._id}`}>
                            <button>Edit</button>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    )
}
