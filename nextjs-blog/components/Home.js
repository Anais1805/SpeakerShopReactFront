import Head from "next/head";
import styles from "../styles/Home.module.css";
import UilReact from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilShoppingBag } from "@iconscout/react-unicons";
import { UilBox } from '@iconscout/react-unicons'
import { UilCreditCardSearch } from '@iconscout/react-unicons'
import { UilShield } from '@iconscout/react-unicons'
import ImgCards from "./ImgCards";

export default function Home() {

const imgData1= [
    {title: 'Nos enceintes', url:'https://assets.devialet.com/fr-fr/media/dvl_media/HP_Categories_Speakers_light_grey_2000x2000.jpg?twic=v1/background=000/cover=1500x1500', titleButton: 'Découvrir ›'},
    {title: 'Notre barre de son', url: 'https://assets.devialet.com/fr-fr/media/dvl_media/HP_Categories_Twix_light_grey_2000x2000.jpg?twic=v1/background=000/cover=1500x1500', titleButton: 'Découvrir ›'},
    {url: 'https://assets.devialet.com/fr-fr/media/dvl_media/Fit_all_ears__2x.png?twic=v1/background=000/cover=1500x2000'}
]
const imgData2= [
    {url: 'https://assets.devialet.com/fr-fr/media/dvl_media/D_specs_2x.jpg?twic=v1/background=000/cover=1500x2000'},
    {title: 'Nos écouteurs', url:'https://assets.devialet.com/fr-fr/media/dvl_media/HP_Categories_Gemini_light_grey_2000x2000.jpg?twic=v1/background=000/cover=1500x1500', titleButton: 'Découvrir ›'},
    {title: 'Nos amplificateurs', url:'https://assets.devialet.com/fr-fr/media/dvl_media/HP_Categories_Amplifiers_light_grey__2000x2000.jpg?twic=v1/background=000/cover=1500x1500', titleButton: 'Découvrir ›'}
]

const cards1 = imgData1.map((data, i)=>{
    return (<ImgCards title={data.title} url={data.url} titleButton={data.titleButton}/>)
})
const cards2 = imgData2.map((data, i)=>{
    return (<ImgCards title={data.title} url={data.url} titleButton={data.titleButton}/>)
} )
  return (
    <div className={styles.body}>
      <div className={styles.firstScreen}>
        <div className={styles.header}>
          <img className={styles.logo} src="logoD.png" alt="logo" />
          <div className={styles.navBar}>
            <p>Enceintes</p>
            <p>Enceintes portables</p>
            <p>Barre de son</p>
            <p>Ecouteurs</p>
            <p>Amplificateurs</p>
            <p>Cadeaux</p>
          </div>
          <div className={styles.icons}>
            <UilUser size={20} color="white" />
            <UilLocationPoint size={20} color="white" />
            <UilShoppingBag size={20} color="white" />
          </div>
        </div>
        <div className={styles.titleContainer}>
          <h1 style={{ fontWeight: "450", margin: "0" }}>
            Phantom reconditionné
          </h1>
          <h1 className={styles.title} style={{ margin: "0" }}>
            Cercle vertueux.
          </h1>
          <p className={styles.titleButton}>Découvrir</p>
        </div>
      </div>

      <div className={styles.secondScreen}>
        <img
          className={styles.images}
          src="https://assets.devialet.com/fr-fr/media/dvl_media/KV_Diablo_Lifestyle_2000x2000.jpg?twic=v1/background=f4f4f4/cover=1300x1300"
        />
        <div className={styles.rightSecondScreenContainer}>
          <h1 className={styles.title}>Devialet Mania.</h1>
          <p className={styles.abstract}>
            La première enceinte stéréo portable haute-fidélité de Devialet,
            embarque notre obsession du son pur dans tous vos moments de vie.
          </p>
          <p className={styles.secondScreenButton}>Découvrir ›</p>
        </div>
      </div>

      <div className={styles.thirdScreen}>
        <div className={styles.leftColumn}>  
           <div className={styles.titles3Container}>
            <h1 className={styles.titles3} style={{ fontWeight: "450" }}>
              Vivez l'expérience
            </h1>
            <h1 className={styles.titles3}>audio ultime.</h1>
          </div>
          {cards2}
        </div>
        <div className={styles.rightColumn}>
          {cards1}
        </div> 
      </div>


      <div className={styles.whiteBanner}>
        <div className={styles.item}>
        <UilBox size={30} className={styles.bannerIcons}></UilBox>
        <p className={styles.bannerTitles}>Livraison ups gratuite</p>
        <p className={styles.infos}>En savoir plus</p>
        </div>
        <div className={styles.item}>
        <p className={styles.bannerIcons} style={{'padding': '10px', 'margin': '0'}}>14</p>
        <p className={styles.bannerTitles}>Politique de retour 14 jours</p>
        <p className={styles.infos}>En savoir plus</p>
        </div>
        <div className={styles.item}>
        <UilCreditCardSearch size={30} className={styles.bannerIcons}></UilCreditCardSearch>
        <p className={styles.bannerTitles}>Paiement sécurisé</p>
        <p className={styles.infos}>En savoir plus</p>
        </div>
        <div className={styles.item}>
        <UilShield size={30} className={styles.bannerIcons}></UilShield>
        <p className={styles.bannerTitles}>Garantie 2 ans</p>
        <p className={styles.infos}>En savoir plus</p>
        </div>
      </div>
    </div>
  );
}
