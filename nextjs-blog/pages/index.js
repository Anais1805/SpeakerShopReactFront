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
        <img className={styles.logo} src='logoD.png'/>
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
        <h1 style={{'font-weight':'450', 'margin':'0'}}>Phantom reconditionné</h1>
        <h1 style={{'font-weight': '900', 'margin': '0'}}>Cercle vertueux.</h1>
        <p className={styles.titleButton}>Découvrir</p>

      </div>
     </div>
    </div>
  )
}