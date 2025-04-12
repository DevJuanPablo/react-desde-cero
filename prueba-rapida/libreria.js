export function createElemento(elemento, atributos = {}, hijos = []) {
  const elem = document.createElement(elemento)

  let keys = Object.keys(atributos)
  keys.map(key => elem.setAttribute(key, atributos[key]))

  hijos.map(hijo => { 
    if (typeof hijo === 'string') {
      elem.appendChild(document.createTextNode(hijo))
    } else if (Array.isArray(hijo)) {
      hijo.map(h => elem.appendChild(h))
    } else {
      elem.appendChild(hijo)
    }
  })
  return elem
}

export function render(contenido, elementoRaiz) {
  let elemRaiz = document.getElementById(elementoRaiz)
  elemRaiz.appendChild(contenido)
}

