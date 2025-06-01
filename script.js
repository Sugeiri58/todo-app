document.addEventListener("DOMContentLoaded", () => {
  const btnAgregar = document.getElementById("btn-agregar");
  const inputTarea = document.getElementById("nueva-tarea");
  const lista = document.getElementById("task-list");

  // Agregar nueva tarea
  btnAgregar.addEventListener("click", () => {
    const texto = inputTarea.value.trim();
    if (texto === "") {
      alert("Por favor escribe una tarea.");
      return;
    }

    const li = document.createElement("li");
    li.classList.add("task");

    const span = document.createElement("span");
    span.textContent = texto;
    li.appendChild(span);

    // Botón para marcar como completada
    const btnCompletar = document.createElement("button");
    btnCompletar.classList.add("mark-complete-btn");
    btnCompletar.textContent = "Marcar como completada";
    btnCompletar.addEventListener("click", () => {
      span.classList.toggle("completed");
      btnCompletar.textContent = span.classList.contains("completed")
        ? "Desmarcar"
        : "Marcar como completada";
    });
    li.appendChild(btnCompletar);

    // Botón para eliminar tarea (opcional)
    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("delete-btn");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => {
      lista.removeChild(li);
    });
    li.appendChild(btnEliminar);

    lista.appendChild(li);
    inputTarea.value = "";
  });

  // Activar botones existentes (si hay tareas precargadas)
  const botones = document.querySelectorAll(".mark-complete-btn");
  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const tarea = boton.parentElement.querySelector("span");
      tarea.classList.toggle("completed");
      boton.textContent = tarea.classList.contains("completed")
        ? "Desmarcar"
        : "Marcar como completada";
    });
  });
});

// Filtro de tareas
function filterTasks(filtro) {
  const tareas = document.querySelectorAll(".task");

  tareas.forEach((tarea) => {
    const completada = tarea.querySelector("span").classList.contains("completed");

    if (filtro === "all") {
      tarea.style.display = "list-item";
    } else if (filtro === "completed" && completada) {
      tarea.style.display = "list-item";
    } else if (filtro === "pending" && !completada) {
      tarea.style.display = "list-item";
    } else {
      tarea.style.display = "none";
    }
  });
}
