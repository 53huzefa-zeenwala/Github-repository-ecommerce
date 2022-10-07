import styles from '../../../styles/ProductsPage/CategoryAndFilter.module.css'
import { filter } from '../../../utils/fakedata'


export default function Filter({ filterStatus, setFilterStatus }) {
    const results = 20
    const priceLowerLimit = 1000
    const discountOf = null
    const colorOf = "black"
    const brandOf = null
    const frameTypeOf = null
    return (
        <div data-filterstatus={filterStatus} className={styles.filterMainDiv}>
            <div className={styles.filterDiv}>
                <div className={styles.filterButtonDiv}>
                    <span>results - {results}</span>
                    <button onClick={() => setFilterStatus(false)}>
                        close
                    </button>
                </div>
                <div className={styles.filter}>
                    <h1>Price</h1>
                    <button className={priceLowerLimit || styles.active}>All Prices</button>
                    {filter.priceRange.map((price, i) => (
                        price.upperLimit ? <button key={i} className={priceLowerLimit === price.lowerLimit ? styles.active : null}>{price.lowerLimit === 0 ? "under" : `₹${price.lowerLimit} -`} ₹{price.upperLimit}</button> : <button key={i}>over ₹{price.lowerLimit}</button>
                    ))}
                </div>
                <div className={styles.filter}>
                    <h1>Discount</h1>
                    {filter.discounts.map((discount, i) => (
                        <button key={i} className={discountOf === discount ? styles.active : null}>{discount}% off or more</button>
                    ))}
                </div>
                <div className={styles.filter}>
                    <h1>color</h1>
                    <button className={colorOf || styles.active}>All colors</button>
                    {filter.colors.map((color, i) => (
                        <button key={i} className={colorOf === color ? styles.active : null}>{color}</button>
                    ))}
                </div>
                <div className={styles.filter}>
                    <h1>brand</h1>
                    <button className={brandOf || styles.active}>All brands</button>
                    {filter.brands.map((brand, i) => (
                        <button key={i} className={brandOf === brand ? styles.active : null}>{brand}</button>
                    ))}
                </div>
                <div className={styles.filter}>
                    <h1>frame Type</h1>
                    <button className={frameTypeOf || styles.active}>All frame Types</button>
                    {filter.frameTypes.map((frameType, i) => (
                        <button key={i} className={frameTypeOf === frameType ? styles.active : null}>{frameType}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}
