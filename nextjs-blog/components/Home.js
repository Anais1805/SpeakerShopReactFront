import Head from "next/head";
import styles from "../styles/Home.module.css";
import UilReact from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilShoppingBag } from "@iconscout/react-unicons";

import ImgCards from "./ImgCards";
import WhiteBanner from "./WhiteBanner";
import { imgData1 } from "../data/imgCardsData";
import { imgData2 } from "../data/imgCardsData";
import { bannerInfos } from "../data/bannerIconData";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Home() {
  const cards1 = imgData1.map((data, i) => {
    return (
      <ImgCards
        key={i}
        title={data.title}
        url={data.url}
        titleButton={data.titleButton}
      />
    );
  });
  const cards2 = imgData2.map((data, i) => {
    return (
      <ImgCards
        key={i}
        title={data.title}
        url={data.url}
        titleButton={data.titleButton}
      />
    );
  });

  const banner = bannerInfos.map((data, i) => {
    return <WhiteBanner key={i} icon={data.icon} title={data.title} />;
  });

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
        <div className={styles.rightScreenContainer}>
          <h1 className={styles.title}>Devialet Mania.</h1>
          <p className={styles.abstract}>
            La première enceinte stéréo portable haute-fidélité de Devialet,
            embarque notre obsession du son pur dans tous vos moments de vie.
          </p>
          <p className={styles.discoverButton}>Découvrir ›</p>
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
        <div className={styles.rightColumn}>{cards1}</div>
      </div>

      <div className={styles.whiteBanner}>{banner}</div>

      <div className={styles.fourthScreen}>
        <img
          className={styles.imgGiftCard}
          src="https://assets.devialet.com/fr-fr/media/dvl_media/egift_card_logo.jpg?twic=v1/background=E5DED6/cover=1100x1100"
        />
        <div
          className={styles.rightScreenContainer}
          style={{ marginLeft: "6vw", paddingRight: "6vw" }}
        >
          <h1 className={styles.giftTitle}>Offrez Devialet à vos proches</h1>
          <p className={styles.abstract}>
            En quelques clics, la E-carte cadeau vous permet d'offrir, seul ou à
            plusieurs, l'expérience Devialet à vos proches. La E-carte cadeau
            est valable uniquement sur devialet.com
          </p>
          <p className={styles.discoverButton}>Découvrir ›</p>
        </div>
      </div>

      <div className={styles.fifthScreen}>
        <div className={styles.ambitionSection}>
          <h1 className={styles.titleAmbition}>Notre ambition</h1>
          <h2 className={styles.textAmbition}>
            Redonner au son la place qu'il mérite en proposant des expériences
            d'écoute exceptionnelles
          </h2>
          <p className={styles.discoverButton} style={{ paddingTop: "7vh" }}>
            En savoir plus ›
          </p>
        </div>
        <div className={styles.video}>
          <ReactPlayer
            style={{ margin: 0, padding: 0 }}
            url="https://www.devialet.com/media/dvl_media/Video_Statues_Test_1.mp4"
            playing={true}
            loop={true}
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>

      <div className={styles.sixthScreen}>
          <div className={styles.allLivesText}>
            <h1 className={styles.allLivesTitles} style={{ fontWeight: "450" }}>
              Dans tous vos
            </h1>
            <h1 className={styles.allLivesTitles}>lieux de vies</h1>
            <p className={styles.abstract} style={{ lineHeight: "1.75" }}>
              L'application Devialet fournit un écosystème ouvert et polyvalent,
              qui convient à vos préférences. Profitez de vos services de
              streaming musicaus favoris via les protocoles intégérés: AirPlay
              2®, Roon Ready, Bluetooth®, UPnP, Spotify Connect{" "}
            </p>
          </div>
          <div className={styles.allLivesImages}>
                <img className={styles.allLivesImg1}src='https://assets.devialet.com/fr-fr/media/dvl_media/Push_App_HP_Phone.png?twic=v1/background=transparent/cover=600x1120'/> 
                <img className={styles.allLivesImg2} src='https://assets.devialet.com/fr-fr/media/dvl_media/201110_DEVIALET_PHANTOM_I_GOLD_2_2.jpg?twic=v1/background=f4f4f4/cover=1300x1300'/>
          </div>
      </div>

    </div>
  );
}
