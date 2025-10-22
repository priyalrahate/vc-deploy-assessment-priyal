
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


function addTask() {
    const taskText = taskInput.value.trim();
     if (taskText === '') {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

     li.addEventListener('click', () => {
        li.classList.toggle('done');
    });

   
    taskList.appendChild(li);

    taskInput.value = '';
}


addTaskBtn.addEventListener('click', addTask);


taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
