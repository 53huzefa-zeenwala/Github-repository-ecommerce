import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../../../styles/ProductsPage/CategoryAndFilter.module.css'
import CategoryAndFilterButton from './CategoryAndFilterButton'
import Filter from './Filter'

export default function CategoryAndFilter({ categories }) {
    const { pathname } = useRouter()
    const [categoryStatus, setCategoryStatus] = useState(false)
    const [filterStatus, setFilterStatus] = useState(false)
    
    return (
        <>
            <div data-categorystatus={categoryStatus} className={styles.catMainDiv}>
                <div className={styles.categoryDiv}>
                    <button onClick={() => setCategoryStatus(false)}>
                        <svg className="ws-icon ws-icon--close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.293 5.293a1 1 0 011.414 0L12 10.586l5.293-5.293a1 1 0 111.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707a1 1 0 010-1.414z"></path></svg>
                    </button>
                    <ul>
                        {categories.map((category, i) => (
                            <li key={i} className={pathname === `/category/${category}` ? styles.active : null}>
                                <Link href={`/category/${category}`}>
                                    {category}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>
            
            <CategoryAndFilterButton setCategoryStatus={setCategoryStatus} setFilterStatus={setFilterStatus} />
        </>
    )
}
