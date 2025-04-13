import { useState, useEffect } from "react"

const Calculadora = ({nombre}) => {

  // PRIMER PASO DEL CICLO DE VIDA
  const [state, setState] = useState({
    numero1: 0,
    numero2: 0
  })

  const [texto, setTexto] = useState('')

  // se ejecuta cuando el componente va a ser montado
  // el primer parametro es una funcion que se ejecuta cuando el componente se monta
  // el segundo parametro es un array opcional, listado de todos los estados que quiero controlar como disparadores
  useEffect(() => {
    console.log(new Date().getTime())
    return () => {
      // aqui se ejecuta todo lo que quiero que pase cuando el componente se va a desmontar
      console.log('El componente se va a desmontar')
    }
  }, [texto])

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
      <input type="text" onChange={(e) => setTexto(e.target.value)} />
      <span>{texto}</span>

    </>
  )
}

export default Calculadora
