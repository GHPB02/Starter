/*
*Promise 

* A promessa de que algo ira acontecer
* Podera dar certo ou errado,
* mas ira acontecer
*/

let aceitar = false

console.log('pedir uber')
const promessa = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve('pedido aceito!')
  }
  return reject('pedido negado!')
})

console.log('aguardando')

promessa
.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(() => console.log('finalizada'))