import styles from '../styles/ImgCards.module.css'

export default function ImgCards(props) {
    return(<>
        <div className={styles.cards} style={{'backgroundImage':`url(${props.url})`}}>
            <h2 className={styles.titleCards}>{props.title}</h2>
            <p className={styles.buttonCards}>{props.titleButton}</p>
          </div>
          </>)
}