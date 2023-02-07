const input = document.querySelector('#input');
const addBtn = document.querySelector('#add');
const list = document.querySelector('#taskList');
const form = document.querySelector('form');
const wrapper = document.querySelector('.wrapper');

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

        const itemsArr = document.querySelectorAll('.task');

        if (itemsArr.length === 0) {
            document.querySelector('.footer').remove();
        }
    })

    if (!document.querySelector('.footer')) {
        createFooter(list);
    }
})

function createFooter() {
    const footer = document.createElement('div');
    const clean = document.createElement('button');
    const clear = document.createElement('button');

    footer.classList.add('footer');
    clean.textContent = 'Clean All List';
    clear.textContent = 'Clear Completed';

    clean.addEventListener('click', () => {
        list.textContent = '';
        footer.remove();
    })

    footer.append(clean, clear);
    wrapper.appendChild(footer);
}