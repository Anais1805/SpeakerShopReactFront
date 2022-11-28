import styles from '../styles/About.module.css'

export default function About(props){
    return( <div className={styles.about}>
        <p className={styles.infosTitles}>{props.title}</p>
        <p>{props.item1}</p>
        <p>{props.item2}</p>
        <p>{props.item3}</p>
        <p>{props.item4}</p>
        <p>{props.item5}</p>
      </div>)
}