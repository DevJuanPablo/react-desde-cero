import { useState } from "react"

const Calculadora = ({nombre}) => {

  // PRIMER PASO DEL CICLO DE VIDA
  const [state, setState] = useState({
    numero1: 0,
    numero2: 0
  })

  const setNumber = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })

  }

  // SEGUNDO PASO DEL CICLO DE VIDA
  return (
    <>
      <h2>{nombre}</h2>
      <form>
        <input
          type="number"
          name="numero1"
          value={state.numero1}
          onChange={setNumber}
        />
        <input
          type="number"
          name="numero2"
          value={state.numero2}
          onChange={setNumber}
        />
        <input type="submit" name="enviar" value="Sumar" />
      </form>
      <span>Resultado: {Number(state.numero1) + Number(state.numero2)}</span>
    </>
  )
}

export default Calculadora
