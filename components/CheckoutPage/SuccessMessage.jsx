import Image from 'next/image'
import styles from '../../styles/Checkoutpage/SuccessMessage.module.css'
import { useRouter } from 'next/router'

export default function SuccessMessage({ showSuccessMessage }) {
    const router = useRouter()

    const redirectToHome = () => {
        router.push('/')
    }
    return (
        <div className={styles.successMessageDiv} data-successmessage={showSuccessMessage}>
            <div>
                <div className={styles.imageDiv}>
                    <div>
                        <Image src={'/successIcon.png'} layout="fill" objectFit='contain' />
                    </div>
                </div>
                <button onClick={redirectToHome}>
                    <svg className="ws-icon ws-icon--close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.293 5.293a1 1 0 011.414 0L12 10.586l5.293-5.293a1 1 0 111.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707a1 1 0 010-1.414z"></path></svg>
                </button>

                <div className={styles.text}>
                    <h1>Thank You!</h1>
                    <p>Your Order has been successfully placed, we will contact you soon.</p>
                    <div><span className='text-red-600 text-2xl'>* </span>Click on cross button to go home page.</div>
                </div>
            </div>
        </div>
    )
}
