const toggleBtn = document.querySelector('.navbar__toggleBtn')
const menu = document.querySelector('.navbar__menu')
const icons = document.querySelector('.navbar__icons')

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});




/*var t = document.getElementById('target');
t.addEventListener('click', function(event){
    alert('Hello world, '+event.target.value);
}); */