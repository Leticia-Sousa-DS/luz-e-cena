import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MovieSection from "./components/MovieSection"
import Newsletter from "./components/Newsletter"

function App() {
  return (
  <>
    <Header />
    <Banner src={"./Imagens/Banner Desktop.png"} alt={"Banner do Luz e Cena para Desktop, com imagem de pessoas no cinema e formas abstratas"} />
    <MovieSection />
    <Banner src={"./Imagens/Banner_Combo.png"} alt={"Banner do Combo de Pipoca Estelar"} />
    <Newsletter />
    <Footer />
  </>
  )
}

export default App
