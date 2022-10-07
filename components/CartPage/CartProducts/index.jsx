import styles from '../../../styles/Cartpage/Cart.module.css'
import Product from './Product'
const CartProducts = ({ cartProduct }) => {
  return (
    <div className={styles.products}>
      {cartProduct.map(product => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  )
}

export default CartProducts