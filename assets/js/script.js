window.addEventListener("load", function(){
    var node = document.querySelector(".layer");
    node.classList.add('complete');
})
setTimeout(function(){
    var loader = document.querySelector("#loader-wrapper");
    loader.style.display = "none";
}, 2300)

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
setTimeout(function(){
    var loader = document.querySelector("#loader-wrapper");
    loader.style.display = "none";
}, 2300)

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
