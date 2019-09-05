let contentBox = document.getElementById("content-wrap");

let extraContent = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quaerat beatae magnam libero, 
totam tempore facilis at adipisci quam vel, quae voluptatibus vitae exercitationem, atque similique 
pariatur molestias illo distinctio.</p>`;

let addButton = document.getElementById("add");
let removeButton = document.getElementById("remove");


addButton.addEventListener("click", addContent);
removeButton.addEventListener("click", removeContent);

function addContent() {
    contentBox.innerHTML = contentBox.innerHTML + extraContent;
}

function removeContent() {
    contentBox.innerHTML = "";
}