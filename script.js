document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(taskText, save = true) {
        if (taskText === ("")) {
            alert('enter a task')
        } else {
            const li = document.createElement('LI');
            li.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');

             removeButton.addEventListener("click", function() {
                taskList.removeChild(li);

                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                const taskIndex = storedTasks.indexOf(taskText);
                storedTasks.splice(taskIndex, 1);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            });

            li.appendChild(removeButton);
            taskList.appendChild(li);

            taskInput.value = "";

            if (save) {
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }
        }
    }

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    loadTasks();

    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        addTask(taskText);
    });

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            addTask(taskText);
        }
    })
});
