function addTask() {
    let taskInput = document.getElementById("task");
    let taskText = taskInput.value.trim();

    if (taskText === "") return; // Prevent adding empty tasks

    let taskList = document.getElementById("task-list");

    // Create task list item
    let li = document.createElement("li");
    li.classList.add("task-content");

    // Create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () {
        li.classList.toggle("completed"); // Strike-through text when checked
        updateTooltip(checkbox, li);
    };
    checkbox.setAttribute("aria-label", "Toggle task completion");

    // Create task text
    let span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = taskText;

    // Tooltip for task completion status
    let tooltip = document.createElement("span");
    tooltip.classList.add("tooltip");
    tooltip.textContent = "Not Completed";
    span.appendChild(tooltip);

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = function () {
        li.remove();
    };
    deleteBtn.setAttribute("aria-label", "Delete task");

    // Append elements to list item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Append list item to task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";

    updateTooltip(checkbox, li);
}

// Update tooltip to reflect task completion
function updateTooltip(checkbox, li) {
    let tooltip = li.querySelector(".tooltip");
    if (checkbox.checked) {
        tooltip.textContent = "Completed";
    } else {
        tooltip.textContent = "Not Completed";
    }
}

// Listen for Enter key press in input field
document.getElementById("task").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();  // Call addTask() when Enter is pressed
    }
});
