import React from 'react'
import styles from "./search_a.module.css";
import { useLocation } from "react-router-dom";



function Search_after() {
    const { state } = useLocation();

   console.log(state);
    return (
        <div className={styles.data}>
            <h2 className={styles.left}>Pune</h2>
        </div>
    )
}

export default Search_after
