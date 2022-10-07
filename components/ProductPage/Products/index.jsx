import styles from '../../../styles/Homepage/Products.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode} from "swiper";
import Link from 'next/link'
import Image from 'next/image'

export default function Products({ products, title }) {
    const PRODUCTNAMELENGHT = 42
    return (
        <div className={styles.mainDiv}>
            <h2 className="text-xl font-semibold">{title}</h2>

            {/* <div className={styles.productsDiv}> */}
            <div className='py-2'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={18}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="relative"
                >
                    {products.map(product => (
                        <SwiperSlide style={{ width: "150px !important" }} className=' w-36' key={product._id}>
                            <Link href={`${product._id}`} passHref>
                                <div className={styles.productDiv}>
                                    <div className={styles.imageDiv}>
                                        <Image src={product.image[0].url} layout="fill" objectFit='contain' />
                                    </div>
                                    <h5 className='text-xs px-2 font-semibold capitalize'>{product.name.length > PRODUCTNAMELENGHT ? product.name.slice(0, PRODUCTNAMELENGHT - 1) + "..." : product.name}</h5>
                                    <h3>₹{product.price}</h3>
                                    {product.discountPercentage && <i>Get {product.discountPercentage}% off</i>}
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
