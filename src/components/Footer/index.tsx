import Banner from "../Banner";
import FooterDevelopedBy from "./components/FooterDevelopedBy";
import FooterInfo from "./components/FooterInfo";
import FooterInstitucional from "./components/FooterInstitucional";
import FooterLogo from "./components/FooterLogo";
import FooterSocials from "./components/FooterSocials";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <footer className={styles.rodape}>
                <div className={styles.rodape_informacoes}>
                    <FooterLogo />
                    <FooterInfo />
                    <FooterInstitucional />
                    <FooterSocials />
                </div>
            </footer>
            <Banner src={"./Imagens/Tarjeta - Desktop.png"} alt={"Tarjeta"}/>
            <FooterDevelopedBy />
        </>
    )
}

export default Footer;