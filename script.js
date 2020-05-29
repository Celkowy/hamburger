const burger = document.querySelector('.plus');
const i = document.querySelector('i');

burger.addEventListener('click', function(){
  burger.classList.toggle('active')
})

i.addEventListener('click', function(){
  i.classList.toggle('active')
})