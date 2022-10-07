import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useStateContext } from '../../context/Statecontext'
import styles from '../../styles/Navbar/Navbar.module.css'
import DropDown from './DropDown'
import SearchBar from './SearchBar'

export default function Navbar() {
    const [navStatus, setNavStatus] = useState(false)
    const {cartItemQuantity, setCartItemQuantity} = useStateContext()
    useEffect(() => {
        const quantity = JSON.parse(localStorage.getItem('cartQuantity'))
        if (quantity) {
            setCartItemQuantity(quantity)
        }
    }, [cartItemQuantity])
    
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.navLeft}>
                    <div className={styles.hamburger} onClick={() => navStatus ? setNavStatus(false) : setNavStatus(true)} data-navstatus={navStatus}>
                        <span className={styles.one}></span>
                        <span className={styles.two}></span>
                        <span className={styles.three}></span>
                    </div>
                    <div className={styles.navLogo}>
                        <Image src={'/logo.png'} layout='fill' objectFit='cover' />
                    </div>
                </div>
                <div className={styles.navRight}>
                    <div className={styles.user}>
                        <svg className="ws-icon ws-icon--user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a5 5 0 100 10 5 5 0 000-10zM9 7a3 3 0 116 0 3 3 0 01-6 0z"></path><path d="M7.5 14c-1.423 0-2.808.502-3.846 1.424C2.612 16.35 2 17.634 2 19v2a1 1 0 102 0v-2c0-.755.336-1.507.982-2.081C5.632 16.341 6.536 16 7.5 16h9c.964 0 1.868.341 2.518.919.646.574.982 1.326.982 2.081v2a1 1 0 102 0v-2c0-1.367-.612-2.65-1.654-3.576C19.308 14.502 17.923 14 16.5 14h-9z"></path></svg>
                    </div>
                    <Link href={'/cart'} passHref>
                        <div className={styles.cart}>
                            <p className={styles.cartItems}>{cartItemQuantity}</p>
                            <div className={styles.cartBody}>
                                <svg className="ws-icon ws-icon--cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27"><path fillRule="evenodd" d="M1.05261 0.880524C0.500328 0.880524 0.0526123 1.32824 0.0526123 1.88052C0.0526123 2.43281 0.500328 2.88052 1.05261 2.88052H3.63131L4.60679 7.74865C4.6114 7.7787 4.61736 7.80832 4.62458 7.83743L6.5369 17.3808L6.53703 17.3815C6.68761 18.1379 7.09965 18.8172 7.70075 19.3005C8.2993 19.7818 9.04739 20.0383 9.81512 20.0261H20.9209C21.6886 20.0383 22.4367 19.7818 23.0353 19.3005C23.6365 18.817 24.0486 18.1375 24.1991 17.3808L24.1991 17.3808L24.2006 17.3733L26.0315 7.78324C26.0874 7.49047 26.0098 7.18802 25.8199 6.95834C25.6299 6.72866 25.3474 6.5957 25.0493 6.5957H6.41552L5.43132 1.68405C5.33769 1.21679 4.92735 0.880524 4.45081 0.880524H1.05261ZM8.4982 16.9893L6.81628 8.5957H23.8403L22.2375 16.9907L22.2369 16.994C22.1775 17.2884 22.0167 17.5531 21.782 17.7419C21.5464 17.9313 21.2514 18.032 20.9487 18.0262L20.9296 18.0261H9.80641L9.78727 18.0262C9.48456 18.032 9.18959 17.9313 8.95401 17.7419C8.71845 17.5525 8.55731 17.2865 8.49849 16.9907L8.4982 16.9893ZM9.02717 24.5888C8.94934 24.5888 8.88281 24.6526 8.88281 24.7355C8.88281 24.8184 8.94934 24.8822 9.02717 24.8822C9.105 24.8822 9.17153 24.8184 9.17153 24.7355C9.17153 24.6526 9.105 24.5888 9.02717 24.5888ZM6.88281 24.7355C6.88281 23.5518 7.84098 22.5888 9.02717 22.5888C10.2134 22.5888 11.1715 23.5518 11.1715 24.7355C11.1715 25.9192 10.2134 26.8822 9.02717 26.8822C7.84098 26.8822 6.88281 25.9192 6.88281 24.7355ZM21.6153 24.5888C21.5374 24.5888 21.4709 24.6526 21.4709 24.7355C21.4709 24.8184 21.5374 24.8822 21.6153 24.8822C21.6931 24.8822 21.7596 24.8184 21.7596 24.7355C21.7596 24.6526 21.6931 24.5888 21.6153 24.5888ZM19.4709 24.7355C19.4709 23.5518 20.4291 22.5888 21.6153 22.5888C22.8015 22.5888 23.7596 23.5518 23.7596 24.7355C23.7596 25.9192 22.8015 26.8822 21.6153 26.8822C20.4291 26.8822 19.4709 25.9192 19.4709 24.7355Z"></path></svg>
                            </div>
                        </div>
                    </Link>
                </div>
            </nav>
            <DropDown navStatus={navStatus} setNavStatus={setNavStatus} />
            <SearchBar />
        </>
    )
}
