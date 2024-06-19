let tasks = [];

function addTask(tasks, description) {
    let task = {
        id: Date.now(),
        description: description,
        completed: false
    };
    return [...tasks, task];
}

function removeTask(tasks, taskId) {
    return tasks.filter(task => task.id !== taskId);
}

function markTaskCompleted(tasks, taskId) {
    return tasks.map(task => 
        task.id === taskId ? { ...task, completed: true } : task
    );
}

function displayTasks(tasks) {
    tasks.forEach(task => {
        console.log(`Description: ${task.description}, Completed: ${task.completed}`);
    });
}


console.log('Tasks after adding:');
displayTasks(tasks);

tasks = markTaskCompleted(tasks, tasks[1].id);

console.log('Tasks after marking 1 as completed:');
displayTasks(tasks);

tasks = removeTask(tasks, tasks[0].id);

console.log('Tasks after removing 1:');
displayTasks(tasks);


