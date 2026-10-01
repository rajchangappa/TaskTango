import createDate from "./scripts/createDate.js";
import displayTasks from "./scripts/displayTasks.js";

class Task {
  constructor(title, createdDate) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.createdDate = createdDate;
    this.createdAt = Date.now();
    this.completed = false;
  }
}

const newTaskForm = document.getElementById("add-task-form");
const newTaskInput = document.getElementById("task-form-input");
const taskSortSelect = document.getElementById("task-sort");

const savedTasks = localStorage.getItem("Saved Tasks");
let allTasks = savedTasks ? JSON.parse(savedTasks) : [];

// Function to get sorted tasks based on the selected sort option
const getSortedTasks = () => {
  const tasks = allTasks.slice();

  if (taskSortSelect.value === "title-asc") {
    return tasks.sort((a, b) =>
      a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    );
  }

  if (taskSortSelect.value === "title-desc") {
    return tasks.sort((a, b) =>
      b.title.toLowerCase().localeCompare(a.title.toLowerCase()),
    );
  }

  if (taskSortSelect.value === "created-oldest") {
    return tasks.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
  }

  return tasks.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
};

// Function to render tasks in the UI
const renderTasks = () => {
  displayTasks(getSortedTasks(), deleteTask, toggleTask);
};

// Function to save tasks to localStorage and re-render the task list
const saveTasks = () => {
  localStorage.setItem("Saved Tasks", JSON.stringify(allTasks));
  renderTasks();
};

// Function to delete a task by its ID
const deleteTask = (taskId) => {
  allTasks = allTasks.filter((task) => task.id !== taskId);
  saveTasks();
};

// Function to toggle the completion status of a task by its ID
const toggleTask = (taskId) => {
  const task = allTasks.find((item) => item.id === taskId);
  if (task) {
    task.completed = !task.completed;
    saveTasks();
  }
};

// Event listener for the form submission to add a new task
newTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = newTaskInput.value.trim();

  if (!title) {
    alert("Add a task before saving.");
    return;
  }

  allTasks.push(new Task(title, createDate()));
  newTaskForm.reset();
  saveTasks();
});

// Event listener for the task sort select change to re-render tasks
taskSortSelect.addEventListener("change", renderTasks);
renderTasks();
