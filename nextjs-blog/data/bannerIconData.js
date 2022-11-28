import { UilBox } from "@iconscout/react-unicons";
import { UilCreditCardSearch } from "@iconscout/react-unicons";
import { UilShield } from "@iconscout/react-unicons";
import styles from '../styles/Home.module.css'

export const bannerInfos = [
    {
      icon: <UilBox size={30} className={styles.bannerIcons}></UilBox>,
      title: "Livraison ups gratuite",
    },
    {
      icon: (
        <p
          className={styles.bannerIcons}
          style={{ padding: "10px", margin: "0" }}
        >
          14
        </p>
      ),
      title: "Politique de retours 14 jours",
    },
    {
      icon: (
        <UilCreditCardSearch
          size={30}
          className={styles.bannerIcons}
        ></UilCreditCardSearch>
      ),
      title: "Paiement sécurisé",
    },
    {
      icon: <UilShield size={30} className={styles.bannerIcons}></UilShield>,
      title: "Garantie 2 ans",
    },
  ];
 
  export const bannerInfos2 = [
    {
      icon: <UilBox size={30} className={styles.bannerIcons}></UilBox>,
      title: "Livraison ups gratuite",
    },
    {
      icon: (
        <UilCreditCardSearch
          size={30}
          className={styles.bannerIcons}
        ></UilCreditCardSearch>
      ),
      title: "Paiement sécurisé",
    },
    {
      icon: (
        <p
          className={styles.bannerIcons}
          style={{ padding: "10px", margin: "0" }}
        >
          14
        </p>
      ),
      title: "Politique de retours 14 jours",
    },
    {
      icon: <UilShield size={30} className={styles.bannerIcons}></UilShield>,
      title: "Garantie 2 ans",
    },
  ];