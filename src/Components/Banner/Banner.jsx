import styles from "../Banner/Banner.module.css";
import { MdOutlinePlace } from 'react-icons/md';


function Banner() {
    return (
        <div className={styles.banner}>
            <img src="https://odis.homeaway.com/odis/homepage/39a94c43-6566-4dd7-9e26-74a3355a1a9d.hw9.jpg" alt="logoi" className={styles.img_c} />
            <div className={styles.abs}>
                <h1 >Beach house? Condo? Cabin?</h1>
                <h1>Find the perfect vacation rental</h1>
            </div>
            <div className={styles.form}>
            <div className={styles.inputField}>
                <div className={styles.icon}><MdOutlinePlace size={25}/></div>
                 <input type="text" placeholder=" " name="email" />
                  <span>Search Destination</span>
                        </div>
                        <div className={`${styles.inputField} ${styles.check}`}>
                 <input type="text" placeholder=" " name="email" />
                  <span>Email address</span>
                        </div>
                        <div className={`${styles.inputField} ${styles.check1}`}>
                 <input type="text" placeholder=" " name="email" />
                  <span>Email address</span>
                        </div>
            <div className={styles.btn}>Search</div>

            </div>
        </div>
    )
}

export default Banner
