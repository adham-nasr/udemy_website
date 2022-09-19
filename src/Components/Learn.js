import styles from './learn.module.css'

const Learn = () => {


    return (
        <div className={styles.mdiv}>
            <h2>What you'll learn</h2>
            <div >
                <ul>
                    <li>
                        <div>
                            &#x2713;
                            <span>Create their own Python Programs</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            &#x2713;
                            <span>Become an experienced Python Programmer</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            &#x2713;
                            <span>Parse the Web and Create their own Games</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Learn;
