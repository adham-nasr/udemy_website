import Card from './Card';
import styles from './section.module.css'
import {useEffect, useState} from 'react'
const Sectioncard = (props) => {
    const [cstate , setCstate] = useState(<Card spin="true"/>);

    /*
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
    */
    
    useEffect(()=> {
      let courses=[];
      fetch('http://localhost:8000/course')
        .then(res => {
          return res.json();
        })
        .then(data => {
          if(data!==null)
          {
            courses = data;
            /*
            let temp = [];
            for(let i=0;i<data.length;i++)
              temp.push("my_hide");
            setHstate(temp);
            */
            let L = [];
            for(let i=0;i<data.length;i++)
              L.push(<Card {...data[i]} key={data[i]["id"]} spin="false"/>);
            
            setCstate(L);
          }
        })

        let search = document.getElementById("search");
        let button = document.getElementById("butt");

        button.addEventListener("click" , ()=>{
            console.log("ASD " , courses);
            let val = search.value.toLowerCase();
            let L=[];
            for(let i=1;i<=courses.length;i++)
            {
                let str = i.toString()
                //let div = document.getElementById(str);
                //let h4 = div.getElementsByTagName("h3")[0].textContent.toLowerCase();
                //console.log("hI " , h4);
                if(courses[i-1]["title"].search(val)!==-1 && val!=='')
                {
                  L.push(<Card {...courses[i-1]} key={courses[i-1]["id"]} spin="false"/>);
                }   
                else
                {
                  let a=1;
                }
            }
            console.log("final" , L)
            setCstate(L);
        });
      
    } ,[]);
    return (
      <div className={styles.div2}>
        <div>
            <h2>Expand your career opportunities with Python</h2>
            <p>Take one of Udemys range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...</p>
        </div>
        <div id="cont" className={styles.flexbox_container}>
            {cstate}
        </div>
      </div>
    )
}

export default Sectioncard;