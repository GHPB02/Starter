 // convertendo strings em numeros
/*
 let number = 123
 console.log(String(number))
 let string = "123"
 console.log(Number(string))
*/

// contar quantos caracteres tem uma palavra e um numero
/*
let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)
*/

// transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula
/*
let number = 342.1543532
console.log(number.toFixed(2).replace(".", ","))
*/
// transforme letras minusculas em maiusculas. Faça o contrario disso tambem
/*
let word = "Progamar e muito bacana!"
console.log(word.toUpperCase())
console.log(word.toLowerCase())
*/
// separe um texto que contem epsaços, em um novo array onde cada texto e uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços coloque _
/*
let phrase = "Eu quero viver o amor"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)
*/
// verificar se o texto contem a palavra Amor
/*
let phrase = "Eu quero viver o Amor"
console.log(phrase.includes("Amor"))
*/
// criar Array com construtor
/*
let myArray = new Array('a', 'b', 'c')
console.log(myArray)
*/
// contar elementos de um array
/*
console.log([
    "a",
    {type: "array"},
    function() {return "alo"}
].length)
*/
// transformar uma cadeia de caracteres em elementos de um array
/*
let word = "manipulação"
console.log(Array.from(word))
*/
/*
let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
// remover do fim
//techs.pop()
// remover do começo
//techs.shift()
// pegar somente alguns elementos do array
//console.log(techs.slice(1, 3))
// remover 1 ou mais items em qualquer posição do array
//techs.splice(1,2)
// encontrar a posição de um elemento no array
let index = techs.indexOf('nodejs')
techs.splice(index, 1)

console.log(techs)
*/