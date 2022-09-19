
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
            </div>
            <div className={styles.sdiv2}>

            </div>
        </div>
    )
}

export default Sidebar;