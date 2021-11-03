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
            <div className={styles.incon}>
            <h2>Find spaces that suit your style</h2>
            <Slider prevArrow={<Prev/>} nextArrow={<Next/> } slidesToShow={4} infinite={false}>
              {data.map((i)=>(<div className={styles.card_cont}>
                  <img src={i.image} alt="" />
              </div>))}
            </Slider>
            </div>
        </div>
    )
}
// const Card =({item})=>{
// //    console.log(item);
//    return(
//        <div className={styles.card_cont}>

//        </div>
//    )
// }

export default Crousel
