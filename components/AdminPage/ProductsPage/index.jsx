import Link from 'next/link'
import styles from '../../../styles/Adminpage/ProductsPage/Product.module.css'

export default function ProductsPage() {
    return (
        <div className={styles.main}>
            <div className={styles.buttonDiv}>
                <button>
                    <Link href={'products/addNewProduct'}>
                        Add New Products
                    </Link>
                </button>
            </div>
        </div>
    )
}
