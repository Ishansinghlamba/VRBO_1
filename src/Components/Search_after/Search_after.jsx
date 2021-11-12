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
