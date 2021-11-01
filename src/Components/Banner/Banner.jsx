import styles from "../Banner/Banner.module.css";

function Banner() {
    return (
        <div className={styles.banner}>
            <img src="https://odis.homeaway.com/odis/homepage/39a94c43-6566-4dd7-9e26-74a3355a1a9d.hw9.jpg" alt="logoi" className={styles.img_c} />
            <div className={styles.abs}>
                <h1 >Beach house? Condo? Cabin?</h1>
                <h1>Find the perfect vacation rental</h1>
            </div>
        </div>
    )
}

export default Banner
