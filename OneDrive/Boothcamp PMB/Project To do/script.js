const will = JSON.parse(localStorage.getItem("will")) || [];
const done = JSON.parse(localStorage.getItem("done")) || [];

function saveTasks() {
  localStorage.setItem("will", JSON.stringify(will));
  localStorage.setItem("done", JSON.stringify(done));
}
loadTasks();

function displayDate() {
  let date = new Date();
  date = date.toString().split(" ");
  document.querySelector("#date").innerHTML =
    date[1] + " " + date[2] + " " + date[3];
}

window.onload = function () {
  displayDate();
  displayItems();
};

function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskTgl = document.getElementById("tanggal");
  var taskText = taskInput.value.trim();
  var taskDate = taskTgl.value.trim();
  if ((taskText !== "") & (taskDate !== "")) {
    var task = {
      text: taskText,
      date: taskDate,
    };
    will.push(task);
    saveTasks();
    taskInput.value = "";
    loadTasks();
  }
}

function completeTask(index) {
  var task = will.splice(index, 1)[0];
  done.push(task);
  saveTasks();
  loadTasks();
}

function restoreTask(index) {
  var task = done.splice(index, 1)[0];
  will.push(task);
  saveTasks();
  loadTasks();
}

function deleteTask(index) {
  done.splice(index, 1);
  saveTasks();
  loadTasks();
}

function loadTasks() {
  var todoList = document.getElementById("todoList");
  var doneList = document.getElementById("doneList");
  todoList.innerHTML = "";
  doneList.innerHTML = "";

  for (var i = 0; i < will.length; i++) {
    var task = will[i];
    var listItem = createTaskListItem(task.text, task.date, i, false);
    todoList.appendChild(listItem);
  }

  for (var j = 0; j < done.length; j++) {
    var doneTask = done[j];
    var doneListItem = createTaskListItem(
      doneTask.text,
      doneTask.date,
      j,
      true
    );
    doneList.appendChild(doneListItem);
  }
}

function createTaskListItem(text, date, index, isDone) {
  var listItem = document.createElement("li");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = isDone;
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      completeTask(index);
    } else {
      restoreTask(index);
    }
  });
  listItem.appendChild(checkbox);

  var taskText = document.createElement("span");
  taskText.textContent = "" + date + " : " + text;
  listItem.appendChild(taskText);

  if (isDone) {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteTask(index);
    });
    listItem.appendChild(deleteButton);
  }
  return listItem;
}
