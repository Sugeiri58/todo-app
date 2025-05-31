document.addEventListener("DOMContentLoaded", function () {
  const btnAgregar = document.getElementById("btn-agregar");
  const inputTarea = document.getElementById("nueva-tarea");
  const lista = document.getElementById("lista-tareas");

  btnAgregar.addEventListener("click", function () {
    const texto = inputTarea.value.trim();

    if (texto === "") {
      alert("Por favor escribe una tarea.");
      return;
    }

    const li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
    inputTarea.value = "";
  });
});