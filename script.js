// Mostrar el modal al enviar el formulario
document.getElementById('scholarshipForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío real del formulario
    document.getElementById('modal').style.display = 'flex'; // Muestra el modal
});

// Función para cerrar el modal y redirigir a la infografía
document.getElementById('okButton').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none'; // Cierra el modal
    window.location.href = 'infografia.jpg'; // Redirige a la infografía
});
