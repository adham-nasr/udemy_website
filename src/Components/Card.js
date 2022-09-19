import { useEffect } from 'react'
import styles from './card.module.css';
import {Link} from 'react-router-dom';
const Card = (props) => {
    console.log(props)


    let l=<div className={styles.div5}><p>Bestseller</p></div>
    if(props.bestSeller === false)
        l="";
    console.log(props.spin)
    return (
        props.spin==="true" ? (
            <div id="my_loading"></div>
            ) : (
                <div id={props.id} className={styles.my_flexbox_item}>
                <Link to="/page"><img src={props.image} className={styles.my_img_style}/></Link>
                <Link to="/page"><h3>{props.title}</h3></Link>
                <p>{props.instructor}</p>
                <div className={styles.div4}>
                    <p>{props.stars} </p>
                    <span className={styles.svg}>
                        <svg preserveAspectRatio="none" viewBox="0 -150 300 300">
                            <polygon points="100,10 40,180 190,60 10,60 160,180"/>
                        </svg>
                    </span>
                    <span className={styles.svg}>
                        <svg preserveAspectRatio="none" viewBox="0 -150 300 300">
                            <polygon points="100,10 40,180 190,60 10,60 160,180"/>
                        </svg>
                    </span>
                    <span className={styles.svg}>
                        <svg preserveAspectRatio="none" viewBox="0 -150 300 300">
                            <polygon points="100,10 40,180 190,60 10,60 160,180"/>
                        </svg>
                    </span>
                    <span className={styles.svg}>
                        <svg preserveAspectRatio="none" viewBox="0 -150 300 300">
                            <polygon points="100,10 40,180 190,60 10,60 160,180"/>
                        </svg>
                    </span>
                    <p>({props.students})</p>
                </div>
                <p>${props.price}</p>
                {l}
              </div>)
        
     
    )
}

export default Card;