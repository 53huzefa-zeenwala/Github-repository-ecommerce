import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import { footer } from '../utils/fakedata'

export default function Footer() {

    return (
        <div className={styles.mainDiv}>
            <div className={styles.about}>
                <div className={styles.logo}>
                    <div>
                        <Image src={'/logo.png'} layout='fill' objectFit='contain' />
                    </div>
                </div>
                <p>{footer.tagLine}</p>
            </div>
            <div className={styles.socialMedia}>
                <h1>Follow Us</h1>
                <ul className={styles.mediaList}>
                    {footer.instagramLink && <li>
                        <a target="_blank" rel="noreferrer" href={footer.instagramLink} >
                            <Image src={'/instagram.svg'} layout='fill' objectFit='contain' />
                        </a>
                    </li>}
                    {footer.whatsappLink && <li>
                        <a target="_blank" rel="noreferrer" href={footer.whatsappLink} >
                            <Image src={'/whatsapp.svg'} layout='fill' objectFit='contain' />
                        </a>
                    </li>}
                    {footer.emailLink && <li>
                        <a target="_blank" rel="noreferrer" href={`mailto:${footer.emailLink}`}>
                            <Image src={'/mail.svg'} layout='fill' objectFit='contain' />
                        </a>
                    </li>}
                </ul>
            </div>
            {footer.phoneNumber && <div className={styles.contact}>
            <h1>call Us</h1>
            <a target="_blank" rel="noreferrer" href={`tel:${footer.phoneNumber}`}>{footer.phoneNumber}</a>
            </div>}
            {footer.copyRightName && <div className={styles.copyRight}>© 2022 {footer.copyRightName}. All Rights Reserved</div>}
        </div>
    )
}
