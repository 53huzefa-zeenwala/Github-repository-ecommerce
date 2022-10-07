import styles from '../../styles/Navbar/SearchBar.module.css'

export default function SearchBar() {
  return (
    <div className={styles.mainDiv}>
        <div className={styles.searchBarDiv}>
            <input type="search" name="searchBar" className={styles.searchBar} id="" placeholder='What are you looking for...' />
            <button className={styles.searchButton}>
            <svg className="ws-icon ws-icon--search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 4a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0z"></path><path d="M15.943 15.943a1 1 0 011.414 0l4.35 4.35a1 1 0 01-1.414 1.414l-4.35-4.35a1 1 0 010-1.414z"></path></svg>
            </button>
        </div>
    </div>
  )
}
