import styles from "../Banner/Banner.module.css";
import { MdOutlinePlace } from 'react-icons/md';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from 'react-date-range';
import {useState,useEffect,useRef} from "react"
import {format} from "date-fns"



function Banner() {
    const [startDate,setStartDate]=useState(new Date());
    const [endDate,setEndDate]=useState(new Date());
    const [showDate,setShowDate]=useState(false);
    const[checkin,setCheckin] = useState("Checkin")
    const[checkout,setCheckout] = useState("Checkout");
    const ref = useRef(0)
    useEffect(() => {
        if(ref.current ===0){
            setCheckin("Checkin")
            setCheckout("Checkout")
            ref.current++

        } else{
            const fstd = format(new Date(startDate.toISOString()),"dd -MMMM -yy");
        setCheckin(fstd)
        const estd = format(new Date(endDate.toISOString()),"dd -MMMM -yy");
        setCheckout(estd)
        
        }
        
    }, [startDate,endDate])

    const selectionRange={
        startDate:startDate,
        endDate:endDate,
        key:"selection"
    }
    const handleSelect = (ranges)=>{
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    return (
        <>
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
                        <div className={`${styles.check}`} onClick={()=>{setShowDate(!showDate)}}>
                            <div className={styles.checkin}>
                                 {checkin}
                            </div>
                            <div className={styles.checkout}>
                                 {checkout}
                            </div>


                        </div>
                        <div className={`${styles.inputField} ${styles.check1}`}>
                 <input type="number" placeholder=" " name="email" min={1}/>
                  <span>Guests</span>
                        </div>
            <div className={styles.btn}>Search</div>

            </div>
            { showDate && <div className={styles.in_out}><DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              onChange={handleSelect}
            /></div>}

        </div>
        </>
    )
}

export default Banner
