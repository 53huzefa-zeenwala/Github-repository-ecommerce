
import { useState } from 'react'
import styles from '../../../styles/HomePage/Category.module.css'
import Category from './Category'

export default function Categories() {
    const [categoryStatus, setCategoryStatus] = useState(false)
    return (
        <>
            
            <div className={styles.buttonDiv}>
            <button className={styles.button} onClick={() => setCategoryStatus(true)}>
                <span className={styles.icon}>
                    <svg className="ws-icon ws-icon--grid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1H3zm1 7V4h5v5H4zM14 2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1h-7zm1 7V4h5v5h-5zM13 14a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7zm2 1v5h5v-5h-5zM3 13a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1H3zm1 7v-5h5v5H4z"></path></svg>
                </span>
                <span className={styles.text}>Settings</span>
            </button>
        </div>
            <Category categoryStatus={categoryStatus} setCategoryStatus={setCategoryStatus}/>
        </>
    )
}
