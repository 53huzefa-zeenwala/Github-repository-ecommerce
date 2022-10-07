import Link from 'next/link'
import styles from '../../styles/Navbar/Navbar.module.css'
import { useRouter } from 'next/router'

export default function DropDown({ navStatus, setNavStatus }) {
  const {pathname} = useRouter()
  return (
    <div className={styles.dropDown} data-navstatus={navStatus}>
      <ul>
        <li onClick={() => setNavStatus(false)} className={pathname === '/' ? styles.active : null }>
          <Link href={'/'} >
            Home
          </Link>
        </li>
        <li onClick={() => setNavStatus(false)} className={pathname === '/products' ? styles.active : null }>
          <Link href={'/products'}>
            Products
          </Link>
        </li>
        <li onClick={() => setNavStatus(false)} className={pathname === '/contact' ? styles.active : null }>
          <Link href={'/'}>
            Seller details
          </Link>
        </li>
      </ul>
    </div>
  )
}
