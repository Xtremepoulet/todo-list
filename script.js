let li = document.querySelectorAll("li"); 

let button = document.querySelector("button");

let ul = document.querySelector("ul");



//add an ended button to all list items
let add_ended_button = (li) => {
    for (let i = 0; i < li.length; i++){
        let add_button = document.createElement("button");
        add_button.appendChild(document.createTextNode("Done"));
        li[i].appendChild(add_button);
    }
} 

add_ended_button(li);




let task_ended = (event) => {
    if (event.target.tagName === "BUTTON") {
        event.target.classList.toggle("red");
      
    }
}

ul.addEventListener("click", task_ended);





//a revoir pour la manière dont on peut appliquer une liste sur un element particulier de la liste 