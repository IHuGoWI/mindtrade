window.addEventListener("scroll", function(){
    var header = document.querySelector('.bottom-line');
    header.classList.toggle('roll',window.scrollY > 5);
})

window.addEventListener("scroll", function(){
    var header = document.querySelector('header');
    header.classList.toggle('roll2',window.scrollY > 5);
});
