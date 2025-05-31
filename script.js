<script>
  function filterTasks(filter) {
    const tasks = document.querySelectorAll('.task');

    tasks.forEach(task => {
      const isCompleted = task.classList.contains('completed');

      if (filter === 'all') {
        task.style.display = 'list-item';
      } else if (filter === 'completed' && isCompleted) {
        task.style.display = 'list-item';
      } else if (filter === 'pending' && !isCompleted) {
        task.style.display = 'list-item';
      } else {
        task.style.display = 'none';
      }
    });
  }
</script>
