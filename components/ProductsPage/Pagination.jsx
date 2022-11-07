import React, { useState } from 'react'
import styles from '../../styles/ProductsPage/Pagination.module.css'

export default function Pagination() {
    const [pageNumber, setPageNumber] = useState(0)
    const itemPerPage = 20
    const totalResults = 100

    return (
        <div className={styles.mainDiv}>
            <div className={styles.buttonDiv}>
                {pageNumber === 0 || <button data-content="Perv" className={styles.pervButton} onClick={() => setPageNumber(pageNumber - 1)}>
                    <img src="/icon/left-arrow-svgrepo-com (1).svg" alt="" /> Perv</button>}
            </div>
            <h1>page no - {pageNumber + 1}</h1>
            <div className={styles.buttonDiv}>
                {totalResults / itemPerPage > pageNumber + 1 && <button data-content="Next" className={styles.nextButton} onClick={() => setPageNumber(pageNumber + 1)}>Next<img src="/icon/right-arrow-svgrepo-com.svg" alt="" /></button>}
            </div>
        </div>
    )
}
