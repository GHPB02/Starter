/*Minha resolução
const button = document.querySelector('button')
button.onclick = function() {
    console.log('clique')
    const element = document.querySelector('div')
    element.classList.remove('invisible')

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'

    if(isEscKey) {
        element.classList.add('invisible')
    }
})
}
*/
/*Resolução professor
const  buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function() {
    modalWrapper.classList.remove('invisible')    
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'

    if(isEscKey) {
        modalWrapper.classList.add('invisible')
    }
})
*/