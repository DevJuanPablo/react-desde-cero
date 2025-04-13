import Curso from "./Curso"

function Cuadricula() {
  return (
    <div className="main-content">
      <Curso
        titulo='Programación con Inteligencia Artificial'
        subtitulo='Curso: Programación desde cero con Inteligencia Artificial'
        imagen='https://edteam-media.s3.amazonaws.com/courses/original/8a182918-ab98-43ac-8882-07b273922985.png'
      />
      <Curso
        titulo='Apps IA con python y LangChain'
        subtitulo='Curso: Crea aplicaciones IA con Python y LangChain'
        imagen='https://edteam-media.s3.amazonaws.com/courses/original/31091a83-3d82-4fb3-8fb6-010b9af4d857.png'
      />
      <Curso
        titulo='Terraform desde cero (2025)'
        subtitulo='Curso: Terraform desde cero'
        imagen='https://edteam-media.s3.amazonaws.com/courses/original/fe14b8a1-a743-4243-85a8-36f3d8b98857.png'
      />
      <Curso
        titulo='MCP conecta la IA con todo'
        subtitulo='Curso: MCP conecta la IA con todo'
        imagen='https://edteam-media.s3.amazonaws.com/courses/original/f18b3237-9a34-4b2f-a113-1b45995664eb.png'
      />
    </div>
  )
}

export default Cuadricula