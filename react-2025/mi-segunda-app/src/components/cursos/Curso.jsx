import { useRef } from 'react'
import './Curso.css'

const Curso = ({titulo, subtitulo, imagen}) => {

  const miReferencia = useRef()

  const desactivarImagen = () => {
    miReferencia.current.classList.toggle('desactivada')
  }

  return (
    <div>
      <img ref={miReferencia} src={imagen} alt={titulo} width={283} height={160} />
      <h2>{titulo}</h2>
      <p>{subtitulo}</p>
      <button onClick={desactivarImagen}>Desactivar</button>
    </div>
  )
}

export default Curso
