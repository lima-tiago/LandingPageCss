const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click', function () {
  menu.classList.toggle('open')
  navbar.classList.toggle('open')
})