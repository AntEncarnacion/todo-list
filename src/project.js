class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.todos = [];
  }
  addTodo = (td) => {
    this.todos.push(td);
  };
  removeTodo = (index) => {
    this.todos.splice(index, 1);
  };
  editTodo = (newValue, todoIndex, option){
      if(option == 0){
        this.todos[todoIndex].title = newValue;
      } 
      else if (option == 1) {
        this.todos[todoIndex].description = newValue;
      } 
      else if(option == 2) {
        this.todos[todoIndex].dueDate = newValue;
      } 
      else if (option == 3) {
        this.todos[todoIndex].priority = newValue;
      }
  }
  set title(val) {
      this.title = val;
  }
  get title() {
      return this.title;
  }  
  set description(val) {
    this.description = val;
}
  get description() {
      return this.title;
  }
  get todos() {
    return this.todos;
  }
}
