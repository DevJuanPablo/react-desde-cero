function createElemento(elemento, atributos = {}, hijos = []) {
  const elem = document.createElement(elemento)

  let keys = Object.keys(atributos)

  keys.map(key => elem.setAttribute(key, atributos[key]))

  return elem
}

function render(contenido, elementoRaiz) {
  let elemRaiz = document.getElementById(elementoRaiz)
  elemRaiz.appendChild(contenido)
}

const Header = createElemento('header', {'id': 'mainHeader', 'class': 'main-header header'})
render(Header, 'root')