import Ad from './Ad';
import Description from './Description';
import Learn from './Learn';
import Req from './Req';
import styles from './coursepage.module.css';
import Content from './Content';
const Coursepage = () => {


    return (
        <div>
            <Ad/>
            <div style={{width:"50%" ,  margin:"0 auto 60px auto" , paddingRight:"30%"}} className={styles.cpdiv}>
                <Learn />
                <Content />
                <Req />
                <Description />
            </div>
        </div>

    )
}

export default Coursepage;
