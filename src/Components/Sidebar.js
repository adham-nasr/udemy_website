
import styles from './sidebar.module.css'

const Sidebar = () => {


    return (
        <div className={styles.sdivmain}>
            <div className={styles.imgdiv}>
                <img src="https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg"/>
            </div>
            <div className={styles.sdiv1}>
                <div>
                    <span className={styles.sp1}>E£269.99</span><span className={styles.sp2}>E£269.99</span><span className={styles.sp3}>60% off</span>
                </div>
                <div style={{color:"red"}}><strong>5 hours left</strong>&nbsp; at this price!</div>
                <div className={styles.butt1}><button>Add to cart</button></div>
                <div className={styles.butt2}><button>Buy now</button></div>
                <div style={{ marginTop:"10px"}}>30 day money back</div>
                <div>

                </div>
            </div>
            <div className={styles.sdiv2}>
                <h3 style={{ marginTop:"0"}}>Training 5 or more people?</h3>
                <p>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
                <div className={styles.butt2}><button>Try Udemy Business</button></div>
            </div>
        </div>
    )
}

export default Sidebar;