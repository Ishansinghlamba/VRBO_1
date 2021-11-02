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
                     <div className={styles.fl2}>
                         <div>
                             <img src="https://odis.homeaway.com/odis/destination/7354b320-26d3-4fe7-8471-d940a15d9d43.hw2.jpg" alt="dog" />
                         </div>
                         <div>
                             <img src="https://odis.homeaway.com/odis/homepage/2a55d131-f53a-455a-8737-45038b308798.hw2.jpg" alt="beach" />
                         </div>
                         <div>
                             <img src="https://odis.homeaway.com/odis/destination/776c3818-9b31-4028-b702-fa1e70e6c13d.hw2.jpg" alt="home" />
                         </div>
                         <div>
                             <img src="https://odis.homeaway.com/odis/destination/d7b69e76-921d-4abb-a5a3-acb2fba344de.hw2.jpg" alt="more than 3" />
                         </div>

                     </div>

                </div>
            </div>
        </div>
    )
}

export default Main
