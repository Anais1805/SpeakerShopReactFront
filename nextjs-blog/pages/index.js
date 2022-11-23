import Head from 'next/head'
import styles from '../styles/Home.module.css';
import UilReact from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilShoppingBag } from '@iconscout/react-unicons'

export default function Home() {
  return (
    <div className={styles.body}>
     <div className={styles.firstScreen}>
      <div className={styles.header}>
        <img className={styles.logo} src='logoD.png' alt='logo'/>
        <div className={styles.navBar}>
        <p>Enceintes</p>
        <p>Enceintes portables</p>
        <p>Barre de son</p>
        <p>Ecouteurs</p>
        <p>Amplificateurs</p>
        <p>Cadeaux</p>
        </div>
        <div className={styles.icons} >
        <UilUser size={20} color='white'/>
        <UilLocationPoint size={20} color='white'/>
        <UilShoppingBag size={20} color='white'/>
        </div>
      </div>
      <div className={styles.titleContainer}>
        <h1 style={{'fontWeight':'450', 'margin':'0'}}>Phantom reconditionné</h1>
        <h1 className={styles.title} style={{'margin': '0'}}>Cercle vertueux.</h1>
        <p className={styles.titleButton}>Découvrir</p>
      </div>
     </div>

     <div className={styles.secondScreen}>
      <img className={styles.images} src='https://assets.devialet.com/fr-fr/media/dvl_media/KV_Diablo_Lifestyle_2000x2000.jpg?twic=v1/background=f4f4f4/cover=1300x1300'/>
      <div className={styles.rightSecondScreenContainer}>
        <h1 className={styles.title}>Devialet Mania.</h1>
        <p className={styles.abstract}>La première enceinte stéréo portable haute-fidélité de Devialet, embarque notre obsession du son pur dans tous vos moments de vie.</p>
        <p className={styles.secondScreenButton}>Découvrir   ›</p>
      </div>
     </div>
     <div className={styles.thirdScreen}>
     <div className={styles.leftColumn}>
      <div className={styles.titles3Container}>
      <h1 className={styles.titles3} style={{'fontWeight': '450'}}>Vivez l'expérience</h1>
      <h1 className={styles.titles3}>audio ultime.</h1>
      </div>
      <div className={styles.media}></div>
      <div className={styles.gemini}>
      <h2 className={styles.titleCards}>Nos écouteurs</h2>
      <p className={styles.buttonCards}>Découvrir   ›</p>
      </div>
      <div className={styles.amplifiers}>
      <h2 className={styles.titleCards}>Nos amplificateurs</h2>
      <p className={styles.buttonCards}>Découvrir   ›</p>
      </div>
      </div>

     
      <div className={styles.rightColumn}>
      <div className={styles.speakers}>
        <h2 className={styles.titleCards}>Nos enceintes</h2>
        <p className={styles.buttonCards}>Découvrir   ›</p>
      </div>
      <div className={styles.twix}>
      <h2 className={styles.titleCards}>Notre barre de son</h2>
      <p className={styles.buttonCards}>Découvrir   ›</p>
      </div>
      <div className={styles.gemini2}></div>
      </div>

     
     </div>
    </div>
  )
}