const Curso = ({titulo, subtitulo, imagen}) => {
  return (
    <div>
      <img src={imagen} alt={titulo} width={283} height={160} />
      <h2>{titulo}</h2>
      <p>{subtitulo}</p>
    </div>
  )
}

export default Curso
