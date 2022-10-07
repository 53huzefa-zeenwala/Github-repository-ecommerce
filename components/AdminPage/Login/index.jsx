import Image from 'next/image'
import styles from '../../../styles/Adminpage/Login.module.css'

export default function Login() {
    return (
        <div className={styles.loginDiv}>
            <h1>Admin Page</h1>
            <form>
                <div>
                    <input type="text" id='username' name='username' placeholder='Username*' required />
                </div>
                <div>
                    <input type="password" id='password' name='password' placeholder='Password*' required />
                </div>
                <div>
                    <input type="password" id='confirmPassword' name='confirmPassword' placeholder='Confirm Password*' required />
                </div>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}
