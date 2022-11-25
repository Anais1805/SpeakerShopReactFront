import styles from '../styles/ImgCards.module.css'
import {useState} from 'react'


export default function ImgCards(props) {
const [hover, setHover]=useState(false)



let backgroundStyle = {}
if(hover && props.title){
    backgroundStyle= {'filter':'brightness(50%)', 'backgroundImage':`url(${props.url})`, 'cursor':'pointer' }
} else {
    backgroundStyle =  {'backgroundImage':`url(${props.url})`}
}


    return(<>
        <div className={styles.cards} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={backgroundStyle}>
            <h2 className={styles.titleCards}>{props.title}</h2>
            <p className={styles.buttonCards}>{props.titleButton}</p>
          </div>
          </>)
}