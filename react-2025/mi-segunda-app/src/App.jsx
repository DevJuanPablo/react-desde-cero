import Calculadora from "./components/Calculadora"
import Header from "./components/header/Header"

function App(){
  return (
    <>
      <Header />
      <main>
        <h1>Simple Calculadora</h1>
        <Calculadora nombre='Formulario que suma' />
      </main>
    </>
  )
}

export default App