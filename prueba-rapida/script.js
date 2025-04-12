import { createElemento, render } from './libreria.js'

const Header = createElemento('header', {'id': 'mainHeader', 'class': 'main-header header'})
const anchor = createElemento('a', {'id': 'link', 'class': 'link', 'href': '#'}, ['Inicio'])

render(Header, 'root')
render(anchor, 'mainHeader')

const Article = (imgSrc, title, content) => `
  <article id="mainArticle" class="main-article article">
    <h2 class="article-title">${title}</h2>
    <div>
      <img src="${imgSrc}" />
    </div>
    <p class="article-content">${content}</p>
  </article>
`
const body = document.getElementById('root')
body.innerHTML += Article('./img/imagen.jpg', 'Título del artículo', 'Contenido del artículo')