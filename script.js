let input = document.querySelector("#inp1");
let ul = document.querySelector(".tasklist");

function addnewtask() {

    let inp_val = input.value.trim();

    if(inp_val === ""){
        alert("Please enter a task");
        return;
    }

    // Create task container
    let taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    // Create li
    let li = document.createElement("li");
    li.innerText = inp_val;

    // Create delete image
    let img2 = document.createElement("img");
    img2.src = "cross_icon.png";
    img2.classList.add("delete-btn");

    // Append elements
    taskItem.appendChild(li);
    taskItem.appendChild(img2);

    ul.appendChild(taskItem);

    // Clear input
    input.value = "";

    // Delete task
    img2.onclick = function () {
        taskItem.remove();
    };
}