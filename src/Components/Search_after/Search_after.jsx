import React from 'react'
import styles from "./search_a.module.css";
import { useLocation } from "react-router-dom";
import {data_city} from "./Search_data"



function Search_after() {
    const { state } = useLocation();

   const{checkin,checkout,loc}= state
    return (
        <>
           <div className={styles.outer}>
               <div className={styles.data}>
                   {data_city.map((i)=>(
                       <>
                          <div className={styles.card}>
                             <div className={styles.img}>
                                 <img src={i.img} alt="" className={styles.im}/>
                             </div>
                             <div className={styles.info}>
                                   <h3>{i.name}</h3>
                                   <p>Sleeps 10,4 bedroom, 2bed</p>
                                   <h2 className={styles.self}>{i.price}</h2>

                             </div>
                          </div>
                       </>
                   ))}
               </div>
               <div className={styles.map}></div>
           </div>

        </>
    )
}

export default Search_after
