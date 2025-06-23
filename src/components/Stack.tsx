import styles from "../styles/Stack.module.scss"

export default function Stack() {
    const stack = [
        { name: "HTML", image: "/stack/html.png", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", image: "/stack/css.png", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "Javascript", image: "/stack/js.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "TypeScript", image: "/stack/typeScript.png", link: "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html" },
        { name: "React", image: "/stack/react.png", link: "https://reactjs.org/docs/getting-started.html" },
        { name: "React Native", image: "/stack/reactNative.png", link: "https://reactnative.dev/docs/getting-started" },
        // { name: "Redux", image: "/stack/redux.png", link: "https://redux.js.org/introduction/getting-started" },
        { name: "Redux Toolkit", image: "/stack/redux.png", link: "https://redux-toolkit.js.org/introduction/getting-started" },
        { name: "Next.js", image: "/stack/next.png", link: "https://nextjs.org/docs" },
        { name: "Vite", image: "/stack/vite.png", link: "https://vitejs.dev/guide/" },
        { name: "Node JS", image: "/stack/nodeJS.png", link: "https://nodejs.org/en/docs/guides/getting-started-guide/" },
        { name: "Express", image: "/stack/express.png", link: "https://expressjs.com/fr/starter/hello-world.html" },
        { name: "MongoDB", image: "/stack/mongoDB.png", link: "https://www.mongodb.com/docs/manual/tutorial/getting-started/" },
        { name: "GitHub", image: "/stack/gitHub.png", link: "https://docs.github.com/fr/get-started" },
        { name: "Yarn", image: "/stack/yarn.png", link: "https://yarnpkg.com/getting-started/install" },
        { name: "Sass", image: "/stack/sass.png", link: "https://sass-lang.com/documentation/" },
        // { name: "Méthode Agile", image: "/stack/agile.png", link: "https://www.atlassian.com/fr/agile" },
        { name: "Figma", image: "/stack/figma.png", link: "https://help.figma.com/hc/en-us/categories/360002042553-Figma-design#Get-started" },
        { name: "Photoshop", image: "/stack/photoshop.png", link: "https://helpx.adobe.com/photoshop/get-started.html" },
        { name: "Illustrator", image: "/stack/illustrator.png", link: "https://helpx.adobe.com/illustrator/get-started.html" },
        { name: "InDesign", image: "/stack/inDesign.png", link: "https://helpx.adobe.com/indesign/get-started.html" },
        { name: "Premiere Pro", image: "/stack/premiere.png", link: "https://helpx.adobe.com/premiere-pro/get-started.html" },
    ]

    const fullStack = stack.map((data, i) => {
        return (
            <div className={styles.card} key={i} onClick={() => window.open(`${data.link}`, "_blank")}>
                <div className={styles.description}>
                    <img src={data.image} alt="stack" />
                    <p >{data.name}</p>
                </div>
            </div>
        )
    })
    return (
        <div className={styles.container}>
            <span id="stack" />
            <p>STA<span style={{ color: "#f15454" }}>C</span>K</p>
            <span />
            <img src="/strongman.png" alt="strongman" />
            <div className={styles.stack}>
                {fullStack}
            </div>
        </div>
    )
}