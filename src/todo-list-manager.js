import Project from "./project";
import Todo from "./todo";

const todo_list_manager = (function () {
  let projects = [];
  projects.push(new Project("Default"));

  const createProject = (title, description = "") => {
    this.projects.push(new Project(title, description));
  };
  const removeProject = (item) => {
    const index = this.projects.indexOf(item);
    if (index > -1) {
      this.projects.splice(index, 1);
    }
  };
  const editProject = (newValue, option) => {};
  const createTodo = (
    title,
    description = "",
    dueDate,
    priority = "0",
    projectIndex
  ) => {
    this.projects(projectIndex).addTodo(
      new Todo(title, description, dueDate, priority)
    );
  };
  const removeTodo = (todoIndex, projectIndex) => {
    this.projects[projectIndex].removeTodo(todoIndex);
  };
  const editTodo = (newValue, option, todoIndex, projectIndex) => {
      this.projects[projectIndex].editTodo(newValue, todoIndex, option);
  };

  return {
    projects,
    createProject,
    removeProject,
    editProject,
    createTodo,
    removeTodo,
    editTodo,
  };
})();

export default todo_list_manager;
