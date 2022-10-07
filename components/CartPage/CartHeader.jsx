import styles from '../../styles/Cartpage/Cart.module.css'

const CartHeader = ({ subtotal, cartItemQuantity }) => {
  return (
    <div className={styles.header}>
      <div className={styles.subtotal}>
        <h1>Subtotal</h1>
        <h1><span>₹</span>{subtotal}<span>00</span></h1>
      </div>
      <div className={styles.button}>
        <button>Proceed to Buy &#40;{cartItemQuantity} item&#41;</button>
      </div>
    </div>
  )
}
export default CartHeader