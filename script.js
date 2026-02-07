let button = document.querySelector(".btn1");
let input = document.querySelector("#inp1");
let ul = document.querySelector(".tasklist");
function addnewtask() {
  let li = document.createElement("li");
  let inp_val = input.value;
  li.innerText = inp_val;
  ul.appendChild(li);
  let img2=document.createElement("img");
  img2.src="cross_icon.png";
  img2.alt="Cross image";
  ul.appendChild(img2);
  img2.onclick= function(){
    li.remove();
    img2.remove();
  }
// const checkbox = document.createElement("input");
// checkbox.type = "checkbox";
// checkbox.className = "task-check";
// li.appendChild(checkbox);
//  input.value="";
}

