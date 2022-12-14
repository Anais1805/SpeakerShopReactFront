import styles from "../styles/Modal.module.css";

export default function Modal(props) {
  return (
    <div className={styles.modalBackground}>
        <div className={styles.deleteButtonContainer}>
      <p className={styles.deleteButton} onClick={() => props.closeModal()}>
        X
      </p>
      </div>
      <div className={styles.modalContainer}>
        <div className={styles.modalTitle}>
          Sรฉlectionnez un pays ou une rรฉgion
        </div>
        <div className={styles.continent}>
          <p>Americas</p>
        
        <div className={styles.countries}>
          <div className={styles.countryRows}>
            <p className={styles.country}> ๐จ๐ฆ Canada</p>
            <p className={styles.country}> ๐จ๐ฆ Canada (FR)</p>
            <p className={styles.country}> ๐บ๐ธ United states of America</p>
          </div>
        </div>
        </div>
        <div className={styles.continent}>
          <p>Europe</p>

          <div className={styles.countries}>
            <div className={styles.countryRows}>
              <p className={styles.country}> ๐ฆ๐ฉ Andorra</p>
              <p className={styles.country}> ๐ง๐ช Belgique</p>
              <p className={styles.country}> ๐ง๐ฌ Bulgaria</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> ๐ญ๐ท Croatia</p>
              <p className={styles.country}> ๐จ๐พ Cyprus</p>
              <p className={styles.country}> ๐จ๐ฟ Czech Republic</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> ๐ฉ๐ฐ Denmark</p>
              <p className={styles.country}> ๐ฉ๐ช Deutschland</p>
              <p className={styles.country}> ๐ช๐ช Estonia</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> ๐ซ๐ฎ Finland</p>
              <p className={styles.country}> ๐ซ๐ท France</p>
              <p className={styles.country}> ๐ฌ๐ท Greece</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> ๐ฌ๐ฑ Greenland</p>
              <p className={styles.country}>
                {" "}
                ๐ป๐ฆ Holy See (Vatican city state)
              </p>
              <p className={styles.country}> ๐ญ๐บ Hungary</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> ๐ฎ๐ช Ireland</p>
              <p className={styles.country}> ๐ฎ๐น Italy</p>
              <p className={styles.country}> ๐ฑ๐ป Latvia</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> ๐ฑ๐ฎ Lichtenstein</p>
              <p className={styles.country}> ๐ฑ๐น Lithuania</p>
              <p className={styles.country}> ๐ฑ๐บ Luxembourg</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> ๐ฒ๐น Malta</p>
              <p className={styles.country}> ๐ณ๐ฑ Netherlands</p>
              <p className={styles.country}> ๐ณ๐ด Norway</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> ๐ต๐ฑ Poland</p>
              <p className={styles.country}> ๐ต๐น Portugal</p>
              <p className={styles.country}> ๐ท๐ด Romania</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> ๐ท๐ธ Serbia</p>
              <p className={styles.country}> ๐ธ๐ฐ Slovakia</p>
              <p className={styles.country}> ๐ธ๐ฎ Slovenia</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> ๐ช๐ธ Spain</p>
              <p className={styles.country}> ๐ธ๐ช Sweden</p>
              <p className={styles.country}> ๐จ๐ญ Switzerland</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> ๐จ๐ญ Suisse (FR)</p>
              <p className={styles.country}> ๐ฌ๐ง United Kingdom</p>
              <p className={styles.country}> ๐ฆ๐น รsterreich</p>
            </div>
          </div>
        </div>
        <div className={styles.continent}>
          <p>Asia-Oceania</p>
        
        <div className={styles.countries}>
          <div className={styles.countryRows}>
            <p className={styles.country}> ๐ฆ๐บ Australia</p>
            <p className={styles.country}> ๐ญ๐ฐ Hong Kong Sar</p>
            <p className={styles.country}> ๐ญ๐ฐ Hong Kong</p>
          </div>
          <div className={styles.countryRows}>
            <p className={styles.country}> ๐ณ๐ฟ New Zealand</p>
            <p className={styles.country}> ๐ธ๐ฌ Singapore</p>
            <p className={styles.country}> ๐ธ๐ฌ Singapore</p>
          </div>
          <div className={styles.countryRows}>
            <p className={styles.country}> ๐ฐ๐ท South Korea</p>
            <p className={styles.country}> ๐น๐ผ Taiwan, Province of China</p>
            <p className={styles.country}> ๐น๐ผ Taiwan, Province of China</p>
          </div>
          <div className={styles.countryRows}>
            <p className={styles.country}> ๐จ๐ณ Chine</p>
            <p className={styles.country}> ๐ฏ๐ต Japon</p>
          </div>
        </div>
        </div>
        <div className={styles.continent}>
          <p>Middle East</p>
        
        <div className={styles.countries}>
          <div className={styles.countryRows}>
            <p className={styles.country}> ๐ง๐ญ Bahrain</p>
            <p className={styles.country}> ๐ด๐ฒ Oman</p>
            <p className={styles.country}> ๐ถ๐ฆ Qatar</p>
          </div>
          <div className={styles.countryRows}>
            <p className={styles.country}> ๐ฆ๐ช United Arab Emirates</p>
       
          </div>
        </div>
        </div>
        <div className={styles.continent}>
          <p>Other</p>
        
        <div className={styles.countries}>
          <div className={styles.countryRows}>
            <p className={styles.country}> ๐ Soon</p>
            
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
