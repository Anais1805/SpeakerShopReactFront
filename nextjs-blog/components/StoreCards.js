import styles from '../styles/StoreCards.module.css'

export default function StoreCards (props){
    return(
    
        <div className={styles.storeCards} style={{'backgroundImage': `url(${props.url})`}}>
        <p className={styles.textStoreCards}>{props.title}</p>
      </div>
    )
}