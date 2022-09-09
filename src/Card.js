import styles from './card.module.css'
const Card = (props) => {

    let l=<div className={styles.div5}><p>Bestseller</p></div>
    if(props.bestSeller === false)
        l="";
    return (
      <div id={props.id} className={styles.my_flexbox_item}>
        <img src={props.image} className={styles.my_img_style}/>
        <h3>{props.title}</h3>
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
      </div>
    )
}

export default Card;