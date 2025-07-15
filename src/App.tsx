import Banner from "./components/Banner"
import Button from "./components/Button"
import Link from "./components/Link"

function App() {
  return (
  <>
    <Banner src={"./Imagens/Banner Desktop.png"} alt={"Banner do Luz e Cena para Desktop, com imagem de pessoas no cinema e formas abstratas"} />
    <Link href="/" target="_blank">Link</Link>
    <Button variant={"default"}>Teste</Button>
  </>
  )
}

export default App
