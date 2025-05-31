document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.mark-complete-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const taskItem = button.parentElement;
      const taskText = taskItem.querySelector('span');

      // Alternar clase "completed"
      taskText.classList.toggle('completed');

      // Cambiar texto del botón según estado
      if (taskText.classList.contains('completed')) {
        button.textContent = 'Desmarcar';
      } else {
        button.textContent = 'Marcar como completada';
      }
    });
  });
});
