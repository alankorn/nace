
function activeScroll(){
    document.getElementById('navbar').classList.toggle('ativo', scrollY > 10);
}

window.addEventListener('scroll', activeScroll)