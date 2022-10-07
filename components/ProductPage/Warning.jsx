import Image from 'next/image'
import styles from '../../styles/Productpage/Warning.module.css'

const Warning = ({ setShowWarning, setAddMore, showWarning }) => {
  
  return (
    <div className={styles.main}>
      <div className={styles.warning} data-show={showWarning}>
        <div className={styles.message}>
          <div>
            <Image src={'/cart.png'} layout='fill' objectFit='contain' />
          </div>
          <h1>Are You Sure You Want Add This Product once more time to cart ?</h1>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => setAddMore(true)}>Yes</button>
          <button onClick={() => setShowWarning(false)}>No</button>
        </div>
      </div>
    </div>
  )
}

export default Warning