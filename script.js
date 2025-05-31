// Obtener referencias a los elementos
const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');

// Agregar una nueva tarea
function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText !== '') {
    // Crear elemento li
    const li = document.createElement('li');
    li.textContent = taskText;

    // Botón de eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.onclick = function() {
      taskList.removeChild(li);
    };

    // Agregar el botón al li y luego li a la lista
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Limpiar campo
    newTaskInput.value = '';
  }
}
