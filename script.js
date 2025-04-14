const boton = document.getElementById("mostrarContacto");
const correo = document.getElementById("correo");

boton.addEventListener("click", () => {
  correo.style.display = correo.style.display === "none" ? "block" : "none";
});
