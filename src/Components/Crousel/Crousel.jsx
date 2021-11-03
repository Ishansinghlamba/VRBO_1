import styles from "../Crousel/Crousel.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./crousel.css";
import {data} from "./criusel_data";
import {IoIosArrowDropleft} from "react-icons/io";
import {IoIosArrowDropright} from "react-icons/io"

const Prev=(props)=>{
    const {className,onClick} = props;
    return(
        <div className={className} onClick={onClick}>
           <IoIosArrowDropleft size={45} className={styles.left}/> 
        </div>
    )
}
const Next=(props)=>{
    const {className,onClick} = props;
    return(
        <div className={className} onClick={onClick}>
           <IoIosArrowDropright size={45} className={styles.right} /> 
        </div>
    )
}
function Crousel() {
    return (
        <div className={styles.cont}>
            <Slider prevArrow={<Prev/>} nextArrow={<Next/>}
>
              {data.map((i)=>(<div>
                  <img src={i} alt="mn" style={{width:"100%",height:"400px"}}/>
              </div>))}
            </Slider>
        </div>
    )
}

export default Crousel
