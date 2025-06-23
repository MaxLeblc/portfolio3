import { FaGithub, FaLinkedinIn, FaPortrait } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import styles from "../styles/About.module.scss"

export default function About() {
    return (
        <div className={styles.container} id="about">
            <div className={styles.intro}>
                <h1>Full-Stack<br />Développeur</h1>
                <p>Salut ! Je suis Maxime, un développeur soucieux de l'expérience utilisateur et de la qualité du code, prêt à m'investir dans votre équipe et à relever des défis techniques.</p>
            </div>
            {/* <div className={styles.slidersA}>
                <div className={styles.sliderLeft}>
                    <p>Maxime Leblanc.</p>
                    <p>Maxime Leblanc.</p>
                    <span style={{ color: "#f15454" }}>Maxime Leblanc.</span>
                    <p>Maxime Leblanc.</p>
                </div>
                <div className={styles.sliderLeft}>
                    <p>Maxime Leblanc.</p>
                    <p>Maxime Leblanc.</p>
                    <span style={{ color: "#f15454" }}>Maxime Leblanc.</span>
                    <p>Maxime Leblanc.</p>
                </div>
            </div>
            <div className={styles.slidersB}>
                <div className={styles.sliderRight}>
                    <p>Développeur Full-Stack.</p>
                    <p>Développeur Full-Stack.</p>
                    <span style={{ color: "#f15454" }}>Développeur Full-Stack.</span>
                    <p>Développeur Full-Stack.</p>
                </div>
                <div className={styles.sliderRight}>
                    <p>Développeur Full-Stack.</p>
                    <p>Développeur Full-Stack.</p>
                    <span style={{ color: "#f15454" }}>Développeur Full-Stack.</span>
                    <p>Développeur Full-Stack.</p>
                </div>
            </div> */}
            <div className={styles.about}>
                <p>Après 7 années d'expérience dans la gestion des produits d'assurance et 5 années dans le design graphique, j'ai décidé de faire évoluer ma carrière vers le developpement informatique.</p>
                <p>Je suis aujourd'hui développeur full-stack !</p>
                <p>Sorti diplomé d'un titre RNCP de niveau 6 "Chef de projet d'application web & mobile", j'ai poursuivi mon apprentissage en étant, en parallèle,
                    teacher assistant dans le bootcamp qui m'a formé. De ce fait, j'accompagnais les élèves dans leurs problématiques liées au code
                    et je les aidais aussi à se débugger.</p>
                <p>Vous trouverez sur mon portfolio, une partie mon stack qui évolue au fil de ma curiosité et de ma pratique, ainsi que certains projets réalisés notamment en JS, TS, React, React-Native, Python, Java et Go.</p>
                <p>Je suis actuellement à la recherche d'un poste alors n'hésitez pas à me contacter pour que nous puissions échanger ensemble !</p>
                <p>Vous pouvez télécharger mon CV sur l'icône le plus à droite ;)</p>
            </div>
            <div className={styles.links}>
                <img src="/links_arrow.svg" alt="links_arrow" />
                <a href="https://github.com/MaxLeblc" target="_blank" title="Mon GitHub"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/maxime-leblanc-dev/" target="_blank" title="Mon LinkedIn"><FaLinkedinIn /></a>
                <a href="mailto:maxime.leb@gmail.com" target="_blank" title="Me contacter par mail"><GrMail /></a>
                <a href="/CV/CV_maxime_leblanc.pdf" download target="_blank" title="Mon CV"><FaPortrait /></a>
            </div>
        </div>
    )
}
