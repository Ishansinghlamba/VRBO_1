import styles from "../Crousel/Crousel.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./crousel.css";
import {data} from "./criusel_data"

function Crousel() {
    console.log(data);
    return (
        <div className={styles.cont}>
            <Slider>
            
            </Slider>
        </div>
    )
}

export default Crousel
