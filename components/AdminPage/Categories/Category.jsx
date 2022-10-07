import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../../styles/HomePage/Category.module.css'

export default function Category({ categoryStatus, setCategoryStatus }) {
    const { pathname } = useRouter()
    const categories = ["products", "orders", "checkout page", "poster", "categories", "filters", "footer"]
    return (
        <div data-categorystatus={categoryStatus} className={styles.mainDiv}>
            <div className={styles.categoryDiv}>
                <button onClick={() => setCategoryStatus(false)}>
                    <svg className="ws-icon ws-icon--close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.293 5.293a1 1 0 011.414 0L12 10.586l5.293-5.293a1 1 0 111.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707a1 1 0 010-1.414z"></path></svg>
                </button>
                <ul>
                    {categories.map((category, i) => (
                        <li key={i} className={pathname === `/category/${category}` ? styles.active : null}>
                            <Link href={`/admin/${category}`}>
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
