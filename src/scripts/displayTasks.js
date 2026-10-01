const displayTasks = (tasks, onDelete, onToggle) => {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.className =
      "rounded-xl border border-dashed border-[#d9d0e9] px-5 py-9 text-center text-sm text-[#716a7d]";
    emptyMessage.textContent =
      "Nothing on your list yet. Add the next thing you need to get done.";
    taskList.appendChild(emptyMessage);
    return;
  }

  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.className =
      "flex min-w-0 flex-col gap-4 rounded-xl border border-[#e7e1ed] bg-white/80 px-5 py-5 shadow-[0_6px_24px_rgba(54,39,80,0.04)] transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6";

    const taskDetails = document.createElement("div");
    taskDetails.className = "min-w-0";

    const taskTitle = document.createElement("p");
    taskTitle.className = task.completed
      ? "mb-1.5 [overflow-wrap:anywhere] text-base font-medium leading-6 text-[#91899b] line-through decoration-[#b5a8c8]"
      : "mb-1.5 [overflow-wrap:anywhere] text-base font-medium leading-6 text-[#40394d]";
    taskTitle.textContent = task.title;

    const createdDate = document.createElement("span");
    createdDate.className = "text-xs text-[#716a7d]";
    createdDate.textContent = `Created at ${task.createdDate}`;

    taskDetails.append(taskTitle, createdDate);

    const taskActions = document.createElement("div");
    taskActions.className =
      "flex w-full shrink-0 items-center justify-end gap-2 sm:w-auto";

    const completedButton = document.createElement("button");
    completedButton.type = "button";
    completedButton.className = task.completed
      ? "min-h-10 rounded-lg border border-[#cfe2d4] bg-[#eff7f0] px-4 text-xs font-semibold text-[#42664d] transition-colors hover:bg-[#e5f1e7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8c74bd]"
      : "min-h-10 rounded-lg border border-[#e1d8ef] bg-[#f8f5ff] px-4 text-xs font-semibold text-[#604c87] transition-colors hover:bg-[#eee8fb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8c74bd]";
    completedButton.textContent = task.completed
      ? "Completed"
      : "Mark complete";
    completedButton.setAttribute("aria-pressed", task.completed);
    completedButton.addEventListener("click", () => onToggle(task.id));

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className =
      "min-h-10 rounded-lg px-3 text-xs font-semibold text-[#716a7d] transition-colors hover:bg-[#fbf0f2] hover:text-[#994a60] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8c74bd]";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => onDelete(task.id));

    taskActions.append(completedButton, deleteButton);
    taskItem.append(taskDetails, taskActions);
    taskList.appendChild(taskItem);
  });
};

export default displayTasks;
