import styles from '../styles/SecondWhiteBanner.module.css'

export default function SecondWhiteBanner (props){
    return (
        <div className={styles.item2}>
        {props.icon}
        <p className={styles.bannerTitles2}>{props.title}</p>
        <p className={styles.infos2}>En savoir plus</p>
      </div>
    )
}