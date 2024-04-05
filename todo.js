function add_element(){
    let input = document.getElementById('input');
    let newText = document.createTextNode(input.value);
    input.value = '';
    let textDiv = document.createElement('div');
    textDiv.classList.add('col-11');
    textDiv.appendChild(newText);
    let icon = document.createElement('i');
    icon.classList.add('bi');
    icon.classList.add('bi-trash');
    let removeButton = document.createElement('button');
    removeButton.setAttribute('type', 'button');
    removeButton.appendChild(icon);
    let buttonDiv = document.createElement('div');
    buttonDiv.classList.add('col-1');
    buttonDiv.appendChild(removeButton);
    let newNode = document.createElement('div');
    newNode.classList.add('row');
    newNode.classList.add('active-list-entry');
    newNode.appendChild(textDiv);
    newNode.appendChild(buttonDiv);
    let list = document.getElementById('list');
    list.appendChild(newNode);
    removeButton.addEventListener('click', (_e) => list.removeChild(newNode))
    textDiv.addEventListener(
        'click',
        (_e) =>
        {
            if(newNode.classList.contains('active-list-entry'))
            {
                newNode.classList.remove('active-list-entry');
                newNode.classList.add('inactive-list-entry');
            }
            else
            {
                newNode.classList.remove('inactive-list-entry');
                newNode.classList.add('active-list-entry');
            }
        });
}

document.getElementById('add').addEventListener('click', add_element);