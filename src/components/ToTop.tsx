import { useEffect, useState } from "react"
import styles from "../styles/ToTop.module.scss"
import { FaChevronUp } from "react-icons/fa"

export default function ToTop() {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        document.documentElement.scrollTop > 500 ? setVisible(true) : setVisible(false)
        window.innerWidth < 864 && setVisible(false)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible)
    }, [])

    return (
        <>
            <span className={styles.up} style={{ display: visible ? "inline" : "none" }} onClick={scrollToTop}><FaChevronUp /></span>
        </>
    )
}