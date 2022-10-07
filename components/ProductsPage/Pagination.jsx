import React, { useState } from 'react'
import styles from '../../styles/ProductsPage/Pagination.module.css'

export default function Pagination() {
    const [pageNumber, setPageNumber] = useState(0)
    const itemPerPage = 20
    const totalResults = 100

    return (
        <div className={styles.mainDiv}>
            <div className={styles.buttonDiv}>
                {pageNumber === 0 || <button className={styles.pervButton} onClick={() => setPageNumber(pageNumber - 1)}>perv</button>}
            </div>
            <h1>page no - {pageNumber + 1}</h1>
            <div className={styles.buttonDiv}>
                {totalResults / itemPerPage > pageNumber + 1 && <button className={styles.nextButton} onClick={() => setPageNumber(pageNumber + 1)}>next</button>}
            </div>
        </div>
    )
}
