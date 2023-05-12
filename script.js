


let li = document.querySelectorAll("li"); 
let ul = document.getElementById("todo_list");
let input = document.getElementById("new_item");
let add_new_item = document.getElementById("add_item_button");



//add an ended button to all list items
let add_ended_button = (li) => {
    for (let i = 0; i < li.length; i++){
        let space = document.createElement("br");
        let add_button = document.createElement("button");
        add_button.classList.add("delete_button");

        add_button.append(document.createTextNode("Done"));

        
        li[i].append(space, add_button);
    }
} 






//pas forcement la bonne manière mais elle marche. A voir de nouvelles 

let delete_list = event => {
    if (event.target.tagName === "BUTTON" && event.target.className === "delete_button"){
        let parent = event.target.parentNode;
        parent.remove()
        
    }
}



let add_list_item = (ul, input) => {
    let new_item = document.createElement("li");
    new_item.append(document.createTextNode(input.value));
    new_item.classList.add("list_item");


    let button = document.createElement("button");
    button.append(document.createTextNode("Done"));
    button.classList.add("delete_button");

    new_item.append(button);

    ul.append(new_item);


    input.value = "";
} 

let add_item = event => {
    if (event.target.tagName === "BUTTON" && event.target.id === "add_item_button"){
        add_list_item(ul, input);
    }
}


add_ended_button(li);

add_new_item.addEventListener("click", add_item);





ul.addEventListener("click", delete_list);








//a revoir pour la manière dont on peut appliquer une liste sur un element particulier de la liste 