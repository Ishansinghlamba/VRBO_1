import styles from "./Modal.module.css"
import {useState} from "react"
import axios  from "axios"
function Modal({setOpen}) {
    const[user,setUser] = useState({
        email:"",
        firstname:"",
        lastname:"",
        password:""
    })
    const handlechange =(e)=>{
        const{name,value} = e.target;
        setUser({...user,[name]:value})
    }
    const register = ()=>{
         const {firstname,email,lastname,password} = user;
         if(email && firstname && lastname && password){
            axios.post("http://localhost:9002/signup")
            .then((res)=>{console.log(res);})

         } else{
             alert("Invalid Input")
         }
    }
    return (
        <div className={styles.modal}>
            <div className={styles.inner_mod}>
                <div className={styles.blue}>
                    <h2 className={styles.cross} onClick={()=>{setOpen(false)}}>X</h2>
                    <h2 className={styles.text}>Log in or sign up on Vrbo</h2>
                </div>
                <div className={styles.inside_box}>
                    {/* <input type="email" placeholder="Email Address" /> */}
                    <div className={styles.inputField}>
                 <input type="text" placeholder=" " name="email" value={user.email} onChange={handlechange} />
                  <span>Email address</span>
                        </div>
                        <div className={styles.inputField}>
                 <input type="text" placeholder=" " name="firstname" value={user.firstname} onChange={handlechange}/>
                  <span>First Name</span>
                        </div>
                        <div className={styles.inputField}>
                 <input type="text" placeholder=" " name="lastname" value={user.lastname} onChange={handlechange}/>
                  <span>Last Name</span>
                        </div>
                        <div className={styles.inputField}>
                 <input type="password" placeholder=" " name="password" value={user.password} onChange={handlechange}/>
                  <span>Password</span>
                        </div>
                        <div className={styles.btn} onClick={register}>Get Started</div>
                </div>
            </div>
        </div>
    )
}

export default Modal
