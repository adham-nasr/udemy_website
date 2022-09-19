import styles from './Instructor.module.css'

const Instructor = (props) => {

    let atrobj={
        "xml:space":"preserve"
    }
    let atrobj2={
        "xlink:href":"#icon-certificate"
    }
    let atrobj3={
        "xml:space":"preserve",
        "xmlns:xlink":"http://www.w3.org/1999/xlink"
    }

    let obj = {"instructor": [
        {
          "name": "Avinash Jain",
          "Intro": "CEO of TheCodex.me - Teaching 500,000+ Students how to code",
          "Image": "https://img-c.udemycdn.com/user/200_H/10260436_946b_6.jpg",
          "Rating": "4.4",
          "reviewsNumber": "73,735",
          "studentsNumber": "890,586",
          "coursesNumber": "16",
          "description": [
            "Avinash Jain is currently a senior at UC Berkeley majoring in Electrical Engineering and Computer Science. He's the CEO and Founder of TheCodex, an online educational platform focused on bringing the best programming content to hundreds of thousands of students around the world.",
            "His programming journey began at the age of 10, starting off with simple Python scripts to crawl the weather. Since then, he's worked at numerous companies and is professionally experienced in Python, iOS Development and Web Development. He's launched a plethora of applications in the App Store amassing thousands of downloads. Additionaly, he's competed and won in several hackathons around the world including PennApps and NWHacks.",
            "Avinash has a passion to teach - his enthusiasm and love for programming is evident in every video. For the past 7 years he's been an instructor on Udemy and he loves motivating and enabling others to pursue their programming dreams. He hopes to help students realize the power of programming and jumpstart their careers through his courses.",
            "Checkout TheCodex for all of his courses, fantastic discounts, and any guidance or help."
          ]
        },
        {
          "name": "The Codex",
          "Intro": "Teaching Python through Projects",
          "Image": "https://img-b.udemycdn.com/user/200_H/52310762_220a.jpg",
          "Rating": "4.4",
          "reviewsNumber": "73,767",
          "studentsNumber": "890,984",
          "coursesNumber": "16",
          "description": [
            "You've taken a lengthy and boring coding class, but you're clueless about applying these concepts to build your ideas. The Codex shows you how to build fun, practical projects. Now, you can stand out from the crowd and land your dream job.",
            "Join us on our platform today!"
          ]
        }
      ]};
      let ins = obj["instructor"][props.id-1];
    return (
        <div >
            <a href=""><h3>{ins.name}</h3></a>  
            <p>{ins.Intro}</p>
            <div className={styles.msidediv}>
                <div className={styles.imgwrapp}><img alt="sad" src={ins["Image"]} style={{borderRadius:"50%"}}/></div>
                <div>
                    <div className={styles.bioline}>
                    <svg baseProfile="tiny" version="1.2" viewBox="0 0 24 24" {...atrobj} xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"><path d="m9.362 9.158s-3.16 0.35-5.268 0.584c-0.19 0.023-0.358 0.15-0.421 0.343s0 0.394 0.14 0.521c1.566 1.429 3.919 3.569 3.919 3.569-2e-3 0-0.646 3.113-1.074 5.19-0.036 0.188 0.032 0.387 0.196 0.506 0.163 0.119 0.373 0.121 0.538 0.028 1.844-1.048 4.606-2.624 4.606-2.624s2.763 1.576 4.604 2.625c0.168 0.092 0.378 0.09 0.541-0.029 0.164-0.119 0.232-0.318 0.195-0.505-0.428-2.078-1.071-5.191-1.071-5.191s2.353-2.14 3.919-3.566c0.14-0.131 0.202-0.332 0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375 0.122-0.453 0.294c-0.874 1.932-2.183 4.83-2.183 4.83z"/></svg>

                        <p>4.4 Instructor Rating</p>
                    </div>
                    <div className={styles.bioline}>
                        <svg viewBox="0 0 31.21 42.52" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2"><g data-name="Layer 1" id="Layer_1-2"><path className={styles.cls_1} d="M15.83,25.11l-2.92-1.67-3.36,0-1.7-2.9L4.92,18.9l0-3.36-1.7-2.9L4.87,9.7l0-3.36,2.9-1.7L9.42,1.72l3.37,0L15.69,0l2.92,1.67,3.36,0,1.7,2.9L26.6,6.22l0,3.36,1.7,2.9-1.67,2.92,0,3.36-2.9,1.7L22.1,23.4l-3.37,0Zm-2.4-3.67,2.38,1.36,2.37-1.39,2.75,0L22.29,19l2.37-1.39,0-2.75L26,12.5l-1.39-2.37,0-2.75L22.22,6,20.83,3.65l-2.75,0L15.7,2.31,13.33,3.7l-2.75,0L9.23,6.1,6.86,7.48l0,2.75L5.51,12.61,6.9,15l0,2.75L9.3,19.09l1.39,2.37Z"/><path className={styles.cls_1} d="M15.76,20.56a8,8,0,1,1,3.15-.65A8,8,0,0,1,15.76,20.56Zm0-14a6,6,0,1,0,5.57,8.23h0a6,6,0,0,0-5.57-8.23Z"/><path class="cls-1" d="M9.48,42.52,4.92,38.87,0,39.65,5.27,23.28l9.43,3Zm-4-5.76,3,2.39L12.19,27.6,6.57,25.79,2.9,37.17Z"/><path class={styles.cls_1} d="M21.72,42.52,16.5,26.31l9.43-3,5.28,16.38-4.92-.78ZM19,27.6l3.72,11.55,3-2.39,2.58.41L24.64,25.79Z"/><circle className={styles.cls_2} cx="15.76" cy="12.56" r="7"/></g></g></svg>
                        <p>74,184 Reviews</p>
                    </div>
                    <div className={styles.bioline}>
                    <svg enableBackground="new 0 0 24 24" id="Layer_1" version="1.0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" {...atrobj3}><g><g><path d="M16.5,14c-1.5,0-2.7,0.4-3.6,0.9c1.4,1.2,2,2.6,2.1,2.7l0.1,0.2V20h8v-2C23,18,21.4,14,16.5,14z"/></g><g><circle cx="16.5" cy="8.5" r="3.5"/></g></g><g><path d="M4,8.5C4,6.6,5.6,5,7.5,5S11,6.6,11,8.5c0,1.9-1.6,3.5-3.5,3.5S4,10.4,4,8.5z M7.5,14C2.6,14,1,18,1,18v2h13v-2   C14,18,12.4,14,7.5,14z"/></g></svg>
                    <p>896,702 Students</p>
                    </div>
                    <div className={styles.bioline}>
                    <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0z" fill="none"/><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z"/></svg> 
                     <p>16 Courses</p>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default Instructor;



