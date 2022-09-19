
import styles from './ad.module.css'

const Ad = () => {


    return (
        <div className={styles.mbanner}>
            <div className={styles.mad}>
                <div className={styles.mnav}>
                    <a href="">Development </a>
                    <span>&gt;</span>
                    <a href=""> Programing Languages </a>
                    <span>&gt;</span>
                    <a href=""> Python</a>
                </div>
                <h1>Learn Python: The Complete Python Programming Course</h1>
                <h3>Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!</h3>
                <div className={styles.mdiv}>
                    <p>4</p>
                    <span className={styles.msvg}>
                        <svg preserveAspectRatio="none" viewBox="0 -130 300 300">
                            <polygon points="100,10 40,180 190,60 10,60 160,180"/>
                        </svg>
                    </span>
                    <span className={styles.msvg}>
                        <svg preserveAspectRatio="none" viewBox="0 -130 300 300">
                            <polygon points="100,10 40,180 190,60 10,60 160,180"/>
                        </svg>
                    </span>
                    <span className={styles.msvg}>
                        <svg preserveAspectRatio="none" viewBox="0 -130 300 300">
                            <polygon points="100,10 40,180 190,60 10,60 160,180"/>
                        </svg>
                    </span>
                    <span className={styles.msvg}>
                        <svg preserveAspectRatio="none" viewBox="0 -130 300 300">
                            <polygon points="100,10 40,180 190,60 10,60 160,180"/>
                        </svg>
                    </span>
                    <span><a href="">(3,332 ratings)</a></span>
                    <p>19,799 students</p>
                </div>
                <div className={styles.mdiv2}>
                    <p>Created By <span><a href="">Avinash Jain, </a></span><span><a href="">The Codex</a></span></p>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Ad;