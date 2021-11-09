import styles from "./Modal_L.module.css"
import {useState} from "react"
import axios  from "axios"
function Modal_L({setOpenl}) {
    const[user_l,setuser_l] = useState({
        email:"",
        password:""

    })
    const handlechange = (e)=>{
        const{name, value} = e.target;
        setuser_l({
            ...user_l,
            [name]:value
        })
    }
    const login =()=>{
        axios.post("http://localhost:9002/login",user_l)
        .then((res)=>{
            console.log(res);
        })
    }
    return (
        <div className={styles.modal}>
            <div className={styles.inner_mod}>
            <div className={styles.blue}>
                    <h2 className={styles.cross} onClick={()=>{setOpenl(false)}}>X</h2>
                    <h2 className={styles.text}>Log in or sign up on Vrbo</h2>
                </div>
                <div className={styles.inside_box}>
                    {/* <input type="email" placeholder="Email Address" /> */}
                    <div className={styles.inputField}>
                 <input type="text" placeholder=" " name="email" value={user_l.email} onChange={handlechange}/>
                  <span>Email address</span>
                        </div>
                        <div className={styles.inputField}>
                 <input type="password" placeholder=" " value={user_l.password} onChange={handlechange}/>
                  <span>First Name</span>
                        </div>
                        <div className={styles.btn} onClick={login}>Login</div>
                </div>
            </div>
        </div>
    )
}

export default Modal_L
