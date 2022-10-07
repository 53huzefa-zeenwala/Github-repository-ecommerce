import styles from '../../styles/Productpage/Product.module.css'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useStateContext } from '../../context/Statecontext'
import Warning from './Warning'


export default function Details({ product, discountPercent }) {
    const { query, push } = useRouter()
    const [showWarning, setShowWarning] = useState(false)
    const [addMore, setAddMore] = useState(false)
    const [localstorageSet, setLocalstorageSet] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const { setAlert, setCartItemQuantity, cartItemQuantity } = useStateContext()

    const addToCart = () => {
        const id = parseInt(query.id)
        addItemsToCart(id)
    }


    const addItemsToCart = (id) => {
        const isFound = (item) => item._id === id;
        if (!cartItems) {
            setCartItems([{ _id: id, productQuantity: 1, }]);
            setCartItemQuantity(cartItemQuantity + 1);
            setLocalstorageSet(true)
            setAlert({ show: true, type: 'success', message: 'Product added to your cart', timeout: 3000 })
        }
        else if (cartItems.some(isFound) === false) {
            setCartItems((perv) => [...perv, { _id: id, productQuantity: 1 }]);
            setAlert({ show: true, type: 'success', message: 'Product added to your cart', timeout: 3000 })
            setLocalstorageSet(true)
            setCartItemQuantity(cartItemQuantity + 1);
        } else {
            setShowWarning(true)
        }
    };

    useEffect(() => {
        const Item = JSON.parse(localStorage.getItem('cartItem'))
        const quantity = JSON.parse(localStorage.getItem('cartQuantity'))
        setCartItemQuantity(quantity)
        setCartItems(Item)
        if (addMore === true) {
            const id = parseInt(query.id)
            cartItems.map((item) => {
                if (item._id === id) {
                    const quantity = item.productQuantity
                    let remainingArray = cartItems.filter(data => data._id != id)
                    if (remainingArray.length != 0) {
                        setCartItems(remainingArray)
                        setCartItems((perv) => [...perv, { _id: id, productQuantity: quantity + 1 }]);
                    } else {
                        setCartItems([{ _id: id, productQuantity: quantity + 1 }])
                    }
                }
            });
            setCartItemQuantity(cartItemQuantity + 1);
            setAddMore(false)
            setAlert({ show: true, type: 'success', message: 'Product added to your cart', timeout: 3000 })
            setLocalstorageSet(true)
        }
        setShowWarning(false)
        if (localstorageSet === true) {
            localStorage.setItem('cartItem', JSON.stringify(cartItems))
            localStorage.setItem('cartQuantity', JSON.stringify(cartItemQuantity))
            setLocalstorageSet(false)
        }
    }, [addMore, localstorageSet])


    const getToCheckout = () => {
        setCheckOutItem([{
            _id: query.id,
            image: [{ url: product.image[0].url }],
            name: product.name,
            mrpPrice: product.mrpPrice,
            price: product.price,
            discountPercentage: discountPercent
        }])
        push('/checkout')
    }

    return (
        <>
            {showWarning && (<Warning setAddMore={setAddMore} showWarning={showWarning} setShowWarning={setShowWarning} />)}
            <div className={styles.textDiv}>
                <h1 className={styles.name}>{product.name}</h1>
                <div className={styles.priceDiv}>
                    {discountPercent && <h2 className={styles.discount}>-{discountPercent}%</h2>}
                    <h3 className={styles.price}><span>₹</span>{product.price}</h3>
                </div>
                <div className={styles.mrpDiv}>
                    <span>M.R.P.:</span>
                    {product.mrpPrice && <h3 className={styles.mrpPrice}> ₹{product.mrpPrice}</h3>}
                </div>
                <div className={styles.buttonDiv}>
                    <button className={styles.addCartButton} onClick={addToCart}>
                        Add to cart
                    </button>
                    <button className={styles.shopButton} onClick={getToCheckout}>
                        Shop Now
                    </button>
                </div>
                <div className={styles.detailDiv}>
                    <h1 className={styles.descHead}>Product Detail</h1>

                    {product.productDetails.map((detail, i) => (
                        <ul key={i}>
                            <li>{detail.name}:</li>
                            <li>{detail.detail}</li>
                        </ul>
                    ))}
                </div>
                <div className={styles.descDiv}>
                    <h1 className={styles.descHead}>Description</h1>
                    <p className={styles.desc}>{product.description}</p>
                </div>
            </div>
        </>
    )
}
