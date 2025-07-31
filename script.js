let btn = document.querySelector("#button");
btn.addEventListener('click',funn);

let edit_btn = document.querySelectorAll(".edit");
edit_btn.forEach(btn => btn.addEventListener('click',change));

let remove_btn = document.querySelectorAll(".remove");
remove_btn.forEach(btn => btn.addEventListener('click',remove_task));

function remove_task(){
  const btn = this;
  const item = btn.parentElement;
  if(btn.id == "first_item"){
    alert("hueheu");
  }
  item.remove();
}

function change(){
  const btn = this;
  const item = btn.parentElement;
  const textDiv = item.querySelector(".actual_text");

  if (btn.textContent === "Edit") {
    textDiv.setAttribute("contenteditable", "true");
    textDiv.focus();
    btn.textContent = "Save";
  } else {
    textDiv.removeAttribute("contenteditable");
    btn.textContent = "Edit";
  }
}

function funn(){
  let text = document.querySelector(".input_area").value;

  if (text.trim() !== "") {
  let new_elem = document.createElement("div");
  new_elem.classList.add("item");

  let child_elem=document.createElement("div");
  child_elem.classList.add("tasks_item");

  let arrow = document.createElement("span");
  arrow.classList.add("arrows");
  arrow.innerHTML = "&#9840;";

  let task_text = document.createElement("div");
  task_text.classList.add("actual_text");
  task_text.innerText = text;

  let edit = document.createElement("button");
  edit.classList.add("edit");
  edit.textContent = "Edit";
  edit.addEventListener('click',change);

  let remove = document.createElement("button");
  remove.classList.add("remove");
  remove.textContent = "Remove";
  remove.addEventListener('click',remove_task);
  
  child_elem.appendChild(arrow);
  child_elem.appendChild(task_text);
  new_elem.append(child_elem);
  new_elem.appendChild(edit);
  new_elem.appendChild(remove);

  let parent = document.querySelector(".tasks");
  parent.appendChild(new_elem);

  document.querySelector(".input_area").value = "";

  let firstItem = document.querySelector("#first_item");
  let firstch = document.querySelector("#first_ch");
  if (firstItem && firstch.innerText === "No Tasks Right Now") {
      firstItem.remove();
  }
}
}
