import styles from "../styles/Prod.module.scss"
import { FaArrowRight, FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Prod() {
    const [visible, setVisible] = useState(false)
    const [eyeType, setEyeType] = useState(false)

    const onDragEnd = () => {
        setTimeout(() => {
            setVisible(true)
            setTimeout(() => {
                window.open("https://github.com/MaxLeblc", "_blank")
            }, 1200)
        }, 200)
    }

    const onMouseUp = () => {
        setEyeType(!eyeType)
        setTimeout(() => {
            setEyeType(false)
        }, 500)
    }

    return (
        <div className={styles.container}>
            <span id="prods" />
            <p>PR<span style={{ color: "#f15454" }}>O</span>DS</p>
            <span />

            <div className={styles.containerView}>
                <div className={styles.view1}>
                    <div className={styles.description}>
                        <p>A memes generator?<br />Take my money!</p>
                        <div className={styles.button}>
                            <a href="https://what-do-u-meme.vercel.app" target="_blank">Demo</a>
                            <a href="https://github.com/MaxLeblc/whatDoUMeme" target="_blank">Code</a>
                        </div>
                    </div>
                </div>

                <div className={styles.view2}>
                    <div className={styles.description}>
                        <p>Consutler les dernières sorties de films</p>
                        <div className={styles.button}>
                            <a href="https://popcorn-front-five.vercel.app" target="_blank">Demo</a>
                            <a href="https://github.com/MaxLeblc/popcornFront" target="_blank">Code</a>
                        </div>
                    </div>
                </div>

                <div className={styles.view3}>
                    <div className={styles.description}>
                        <p>Prendre des notes<br />c'est important</p>
                        <div className={styles.button}>
                            <a href="https://note-rho-navy.vercel.app" target="_blank">Demo</a>
                            <a href="https://github.com/MaxLeblc/note" target="_blank">Code</a>
                        </div>
                    </div>
                </div>

                <div className={styles.view4}>
                    <div className={styles.description}>
                        <p>Générer des recettes<br />avec CauldronGTP</p>
                        <div className={styles.button}>
                            <a href="https://cauldron-gpt.vercel.app" target="_blank">Demo</a>
                            <a href="https://github.com/MaxLeblc/cauldronGPT" target="_blank">Code</a>
                        </div>
                    </div>
                </div>

                <div className={styles.view5}>
                    <div className={styles.description}>
                        <p>Touittaire avant l'apocalypse</p>
                        <div className={styles.button}>
                            <a href="https://touittaire-front.vercel.app/login" target="_blank">Demo</a>
                            <a href="https://github.com/MaxLeblc" target="_blank">Code</a>
                        </div>
                    </div>
                </div>

                <div className={styles.view6}>
                    <div className={styles.description}>
                        <p>Trouver une Coop avec Buddy</p>
                        <div className={styles.button}>
                            <a href="https://drive.google.com/file/d/1Og9JmID8T2JecsIPo0cu3smGE1zvgfuF/view?usp=share_link" target="_blank">Demo</a>
                            <a href="https://github.com/MaxLeblc" target="_blank">Code</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.containerEye}>
                <p>D'autres réalisations sont dispo sur mon Repo, jette un oeil&nbsp;!<FaArrowRight />
                    <motion.div
                        className={styles.eye}
                        drag
                        whileDrag={{ scale: 1.2 }}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                        dragConstraints={{
                            top: -1000,
                            left: -1000,
                            right: 1000,
                            bottom: 1000,
                        }}
                        onDragEnd={onDragEnd}
                        onMouseUp={onMouseUp}
                    >
                        {!visible && (eyeType ? <FaRegEyeSlash /> : <FaRegEye title="Bien lire la consigne !" />)}
                    </motion.div>
                    {visible && <p style={{ color: "#f15454", fontSize: "22px" }} >Let's go!</p>}
                </p>
            </div>
        </div >
    )
}