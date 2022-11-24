import styles from '../styles/WhiteBanner.module.css'

export default function WhiteBanner(props){
    return(<div>
        <div className={styles.item}>
        {props.icon}
        <p className={styles.bannerTitles}>{props.title}</p>
        <p className={styles.infos}>En savoir plus</p>
        </div>
    </div>)
}