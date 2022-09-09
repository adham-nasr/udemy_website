import Card from './Card';
import styles from './section.module.css'
const Sectioncard = (props) => {
    const data = [{
        id:'aseafe1',
        image:'https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg',
        title: 'learn python from zero to hero',
        instructor: 'jose portila',
        stars:4,
        students:1432,
        price: 39,
        bestSeller:true,
    },
    {
        id:'aseafe2',
        image:'https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg',
        title: 'learn python from zero to hero',
        instructor: 'jose portila',
        stars:4,
        students:1432,
        price: 39,
        bestSeller:true,
    },
    {
        id:'aseafe3',
        image:'https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg',
        title: 'learn python from zero to hero',
        instructor: 'jose portila',
        stars:4,
        students:1432,
        price: 39,
        bestSeller:true,
    }];
    let L = []
    for(let i=0;i<data.length;i++)
      L.push(<Card {...data[i]} key={data[i]["id"]}/>);
    return (
      <div className={styles.div2}>
        <div>
            <h2>Expand your career opportunities with Python</h2>
            <p>Take one of Udemys range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...</p>
        </div>
        <div id="cont" className={styles.flexbox_container}>
            {L}
        </div>
      </div>
    )
}

export default Sectioncard;