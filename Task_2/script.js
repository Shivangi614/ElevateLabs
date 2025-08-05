document.getElementById('AddTask').addEventListener('click', () => {
    const input = document.getElementById('task-input');
    const text = input.value.trim();

    if (text === "") {
        alert("Enter Your Task Please!!");
        return
    }

    const li = document.createElement('li');
    const task = document.createElement('span');
    task.textContent = text;

    task.addEventListener('click', () => {
        task.classList.toggle('completed')
    })
    li.appendChild(task)

    const remove = document.createElement('button');
    remove.textContent = 'Remove';
    remove.className = 'rmv-btn';
    remove.addEventListener('click', () => {
        li.remove();
    })
    li.appendChild(remove);
    
    document.getElementById('task-list').appendChild(li);
    input.value = '';
});

document.getElementById('choose').addEventListener('change', () => {
    const val = document.getElementById('choose').value;
    const tasks = document.querySelectorAll("li");

    tasks.forEach(li => {
        const task = li.querySelector('span');
        const iscompleted = task.classList.contains('completed');
        if (val === 'all') {
            li.style.display = 'flex';
        }
        else if (val === 'completed') {
            li.style.display = iscompleted ? 'flex' : 'none';

        }
        else if (val === 'pending') {
            li.style.display = !iscompleted ? 'flex' : 'none';
        }
    });
})
