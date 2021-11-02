import styles from "../Section-1/Main.module.css";
function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.img_cont}>
                <h2>Get inspired for a family trip</h2>
                <p>Book homes with space, convenience and amenities</p>
                <div className={styles.flex}>
                     <div className={styles.fl1}>
                         <img src="https://odis.homeaway.com/odis/destination/a8f63526-cf00-4610-a6c4-810d1b12cd9f.hw2.jpg" alt="l1" />
                     </div>
                     <div className={styles.fl2}></div>

                </div>
            </div>
        </div>
    )
}

export default Main
