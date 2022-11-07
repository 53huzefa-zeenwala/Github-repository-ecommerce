import { useEffect } from 'react'
import { useStateContext } from '../context/Statecontext'
import styles from '../styles/Alert.module.css'

const Alert = () => {
    const { alert: { message, type, timeout, show }, setAlert } = useStateContext()
    useEffect(() => {
        if (show) {
            setTimeout(() => {
                setAlert({ ...alert, show: false })
            }, timeout + 1000);
        }
    }, [show])

    return (
            <div className={styles.main} data-show={show} data-error={type === 'error' && true} data-info={type === 'info' && true} data-success={type === 'success' && true}>
                {type === "info" && <img src="/icon/error-svgrepo-com.svg" alt="" />}
                { type === "error" && <img src="/icon/browser-error-svgrepo-com.svg" alt="" />}
                {type === "success" && <img src="/icon/checked-success-svgrepo-com.svg" alt="" />}
                <h1>{message}</h1>
            </div>
    )
}

export default Alert