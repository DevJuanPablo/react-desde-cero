const header = document.createElement('header')
const nav = document.createElement('nav')
const ul = document.createElement('ul')

const link1 = document.createElement('li')
const anchor1 = document.createElement('a')
anchor1.innerHTML = 'Inicio'

const body = document.getElementById('root')

body.appendChild(header)
header.appendChild(nav)
nav.appendChild(ul)
 //menu
ul.appendChild(link1)
link1.append(anchor1)