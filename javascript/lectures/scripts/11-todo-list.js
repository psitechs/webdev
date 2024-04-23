let todoList = [];
function addTodo(){
 const inputElement = document.querySelector('.task-name-js');
 const name = inputElement.value;
 inputElement.value = '';
 todoList.push(name);
 console.log(name);
 console.log(todoList);

let todoListHTML = '';

 for (let i = 0; i < todoList.length; i++){
  const todo = todoList[i];
  const html = `<p> ${todo} </p>`;
  todoListHTML += html;
 }
 console.log(todoListHTML);
 document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}