let btn = document.querySelector("button");
let ul =document.querySelector("ul");
let inp =document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    let delbtn = document.createElement("button");

    item.innerText= inp.value;
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");

    ul.appendChild(item)
    item.appendChild(delbtn);

    inp.value="";
})

ul.addEventListener("click",function(event){
    let listitem = event.target.parentElement;
    listitem.remove();
})