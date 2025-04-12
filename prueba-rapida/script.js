import { createElemento, render } from './libreria.js'

const Header = createElemento('header', {'id': 'mainHeader', 'class': 'main-header header'})
const anchor = createElemento('a', {'id': 'link', 'class': 'link', 'href': '#'}, ['Inicio'])

render(Header, 'root')
render(anchor, 'mainHeader')