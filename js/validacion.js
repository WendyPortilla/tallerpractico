// Validacion de cedula (no vacío)
if (cedula.trim() === '') {
    document.getElementById('errorCedula').innerHTML = 'Ingrese su Cedula';
    return; }

// Validacion de nombre (no vacío)
if (nombre.trim() === '') {
document.getElementById('errorNombre').innerHTML = 'Ingrese su nombre';
return; }

// Validacion de apellido (no vacío)
if (apellido .trim() === '') {
    document.getElementById('errorApellido ').innerHTML = 'Ingrese su apellido ';
    return; }

    // Validacion de direccion(no vacío)
if (direccion.trim() === '') {
    document.getElementById('errorDireccion').innerHTML = 'Ingrese su direccion';
    return; }

    // validacion de email (normal)
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  document.getElementById('errorEmail').innerHTML = 'Ingrese email válido';
  return; }
