var btnAdd = document.querySelector('#btnAdicionar');
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var dataElement = document.querySelector('#app #date')
var todos =  JSON.parse(localStorage.getItem('list_todin')) || [];
var dia = new Date().getDate(); 
var mes = new Date().getMonth()+1;
var ano  = new Date().getFullYear();



console.log(dataElement);


function renderTodos() {

    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodos(' + pos +')');
        var linkText = document.createTextNode('  Excluir ' );
        var data = document.createTextNode(" - " + dia + ' /' + mes + ' /' + ano )
        
      
        todoElement.appendChild(todoText);
        todoElement.appendChild(data);
        todoElement.appendChild(linkElement);
        linkElement.appendChild(linkText);
        linkElement.setAttribute('href', '#');
   
        listElement.appendChild(todoElement);
        console.log(todo);
    }
}
renderTodos();
console.log(inputElement);
console.log(listElement);
console.log(btnAdd);


function deleteTodos(pos) {
    todos.splice(pos, 1);
    renderTodos();
    SaveToStorage();
}

function AddTodo() {
    var texTodo = inputElement.value;

    todos.push(texTodo);
    inputElement.value = '';
    renderTodos();
    SaveToStorage();
}

btnAdd.onclick = AddTodo;

function SaveToStorage(){
    localStorage.setItem('list_todin', JSON.stringify(todos));

}