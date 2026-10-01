console.log("-- APP CONNECTED --");
import createDate from "./scripts/createDate.js";

// TASK CLASS
class Task {
  constructor(title, createdDate) {
    this.id = crypto.randomUUID().slice(0, 6);
    this.title = title;
    this.createdDate = createdDate;
    this.completed = false;
  }
}

// VARIABLES
const newTaskForm = document.getElementById("add-task-form");
const newTaskInput = document.getElementById("task-form-input");

const allTasks = JSON.parse(localStorage.getItem("Saved Tasks")) || [];

// EVENT LISTENERS
newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (newTaskInput.value.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  let taskTitle = newTaskInput.value.trim();
  let createdDate = createDate();

  const newTask = new Task(taskTitle, createdDate);

  allTasks.push(newTask);
  localStorage.setItem("Saved Tasks", JSON.stringify(allTasks));

  newTaskForm.reset();
  console.log("All tasks:", allTasks);
});

console.log("All tasks:", allTasks);
