
function activeScroll(){
    document.getElementById('navbar').classList.toggle('ativo', scrollY > 0);
}

window.addEventListener('scroll', activeScroll)