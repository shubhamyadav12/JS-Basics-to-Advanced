const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index) { 
    const {name, dueDate} = todoObject;
    const html = 
    `<div>${name}</div>
     <div>${dueDate}</div>
     <button onclick="
     todoList.splice(${index}, 1);
     renderTodoList();
     " class="delete-todo-button">Delete</button>
    `; 
    todoListHTML += html;
  }); // Closing the forEach loop
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


document.querySelector('.js-todo-button').addEventListener('click', () => {
  addTodo();
})

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input')
  const dueDate = dateInputElement.value;
  
  if (name !== '') {
    todoList.push({
      name,
      dueDate
    });
    console.log(todoList);

    inputElement.value = '';
    renderTodoList();
  }
}
