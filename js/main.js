//filters
let swtisher = document.querySelectorAll(".Special li");
let boxs = document.querySelectorAll(".menu .food-item");
swtisher.forEach((li) => {
    li.addEventListener("click",remove)
    li.addEventListener("click",mange)

});
function remove(){
    swtisher.forEach((li) => {
        li.classList.remove("active")
        this.classList.add("active")
    })
}
 function mange(){
 boxs.forEach((boxs) =>{
    boxs.style.display="none"
    })
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display="flex"
    }) 
}
// scorll to top
let toop = document.querySelector(".to-top");
window.onscroll = function(){
    if(this.scrollY >= 1000){
        toop.classList.add("show");
    }
    else{
        toop.classList.remove("show");

    }
}
toop.onclick = function() {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })

}
/////burger
let burger = document.querySelector(".burger");
let slider = document.querySelector(".slide");
burger.onclick = function(){
    console.log("kkkk")
    slider.classList.toggle("go");
    slider.classList.toggle("goo");
    burger.classList.toggle("postin");
    

}