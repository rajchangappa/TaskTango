import createDate from "./scripts/createDate.js";
import displayTasks from "./scripts/displayTasks.js";

const STORAGE_KEY = "Saved Tasks";

// TASK CLASS
class Task {
  constructor(title, createdDate) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.createdDate = createdDate;
    this.completed = false;
  }
}

// VARIABLES
const newTaskForm = document.getElementById("add-task-form");
const newTaskInput = document.getElementById("task-form-input");

const loadTasks = () => {
  try {
    const savedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(savedTasks) ? savedTasks : [];
  } catch {
    return [];
  }
};

let allTasks = loadTasks();

const saveAndRenderTasks = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allTasks));
  displayTasks(allTasks, deleteTask, toggleTask);
};

const deleteTask = (taskId) => {
  allTasks = allTasks.filter((task) => task.id !== taskId);
  saveAndRenderTasks();
};

const toggleTask = (taskId) => {
  const task = allTasks.find((item) => item.id === taskId);
  if (!task) return;

  task.completed = !task.completed;
  saveAndRenderTasks();
};

// EVENT LISTENERS
newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (newTaskInput.value.trim() === "") {
    alert("Add a task before saving.");
    return;
  }

  let taskTitle = newTaskInput.value.trim();
  let createdDate = createDate();

  const newTask = new Task(taskTitle, createdDate);

  allTasks.push(newTask);
  saveAndRenderTasks();

  newTaskForm.reset();
});

displayTasks(allTasks, deleteTask, toggleTask);
