import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const API_URL = import.meta.env.VITE_API_URL
  const API_KEY = import.meta.env.VITE_API_KEY

  const [criptos, setCriptos] = useState()
  
  useEffect(() => {
    axios.get(`${API_URL}assets?limit=100`,
      {headers: {Authorization: `Bearer ${API_KEY}`}}
    )
      .then((data) => {
        setCriptos(data.data.data)
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
        { 
          criptos.map( ({id, name, priceUsd}) => (
            <li key={id}>Nombre: { name } Precio: {priceUsd}</li>
          ))
        }
      </ol>
    </>
  )
}

export default App
