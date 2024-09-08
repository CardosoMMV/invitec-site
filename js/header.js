const btn_menu = document.querySelector('#btn-menu')
const navbar = document.querySelector('.navbar')
const solucoes_item = document.querySelector('#solucoes-item')
const cases_item = document.querySelector('#cases-item')
const rolagemBody = document.querySelector('body')
btn_menu.addEventListener('click', e => {
  btn_menu.classList.toggle('navbar__btn-menu--actived')
  navbar.classList.toggle('navbar--actived')
  rolagemBody.classList.toggle('not-overflow-y')
})
solucoes_item.addEventListener('click', e => {
  e.preventDefault()
  solucoes_item.nextElementSibling.classList.toggle('sec-list--actived-display')
})
cases_item.addEventListener('click', e => {
  e.preventDefault()
  cases_item.nextElementSibling.classList.toggle('sec-list--actived-display')
})