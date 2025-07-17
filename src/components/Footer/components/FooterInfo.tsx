import styles from '../Footer.module.css'

const FooterInfo = () => {
    return (
        <div className={styles.funcionamento}>
            <h4 className={styles.titulo}>Funcionamento</h4>
            <span>Segunda a Sexta - 14h às 00h</span>
            <span>contato@luzecena.com.br</span>
            <span>0800 123 456</span>
        </div>
    )
}

export default FooterInfo;