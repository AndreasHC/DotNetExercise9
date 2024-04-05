function add_element(){
    let list = document.getElementById("list");
    let newNode = document.createElement("div");
    newText = document.createTextNode(document.getElementById("input").value);
    newNode.appendChild(newText);
    list.appendChild(newNode);

}

document.getElementById("add").addEventListener('click', add_element);