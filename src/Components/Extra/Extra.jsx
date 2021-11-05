import styles from "./extra.module.css";
import {RiLock2Line} from "react-icons/ri"
import {FiCoffee} from "react-icons/fi"
import {FaCoins} from "react-icons/fa"
import {RiHeartPulseLine} from "react-icons/ri"
function Extra() {
    return (
        <div className={styles.cont}>
            <div className ={styles.in}>
                <div className={styles.out}>
                  <RiLock2Line size={30}/>
                  <h3>Peace of mind yes</h3>
                  <p>Our Book with Confidence guarantee gives you 24/7 support.</p>
                </div>
                <div className={styles.out}>
                    <FiCoffee size={30}/>
                    <h3>All the privacy of home</h3>
                    <p>Enjoy full kitchens, laundry, pools, yards and more.</p>

                </div>
                <div className={styles.out}>
                <FaCoins size={30}/>
                <h3>More for less</h3>
                <p>More space, more privacy, more amenities — more value.</p>
                </div>
                <div className={styles.out}>
               < RiHeartPulseLine size={30}/>
               <h3>A place for everyone</h3>
               <p>We stand for diversity, inclusion and families everywhere.</p>
                </div>

            </div>
        </div>
    )
}

export default Extra
