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
          Sélectionnez un pays ou une région
        </div>
        <div className={styles.continent}>
          <p>Americas</p>
        
        <div className={styles.countries}>
          <div className={styles.countryRows}>
            <p className={styles.country}> 🇨🇦 Canada</p>
            <p className={styles.country}> 🇨🇦 Canada (FR)</p>
            <p className={styles.country}> 🇺🇸 United states of America</p>
          </div>
        </div>
        </div>
        <div className={styles.continent}>
          <p>Europe</p>

          <div className={styles.countries}>
            <div className={styles.countryRows}>
              <p className={styles.country}> 🇦🇩 Andorra</p>
              <p className={styles.country}> 🇧🇪 Belgique</p>
              <p className={styles.country}> 🇧🇬 Bulgaria</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> 🇭🇷 Croatia</p>
              <p className={styles.country}> 🇨🇾 Cyprus</p>
              <p className={styles.country}> 🇨🇿 Czech Republic</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> 🇩🇰 Denmark</p>
              <p className={styles.country}> 🇩🇪 Deutschland</p>
              <p className={styles.country}> 🇪🇪 Estonia</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> 🇫🇮 Finland</p>
              <p className={styles.country}> 🇫🇷 France</p>
              <p className={styles.country}> 🇬🇷 Greece</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> 🇬🇱 Greenland</p>
              <p className={styles.country}>
                {" "}
                🇻🇦 Holy See (Vatican city state)
              </p>
              <p className={styles.country}> 🇭🇺 Hungary</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> 🇮🇪 Ireland</p>
              <p className={styles.country}> 🇮🇹 Italy</p>
              <p className={styles.country}> 🇱🇻 Latvia</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> 🇱🇮 Lichtenstein</p>
              <p className={styles.country}> 🇱🇹 Lithuania</p>
              <p className={styles.country}> 🇱🇺 Luxembourg</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> 🇲🇹 Malta</p>
              <p className={styles.country}> 🇳🇱 Netherlands</p>
              <p className={styles.country}> 🇳🇴 Norway</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> 🇵🇱 Poland</p>
              <p className={styles.country}> 🇵🇹 Portugal</p>
              <p className={styles.country}> 🇷🇴 Romania</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> 🇷🇸 Serbia</p>
              <p className={styles.country}> 🇸🇰 Slovakia</p>
              <p className={styles.country}> 🇸🇮 Slovenia</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> 🇪🇸 Spain</p>
              <p className={styles.country}> 🇸🇪 Sweden</p>
              <p className={styles.country}> 🇨🇭 Switzerland</p>
            </div>
            <div className={styles.countryRows}>
              <p className={styles.country}> 🇨🇭 Suisse (FR)</p>
              <p className={styles.country}> 🇬🇧 United Kingdom</p>
              <p className={styles.country}> 🇦🇹 Österreich</p>
            </div>
          </div>
        </div>
        <div className={styles.continent}>
          <p>Asia-Oceania</p>
        
        <div className={styles.countries}>
          <div className={styles.countryRows}>
            <p className={styles.country}> 🇦🇺 Australia</p>
            <p className={styles.country}> 🇭🇰 Hong Kong Sar</p>
            <p className={styles.country}> 🇭🇰 Hong Kong</p>
          </div>
          <div className={styles.countryRows}>
            <p className={styles.country}> 🇳🇿 New Zealand</p>
            <p className={styles.country}> 🇸🇬 Singapore</p>
            <p className={styles.country}> 🇸🇬 Singapore</p>
          </div>
          <div className={styles.countryRows}>
            <p className={styles.country}> 🇰🇷 South Korea</p>
            <p className={styles.country}> 🇹🇼 Taiwan, Province of China</p>
            <p className={styles.country}> 🇹🇼 Taiwan, Province of China</p>
          </div>
          <div className={styles.countryRows}>
            <p className={styles.country}> 🇨🇳 Chine</p>
            <p className={styles.country}> 🇯🇵 Japon</p>
          </div>
        </div>
        </div>
        <div className={styles.continent}>
          <p>Middle East</p>
        
        <div className={styles.countries}>
          <div className={styles.countryRows}>
            <p className={styles.country}> 🇧🇭 Bahrain</p>
            <p className={styles.country}> 🇴🇲 Oman</p>
            <p className={styles.country}> 🇶🇦 Qatar</p>
          </div>
          <div className={styles.countryRows}>
            <p className={styles.country}> 🇦🇪 United Arab Emirates</p>
       
          </div>
        </div>
        </div>
        <div className={styles.continent}>
          <p>Other</p>
        
        <div className={styles.countries}>
          <div className={styles.countryRows}>
            <p className={styles.country}> 🌍 Soon</p>
            
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
