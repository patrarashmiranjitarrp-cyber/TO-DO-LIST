let input = document.querySelector("#inp1");
let ul = document.querySelector(".tasklist");

function addnewtask() {

    let inp_val = input.value.trim();

    if(inp_val === ""){
        alert("Please enter a task");
        return;
    }

    // create li
    let li = document.createElement("li");
    li.classList.add("task-item");

    // task text
    let span = document.createElement("span");
    span.innerText = inp_val;

    // delete image
    let img = document.createElement("img");
    img.src = "./cross_icon.png";
    img.classList.add("delete-icon");

    // append
    li.appendChild(span);
    li.appendChild(img);

    ul.appendChild(li);

    input.value = "";

    // delete task
    img.onclick = function () {
        li.remove();
    };
}