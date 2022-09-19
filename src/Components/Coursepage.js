import Ad from './Ad';
import Description from './Description';
import Learn from './Learn';
import Req from './Req';
import styles from './coursepage.module.css';
import Content from './Content';
import Instructor from './Instructor';
import Text from './Text';

const Coursepage = () => {


    return (
        <div>
            <Ad/>
            <div style={{width:"50%" ,  margin:"0 auto 60px auto" , paddingRight:"30%"}} className={styles.cpdiv}>
                <Learn />
                <Content />
                <Req />
                <Description />
                <Instructor id="1">
                    <Text>
                        <div><p><strong><em>&nbsp; &nbsp;</em> </strong>Avinash Jain is currently a senior at UC Berkeley majoring in Electrical Engineering and Computer Science. He's the CEO and Founder of TheCodex, an online educational&nbsp;platform focused on bringing the best programming content to hundreds of&nbsp;thousands of students around the world.</p><p>His programming journey began at the age of 10, starting off with simple Python scripts to crawl the weather.&nbsp;Since then, he's worked at numerous companies and is professionally experienced in Python, iOS Development and Web Development. He's launched a plethora of applications in the App Store amassing thousands of downloads. Additionaly, he's competed and won in&nbsp;several hackathons around the world including PennApps and NWHacks.</p><p>Avinash has a passion to teach - his enthusiasm and love for programming is evident in every video. For the past 7 years he's been an instructor on Udemy and he loves motivating and enabling others to pursue their programming dreams. He hopes to help students realize the power of programming and jumpstart their careers through his courses.</p><p>Checkout TheCodex for all of his courses, fantastic&nbsp;discounts, and&nbsp;any guidance or help.&nbsp;</p></div>
                    </Text>
                </Instructor>
                <Instructor id="2">
                    <Text>
                    <div><p>You've taken a lengthy and boring coding class, but you're clueless about applying these concepts to build your ideas. The Codex shows you how to <strong>build fun, practical projects</strong>. Now, you can stand out from the crowd and <strong>land your dream job</strong>.</p><p><br></br></p><p>Join us on our platform today! </p><p><br></br></p><p><br></br></p></div>
                    </Text>
                </Instructor>
            </div>
        </div>

    )
}

export default Coursepage;
