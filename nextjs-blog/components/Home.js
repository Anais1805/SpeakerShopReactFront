import Head from "next/head";
import styles from "../styles/Home.module.css";

import UilReact from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilShoppingBag } from "@iconscout/react-unicons";
import { UilComment } from "@iconscout/react-unicons";
import { UilPhone } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilFacebook } from "@iconscout/react-unicons";
import { UilTwitterAlt } from "@iconscout/react-unicons";

import ImgCards from "./ImgCards";
import WhiteBanner from "./WhiteBanner";
import StoreCards from "./StoreCards";
import SecondWhiteBanner from "./SecondWhiteBanner";
import Modal from "./Modal";
import About from "./About";
import { imgData1 } from "../data/imgCardsData";
import { imgData2 } from "../data/imgCardsData";
import { bannerInfos } from "../data/bannerIconData";
import { storeCardsData } from "../data/storeCardsData";
import { bannerInfos2 } from "../data/bannerIconData";
import { aboutData } from "../data/about";

import React, { useState } from "react";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Home() {
  const [showModal, setShowModal] = useState(false);

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

  const stores = storeCardsData.map((data, i) => {
    return <StoreCards key={i} title={data.title} url={data.url} />;
  });
  const banner2 = bannerInfos2.map((data, i) => {
    return <SecondWhiteBanner key={i} icon={data.icon} title={data.title} />;
  });

  const about = aboutData.map((data, i) => {
    return (
      <About
        title={data.title}
        item1={data.item1}
        item2={data.item2}
        item3={data.item3}
        item4={data.item4}
        item5={data.item5}
      />
    );
  });

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <img className={styles.logo} src="logoD.png" alt="logo" />
        <div className={styles.navBar}>
          <p className={styles.navItem}>Enceintes</p>
          <p className={styles.navItem}>Enceintes portables</p>
          <p className={styles.navItem}>Barre de son</p>
          <p className={styles.navItem}>Ecouteurs</p>
          <p className={styles.navItem}>Amplificateurs</p>
          <p className={styles.navItem}>Cadeaux</p>
        </div>
        <div className={styles.icons}>
          <UilUser size={20} color="white" />
          <UilLocationPoint size={20} color="white" />
          <UilShoppingBag size={20} color="white" />
        </div>
      </div>
      <div className={styles.firstScreen}>
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
            streaming musicaus favoris via les protocoles intégérés: AirPlay 2®,
            Roon Ready, Bluetooth®, UPnP, Spotify Connect{" "}
          </p>
        </div>
        <div className={styles.allLivesImages}>
          <img
            className={styles.allLivesImg1}
            src="https://assets.devialet.com/fr-fr/media/dvl_media/Push_App_HP_Phone.png?twic=v1/background=transparent/cover=600x1120"
          />
          <img
            className={styles.allLivesImg2}
            src="https://assets.devialet.com/fr-fr/media/dvl_media/201110_DEVIALET_PHANTOM_I_GOLD_2_2.jpg?twic=v1/background=f4f4f4/cover=1300x1300"
          />
        </div>
      </div>

      <div className={styles.seventhScreen}>
        <div className={styles.accessoriesContent}>
          <div className={styles.leftPart}>
            <p className={styles.accessoryText}>Trouvez</p>
            <h1 className={styles.accessoryText} style={{ fontWeight: "900" }}>
              l'accessoire
            </h1>
            <p className={styles.accessoryText}>parfait.</p>
            <p className={styles.accessoryButton}>Tous les accessoires</p>
          </div>
          <div className={styles.rightPart}>
            <img
              className={styles.accessoryImg}
              src="https://assets.devialet.com/fr-fr/media/dvl_media/HP_accessories_remote_tree-hd.png?twic=v1/background=transparent/cover=1300x1442"
            />
          </div>
        </div>
      </div>

      <div className={styles.eighthScreen}>
        <div className={styles.meetingsContent}>
          <p className={styles.meetingsSubtitle}>
            Les rencontres d'Arles | Devialet
          </p>
          <h3 className={styles.meetingsTitles}>Clichés sonorisés.</h3>
          <p className={styles.meetingsText}>
            Cette année, Devialet met son expertise acoustique au service de
            l'exposition Cartographies du corps. Découvrez une exposition
            produite par les Rencontres d'Arles
          </p>
          <p className={styles.discoverButton} style={{ fontWeight: "600" }}>
            Lire l'article ›
          </p>
        </div>
      </div>

      <div className={styles.ninthScreen}>
        <div className={styles.storiesContent}>
          <h6 className={styles.storiesTitles}>Nos belles histoires</h6>
          <div className={styles.imgStoriesContent}>
            <p
              className={styles.imgStories}
              style={{
                backgroundImage: `url('https://assets.devialet.com/fr-fr/media/dvl_media/Push_Media_Ariane.jpg?twic=v1/background=FFFFFF/contain=500x605')`,
              }}
            >
              <span div className={styles.imgStoriesText}>
                Arianegroup | Devialet{" "}
              </span>
              <span className={styles.imgStoriesSubtitles}>
                Préparez-vous au décollage
              </span>
            </p>
            <p
              className={styles.imgStories}
              style={{
                backgroundImage: `url("https://assets.devialet.com/fr-fr/media/dvl_media/Push_Huawei_Vision_V.jpg?twic=v1/background=FFFFFF/contain=500x605")`,
              }}
            >
              <span div className={styles.imgStoriesText}>
                Huawei | Devialet{" "}
              </span>
              <span className={styles.imgStoriesSubtitles}>
                Huawei vision v series : partage d'innovation et d'excellence
              </span>
            </p>
          </div>
          <p className={styles.storiesButton}>Tout voir</p>
        </div>
      </div>

      <div className={styles.expBanner}>
        <div className={styles.expContent}>
          <div className={styles.expText}>
            <p
              className={styles.allLivesTitles}
              style={{ fontWeight: "500", fontSize: "45px" }}
            >
              Vivez l'expérience Devialet
            </p>
            <p className={styles.allLivesTitles} style={{ fontSize: "45px" }}>
              dans le monde entier.
            </p>
          </div>
          <div className={styles.expButtonContent}>
            <p className={styles.expButton}>Trouver une boutique</p>
          </div>
        </div>
      </div>

      <div className={styles.tenthScreen}>{stores}</div>

      <div className={styles.eleventhScreen}>
        <div className={styles.proPlace}>
          <p className={styles.proText}>Devialet pour les professionnels ?</p>
          <p className={styles.proTextButton}>C'est ici.</p>
        </div>
      </div>

      <div className={styles.secondWhiteBanner}>
        <div className={styles.secondWhiteBannerContent}>{banner2}</div>
      </div>
      <div className={styles.twelfthScreen}>
        <div className={styles.joinUsBackground}>
          {/* <ReactPlayer
            style={{ margin: 0, padding: 0}}
            url="https://www.devialet.com/media/dvl_media/usine_NL.mp4"
            playing='true'
            loop='true'
            width="100%"
            height="100%"
          
          /> */}
          {showModal && <Modal closeModal={() => setShowModal(false)} />}
          <div className={styles.joinUsContent}>
            <div className={styles.joinUsSecondContainer}>
              <div className={styles.joinUsTextContent}>
                <p className={styles.joinUsTitle}>Rejoignez la révolution</p>
                <p className={styles.joinUsText}>
                  Actualités, mises à jours, exclusivités : soyez au premier
                  rang.
                </p>
              </div>
              <div className={styles.joinUsButtons}>
                <input
                  className={styles.joinUsInput}
                  placeholder="Email"
                  type="email"
                />
                <p className={styles.joinUsSignup}> S'inscrire</p>
              </div>
            </div>
            <p className={styles.joinUsSubtext}>
              Devialet n'utilisera les informations fournies que dans le cadre
              défini par notre{" "}
              <span style={{ textDecoration: "underline", cursor: 'pointer' }}>
                politique de confidentialité
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.lastScreen}>
        <div className={styles.contact}>
          <div className={styles.contactPerson}>
            <p className={styles.contactText1}>Contacter nos conseillers</p>
            <p className={styles.schedules}>Lun au sam, 10.00-20.00(CET)</p>
          </div>
          <div className={styles.contactPhones}>
            <UilComment size={20} style={{ marginRight: "0.5vw" }} />
            <p className={styles.chat}>Chattez avec nous</p>
            <UilPhone size={20} style={{ marginRight: "0.5vw" }} />
            <p className={styles.chat}>+33 9 75 18 67 60</p>
          </div>
        </div>
        <div className={styles.infos}>{about}</div>
        <div className={styles.footer}>
          <div className={styles.country}>
            <p>FR</p>
            <p style={{ fontSize: "25px", marginLeft: "1vw" }}>🇫🇷</p>
            <p
              style={{
                fontSize: "25px",
                marginLeft: "1vw",
                marginBottom: "1.5vh",
                cursor: 'pointer'
              }}
              onClick={() => setShowModal(true)}
            >
              ⌵
            </p>
          </div>
          <div className={styles.settings}>
            <p>Maquette Portfolio by Anais1805</p>
            <p>Juridique</p>
            <p>Augmenter les contrastes</p>
            <p>Préférences de cookies</p>
          </div>
          <div className={styles.iconsSocialN}>
            <UilInstagram size={20} style={{ marginRight: "1.5vw" }} />
            <UilFacebook size={20} style={{ marginRight: "1.5vw" }} />
            <UilTwitterAlt size={20} style={{ marginRight: "1.5vw" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
