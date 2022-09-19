
import { useRef, useState } from 'react';
import styles from './text.module.css';





const Text = (props) => {

    const [butt,setButt] = useState("Show more");
    const ref = useRef();

    function Change(){
        (ref.current).classList.toggle(styles.fade);
        if(butt==="Show more")
            setButt("Show less");
        else
            setButt("Show more");
    }
    return (
        <div>
            <div ref={ref} className={styles.fade}>
                {props.children}
            </div>
            <button onClick={Change} className={styles.btt}>{butt}</button>
        </div>
    )
}

export default Text;