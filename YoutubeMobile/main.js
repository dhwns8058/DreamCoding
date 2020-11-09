const moreBtn = document.querySelector(".info .metadata .moreBtn");
const title = document.querySelector(".info .metadata .title");


moreBtn.addEventListener("click", ()=> {
    moreBtn.classList.toggle("clicked");
    title.classList.toggle("clamp");
});

const a = document.querySelector(".a");

a.addEventListener("click", ()=>{
    console.log("AAA")
});

