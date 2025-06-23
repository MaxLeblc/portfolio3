import { useEffect } from "react";
import styles from "../styles/Transition.module.scss"

export default function Transition() {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            document.body.style.setProperty(
                "--scroll",
                (window.scrollY / (document.body.offsetHeight - window.innerHeight)).toString()
            )
        })
    }, [])

    return (
        <div className={styles.container}>
            <span className={styles.animation} />
            <span className={styles.animation} />
            <span className={styles.animation} />
        </div>
    )
}