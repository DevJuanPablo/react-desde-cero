import { useState, useEffect } from 'react'

function App() {

  const API_KEY = '21a08aa94f78667f28d58cb2c41cb7413eef3db9d6b5bff0e2be8eba03bc6dce'

  const [criptos, setCriptos] = useState()
  
  useEffect(() => {
    fetch(`https://rest.coincap.io/v3/assets?limit=100`,
      {headers: {Authorization: `Bearer ${API_KEY}`}}
    )
      .then((response) => response.json())
      .then((data) => {
        setCriptos(data.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)  
      })
  }, [])

  if (!criptos)
    return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
        { criptos.map( ({name, priceUsd}) => (
          <li>Nombre: { name } Precio: {priceUsd}</li>
        ))}
      </ol>
    </>
  )
}

export default App
