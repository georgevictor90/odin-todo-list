export function newTodo(title, description, dueDate, priority) {
  return {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    complete: false,
  }
};

export function newProject(name, color, isCurrentProject) {
  return {
    length: 0,
    name: name,
    color: color,
    isCurrentProject,
    addTodos: function addTodos() {
      for (let i = 0; i < arguments.length; i++) {
        [].push.call(this, arguments[i]);
      }
    },
    removeTodos: function removeTodos() {
      for (let i = 0; i < arguments.length; i++) {
        [].splice.call(this, arguments[i], 1)
      }
    },
  }
}