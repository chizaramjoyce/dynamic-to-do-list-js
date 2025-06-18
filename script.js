document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value;

        if (taskText === ("")) {
            alert('enter a task')
        } else {
            const li = document.createElement('LI');
            li.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

             removeButton.addEventListener("click", function() {
                taskList.removeChild(li);
            });

            li.appendChild(removeButton);
            taskList.appendChild(li);

            taskInput.value = "";
        }
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    })
});
