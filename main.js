const input = document.querySelector('#input');
const addBtn = document.querySelector('#add');
const list = document.querySelector('#taskList');
const form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const text = input.value;
    input.value = '';
    
    if( text === '') {
        return;
    }

    const taskDiv = document.createElement('div');
    const p = document.createElement('p');
    const checkbox = document.createElement('input');
    const del = document.createElement('button');

    taskDiv.classList.add('task');
    checkbox.setAttribute('type','checkbox');
    p.textContent = text;
    del.textContent = 'Delete';
    taskDiv.append(checkbox, p, del);
    list.appendChild(taskDiv);

    checkbox.addEventListener('click', function(event) {
        if(event.target.checked) {
            p.classList.add('delete');
        } else {
            p.classList.remove('delete');
        }
    })

    del.addEventListener('click', function(event) {
        const item = event.target.closest('div');
        item.remove();
    })
})