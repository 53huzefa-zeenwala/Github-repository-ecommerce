import styles from '../../../styles/ProductsPage/CategoryAndFilter.module.css'

export default function CategoryAndFilterButton({ setCategoryStatus, setFilterStatus }) {
    return (
        <div className={styles.buttonDiv}>
            <button className={styles.categoryButton} onClick={() => setCategoryStatus(true)}>
                <span className={styles.icon}>
                    <svg className="ws-icon ws-icon--grid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1H3zm1 7V4h5v5H4zM14 2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1h-7zm1 7V4h5v5h-5zM13 14a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7zm2 1v5h5v-5h-5zM3 13a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1H3zm1 7v-5h5v5H4z"></path></svg>
                </span>
                <span className={styles.text}>Browse Categories</span>
            </button>
            <button className={styles.filterButton}>
                <span className={styles.icon}>
                    <svg className="ws-icon ws-icon--filter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 2a1 1 0 011 1v7a1 1 0 11-2 0V3a1 1 0 011-1zm1 13h2a1 1 0 100-2H1a1 1 0 100 2h2v6a1 1 0 102 0v-6zm8-3a1 1 0 10-2 0v9a1 1 0 102 0v-9zM12 2a1 1 0 011 1v4h2a1 1 0 110 2H9a1 1 0 110-2h2V3a1 1 0 011-1zm8 13h3a1 1 0 110 2h-2v4a1 1 0 11-2 0v-4h-2a1 1 0 110-2h3zm0-13a1 1 0 011 1v9a1 1 0 11-2 0V3a1 1 0 011-1z"></path></svg>
                </span>
                <span className={styles.text} onClick={() => setFilterStatus(true)}>Filter</span>
            </button>
        </div>
    )
}
