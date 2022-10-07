import React, { useEffect, useState } from 'react'
import CartHeader from './CartHeader';
import CartProducts from './CartProducts';
import { useStateContext } from '../../context/Statecontext'
import styles from '../../styles/Cartpage/Cart.module.css'

import { cartProduct } from '../../utils/fakedata';
const CartPage = () => {
    const { cartItemQuantity } = useStateContext();
    const [totalPrice, setTotalPrice] = useState()
    const [subtotal, setSubtotal] = useState()
    const [totalDiscount, setTotalDiscount] = useState()

    useEffect(() => {
        const Items = JSON.parse(localStorage.getItem('cartItem'))
        if (Items) console.log(Items, 'from storage');
    }, [])

    useEffect(() => {
        if (cartProduct.length === 0 || !cartProduct) {
            return
        }
        setTotalPrice(cartProduct.reduce((a, b) => a + b.price, 0))
        setSubtotal(cartProduct.reduce((a, b) => a + b.mrpPrice, 0))
        setTotalDiscount(cartProduct.reduce((a, b) => a + (b.mrpPrice - b.price), 0))

    }, [cartProduct])

    // still need to work on delete product decrease and increase quantity
    
    return (
        <div className={styles.main}>
            <CartHeader subtotal={subtotal} cartItemQuantity={cartItemQuantity} />
            <CartProducts cartProduct={cartProduct} />
        </div>
    )
}

export default CartPage