import { useEffect, useState } from "react"
import { useStateContext } from "../../context/Statecontext"
import { checkoutPageInputList, newArrival } from "../../utils/fakedata"
import Form from "./Form"
import Products from "./Products"
import styles from '../../styles/Checkoutpage/Checkout.module.css'
import Pricing from "./Pricing"
import { useRouter } from 'next/router'
import SuccessMessage from "./SuccessMessage"

export default function CheckoutPage() {
    const [checkOutProduct, setCheckOutProduct] = useState([])
    const [formData, setFormData] = useState({})
    const [totalPrice, setTotalPrice] = useState()
    const [subtotal, setSubtotal] = useState()
    const [totalDiscount, setTotalDiscount] = useState()
    const router = useRouter()
    const { checkOutItem } = useStateContext()
    const [error, setError] = useState(false)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    useEffect(() => {
        if (checkOutItem.length === 0) {
            router.push('/')
        }
        setTotalPrice(checkOutItem.reduce((a, b) => a + b.price, 0))
        setSubtotal(checkOutItem.reduce((a, b) => a + b.mrpPrice, 0))
        setTotalDiscount(checkOutItem.reduce((a, b) => a + (b.mrpPrice - b.price), 0))

        checkoutPageInputList.map((inputList) => {
            formData[inputList.htmlName] = ""
        })

    }, [checkOutItem])

    console.log(checkOutItem)


    const handlePostSubmission = (e) => {
        e.preventDefault()
        formData["product"] = checkOutItem
        formData["totalBill"] = totalPrice
        formData["totalDiscount"] = totalDiscount
        formData["billMrp"] = subtotal
        console.log(formData, "good job")
        // setError(false);
        // if (!name || !email || !comment) {
        //     setError(true);
        //     return;
        // }
        // const commentObj = {
        //     name,
        //     email,
        //     comment,
        //     slug,
        // };

        //     submitComment(commentObj)
        //       .then((res) => {
        //         if (res.createComment) {
        //           formData.comment = '';
        //           setFormData((prevState) => ({
        //             ...prevState,
        //             ...formData,
        //           }));
        setShowSuccessMessage(true);
        //           setTimeout(() => {
        //             setShowSuccessMessage(false);
        //           }, 3000);
        //         }
        //       });
    };

    return (
        <div className={styles.mainDiv}>
            {showSuccessMessage && <SuccessMessage showSuccessMessage={showSuccessMessage} />}
            <h2 className={styles.heading}>Billing Details</h2>
            <form onSubmit={handlePostSubmission}>
                <Form formInputListData={checkoutPageInputList} setFormData={setFormData} formData={formData} />
                <h2 className={styles.heading}>Your Order</h2>
                <Products products={checkOutItem} />
                <Pricing totalPrice={totalPrice} totalDiscount={totalDiscount} subtotal={subtotal} />
                <div className={styles.buttonDiv}>
                    <button type="submit">Place Order</button>
                </div>
            </form>
        </div>
    )
}
