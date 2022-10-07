import styles from '../../styles/Checkoutpage/Checkout.module.css'

export default function Pricing({ totalPrice, totalDiscount, subtotal }) {
    // console.log(totalPrice, totalDiscount, subtotal)

    return (
        <div className={styles.pricingDiv}>
            <table>
                <tbody>
                    <tr>
                        <td>Subtotal</td>
                        <td>₹{subtotal}</td>
                    </tr>
                    <tr>
                        <td>Total discount</td>
                        <td>₹{totalDiscount}</td>
                    </tr>
                    <tr className={styles.total}>
                        <th>Total</th>
                        <th>₹{totalPrice}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
