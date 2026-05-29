window.addEventListener('scroll', () => {

const nav = document.querySelector('.navbar');

if(window.scrollY > 100){
    nav.style.background = "rgba(8,21,34,.85)";
}
else{
    nav.style.background = "rgba(8,21,34,.4)";
}

});