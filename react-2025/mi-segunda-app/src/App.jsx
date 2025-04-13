import Header from "./components/header/Header"
import Cuadricula from "./components/cursos/Cuadricula"

function App(){
  return (
    <>
      <Header />
      <main>
        <h1>Cursos de EDteam</h1>
        <Cuadricula />
      </main>
    </>
  )
}

export default App