setTimeout(function(){
    document.querySelector(".layer").classList.add('complete');
    var loader = document.querySelector("#loader-wrapper");
    loader.style.display = "none";
}, 1500)

window.addEventListener('scroll', () =>{
    let scrollUp = document.querySelector('.scrollUp');
    let a= window.pageYOffset;
    if(a > 300){
        scrollUp.classList.add("active");
    }
    else{
        scrollUp.classList.remove("active");
    }
})

function menu(){
    var showNav= document.querySelector(".nav-list");
    showNav.classList.toggle("show");
    var a = Array.from(document.querySelectorAll(".show a"));
    a.forEach((rem) => {
        rem.addEventListener('click', () =>{
            showNav.classList.remove("show");
        });
    });
} 
