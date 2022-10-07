import { useEffect } from 'react'
import { useStateContext } from '../context/Statecontext'
import styles from '../styles/Alert.module.css'

const Alert = () => {
    const { alert: { message, type, timeout, show }, setAlert } = useStateContext()
    useEffect(() => {
    if (show) {
        setTimeout(() => {
            setAlert({...alert, show: false})
        }, timeout);
    }
    }, [show])
    
    return (
        show && (
            <div className={styles.main} data-error={type === 'error' && true} data-info={type === 'info' && true} data-success={type === 'success' && true}>
                <h1>{message}</h1>
            </div>
        )
    )
}

export default Alert