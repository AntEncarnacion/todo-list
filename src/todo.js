class Todo {
    constructor(title, description, dueDate, priority) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
    }
    set title(val){
        this.title = val;
    }
    get title(){
        return this.title;
    }
    set description(val){
        this.description = val;
    }
    get description(){
        return this.description;
    }
    set dueDate(val){
        this.dueDate = val;
    }
    get dueDate(){
        return this.dueDate;
    }
    set priority(val){
        this.priority = val;
    }
    get priority(){
        return this.priority;
    }
  }
  