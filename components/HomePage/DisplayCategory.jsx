import styles from '../../styles/Homepage/DisplayCategory.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function DisplayCategory({ categories }) {
    return (
        <div className={styles.mainDiv}>
            {categories.map((category) => (
                <div className={styles.displayDiv} key={category._id}>
                     <Image src={category.image} layout="fill" objectFit='contain' quality={40} priority={true}/>
                     <div className={styles.text}>
                        <h1>{category.name}</h1>
                        <button>
                            <Link href={`/category/${category.name}`}>
                                Shop Now
                            </Link>
                        </button>
                     </div>
                </div>
            ))}
        </div>
    )
}
