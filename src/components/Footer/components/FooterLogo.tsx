import Logo from "../../Logo";
import styles from '../Footer.module.css'

const FooterLogo = () => {
    return( 
    <div className={styles.logo}>
        <Logo src="./Logo.svg" alt="Logo do Luz e Cena"/>
        <p>Onde a realidade encontra a fantasia!</p>
    </div>
    );
}

export default FooterLogo;