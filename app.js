
function activeScroll(){
    document.getElementById('navbar').classList.toggle('ativo', scrollY > 10);
}

window.addEventListener('scroll', activeScroll)

const observer = new IntersectionObserver(entries=> {
    console.log(entries)
    Array.from(entries).forEach(entry=>{
        entries[0].target.classList.add('init-hidden-off')
    })
    
},{
    threshold: [0.5, 1]
})

Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
})

