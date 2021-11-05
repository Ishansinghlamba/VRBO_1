import styles from "./Modal.module.css"
function Modal({setOpen}) {
    return (
        <div className={styles.modal}>
            <div className={styles.inner_mod}>
                <div className={styles.blue}>
                    <h2 className={styles.cross} onClick={()=>{setOpen(false)}}>X</h2>
                    <h2 className={styles.text}>Log in or sign up on Vrbo</h2>
                </div>
                <div className={styles.inside_box}></div>
            </div>
        </div>
    )
}

export default Modal
