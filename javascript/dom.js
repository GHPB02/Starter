/* getElementById (element)
const element = document.getElementById('document-title')
console.log(element)
*/

/* getElementsByClassName (HTMLcollection)
const element = document.getElementsByClassName('document')
console.log(element)
*/

/* getElementsByTagName (HTMLcollection)
const element = document.getElementsByTagName('body')
console.log(element)
*/

/* querySelector (element)
const element = document.querySelector('head')
console.log(element)
*/

/* querySelectorAll (Nodelist)
const element = document.querySelectorAll('meta')
console.log(element)
*/

// Manipulando conteudo
/* textContent
const element = document.querySelector('h1')

element.textContent += " Em Desenvolvimento"
*/

/* innerText
const element = document.querySelector('h1')

element.innerText = " Em Desenvolvimento"
*/

/* innerHTML
const element = document.querySelector('h1')

element.innerHTML = " Em Desenvolvimento! <small>!!!</small>"
*/

/* value
const element = document.querySelector('input')

console.log(element.value)
element.value = "outro valor"
*/

/* atributos
const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')

header.setAttribute('class', 'gb header')
*/

/* alterando estilos
const element = document.querySelector('body')

element.style.backgroundColor = '#f9f3D2'
console.log(element.style.backgroundColor)
*/

/* classList
const element = document.querySelector('body')

element.classList.add('active', 'green')
console.log(element.classList)
// element.classList.remove('active')
element.classList.toggle('active')
*/

// Navegando pelos elementos
/* parentNode parentElement
const element = document.querySelector('h1')

console.log(element.parentNode)
*/

/* childNodes children

const el = document.querySelector('body')

// firstChild firstElementChild
console.log(el.firstElementChild)

//lastChild lastElementChild
console.log(el.lastElementChild)
*/
/*
const el = document.querySelector('body script')

// nextSibling nextElementSibling
console.log(el.nextSibling)

// previousSibling previousElementSibling
console.log(el.previousSibling)
*/

// Criando e adicionando elementos
/*
//creatElement
const div = document.createElement('div');
div.innerText = "Um arquivo"

// append / prepend
const body = document.querySelector('body')
body.append(div)
*/
/*
const div = document.createElement('div');
div.innerText = "Um arquivo"

// insertBefore
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)
*/
// Eventos
/*function print() {
    console.log('print')
}
*/
/*
const input = document.querySelector('input')

input.onkeypress = function() {
    console.log('rodei')
}
*/
/*
const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

function print() {
    console.log('print')
}
*/
// argumento event
/*
const input = document.querySelector('input')

input.onkeydown = function(event) {
    console.log('event')
}
*/