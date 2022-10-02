'use strict';
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnClsoeModal = document.querySelector(".close-modal")
const btnsOpenModal = document.querySelector(".show-modal")

console.log(btnsOpenModal)

const openModal= function(){
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')

}
const closeModal= function(){
  modal.classList.add('hidden')
  overlay.classList.add('hidden')

}
for (let index = 0; index < btnsOpenModal.length; index++) {
 btnsOpenModal[i].addEventListener('click', openModal);
  btnClsoeModal.addEventListener('click', closeModal)

  overlay.addEventListener('click', closeModal)

}