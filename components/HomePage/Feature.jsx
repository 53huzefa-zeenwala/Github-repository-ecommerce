import styles from '../../styles/HomePage/Feature.module.css'
import Image from 'next/image'

export default function Feature({ feature }) {
    
    return (
        <div className={styles.mainDiv}>
            <div className={styles.imageDiv}>
                <span className={styles.circle}></span>
                <Image src={feature.featureImage} layout='fill' objectFit='cover' priority={true}/>
            </div>
            <div className={styles.textDiv}>
                <h3>{feature.saleTag}</h3>
                <h1>Get {feature.discountPercentage}% off</h1>
                <p>{feature.productDescription}</p>
                <button>Shop Now</button>
            </div>
        </div>

    )
}
