const Article = () => {
  return (
    <>
      <div id="myArticle" className="article-container">
        <h1>Titulo del Articulo</h1>
        <p>Lorem ipsum sit amet consectetur adipiscicin elit. autem architecto amet iure</p>
      </div>
      <div>
        <img src="./img/imagen.jpg" alt="Imagen del Articulo" />
      </div>
      <form>
        <label htmlFor="email">Email:</label>
        <input onChange={() => {}} type="email" id="email" name="email" required />
      </form>
    </>
  )
}