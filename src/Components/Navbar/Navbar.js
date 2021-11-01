import styles from "../Navbar/Navbar.module.css";
import { AiOutlineHeart } from 'react-icons/ai';
import {MdOutlinePersonOutline} from "react-icons/md"
import {IoPersonAddOutline} from "react-icons/io"

function Navbar() {
    return (
        <div className={styles.main_nav}>
            <img src="https://csvcus.homeaway.com/rsrcs/cdn-logos/5.8.0/sitename/vrbo/web/logo.svg" alt="logo"/>
            <div>
               <div className={styles.div1}><AiOutlineHeart/>
               <span className={styles.dark}>Trip Boards</span>
               </div>
               <div className={styles.div1}><MdOutlinePersonOutline/>
               <span className={styles.dark}>Log in</span>

               </div>
               <div>1</div>
               <div>1</div>
               <div>1</div>
               <div>1</div>
               <div>1</div>


            </div>
        </div>
    )
}

export default Navbar;
