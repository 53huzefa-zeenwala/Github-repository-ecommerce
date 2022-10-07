import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/Cartpage/Cart.module.css'

const Product = ({ product }) => {
  const PRODUCTNAMELENGHT = 45
  return (
    <div className={styles.productDiv}>
      <div>
        <div className={styles.imageDiv}>
          <Image src={product.image[0].url} layout="fill" objectFit='contain' />
        </div>
        <div className={styles.quantityCrl}>
          <button>
            <div>
              <Image src={'/trash-bin.png'} layout='fill' objectFit='contain' />
            </div>
          </button>
          <h1>3</h1>
          <button><span>&#43;</span></button>
        </div>
      </div>
      <div className={styles.textOption}>
        <div className={styles.textDiv}>
          <Link href={`/products/${product._id}`} passHref>
            <h1 className={styles.productName}>{product.name.length > PRODUCTNAMELENGHT ? product.name.slice(0, PRODUCTNAMELENGHT - 1) + "..." : product.name}</h1>
          </Link>

          {product.brand && <h2>by <span>{product.brand}</span></h2>}

          <h3>₹{product.price} <span>₹{product.mrpPrice}</span> <span>&#10088;{product.discountPercentage}% off&#10089;</span></h3>
          {product.category && <h1><span>{product.category}</span></h1>}
          {product.color && <h1>color: <span>{product.color}</span></h1>}
        </div>
        <div className={styles.option}>
          <button>Delete</button>
          <button>See more like this</button>
        </div>
      </div>
    </div>
  )
}

export default Product