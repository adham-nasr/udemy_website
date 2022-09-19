import Ad from './Ad';
import Description from './Description';
import Learn from './Learn';
import Req from './Req';
import styles from './coursepage.module.css';
const Coursepage = () => {


    return (
        <div>
            <Ad/>
            <div style={{width:"60%" ,  margin:"0 auto 60px auto" , paddingRight:"20%"}} className={styles.cpdiv}>
                <Learn />
                <Req />
                <Description />
            </div>
        </div>

    )
}

export default Coursepage;
