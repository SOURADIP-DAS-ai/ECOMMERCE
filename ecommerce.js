let icon=document.querySelector(".icon")
let ul=document.querySelector("ul")
icon.addEventListener("click",()=>{
    ul.classList.toggle("showData")
    if(ul.className=="showData"){
     document.getElementById("bar").className="fa-regular fa-rectangle-xmark"   
    }
    else{
        document.getElementById("bar").className="fa-solid fa-bars"
    }
});
let home=document.getElementById("home")
let shops=document.getElementById("shops")
let reviews=document.getElementById("reviews")
let contacts=document.getElementById("contacts")

home.addEventListener("click",()=>{
    home.style.color="rgb(4,219,219)"
});
shops.addEventListener("click",()=>{
    shops.style.color="rgb(4,219,219)"
});
reviews.addEventListener("click",()=>{
    reviews.style.color="rgb(4,219,219)"
});
contacts.addEventListener("click",()=>{
    contacts.style.color="rgb(4,219,219)"
});