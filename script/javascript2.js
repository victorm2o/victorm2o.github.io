// Validar nombre solo letras y espacios
document.getElementById('name').addEventListener('input', function (event) {
    const name = event.target.value;
    const namePattern = /^[a-zA-Z\s]*$/;

    if (!namePattern.test(name)) {
        event.target.value = name.replace(/[^a-zA-Z\s]/g, ''); // Remueve caracteres no permitidos
    }
});

// Validar apellidos solo letras y espacios
document.getElementById('lastName').addEventListener('input', function (event) {
    const lastName = event.target.value;
    const lastNamePattern = /^[a-zA-Z\s]*$/;

    if (!lastNamePattern.test(lastName)) {
        event.target.value = lastName.replace(/[^a-zA-Z\s]/g, ''); // Remueve caracteres no permitidos
    }
});

// Validar que el campo de teléfono solo acepte números y hasta 9 dígitos
document.getElementById('phone').addEventListener('input', function (event) {
    const phone = event.target.value;
    const phonePattern = /^\d*$/;

    if (!phonePattern.test(phone)) {
        event.target.value = phone.replace(/\D/g, ''); // Remueve caracteres que no sean números
    }

    // Limitar a 9 caracteres
    if (phone.length > 9) {
        event.target.value = phone.substring(0, 9);
    }
});

// Validar el formulario completo al enviar
document.getElementById('contactForm').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Validar que el nombre tenga entre 3 y 40 caracteres
    if (name.length < 3 || name.length > 40) {
        alert('El nombre debe tener entre 3 y 40 caracteres.');
        event.preventDefault(); // Evita el envío
        return;
    }

    // Validar que los apellidos tengan entre 4 y 60 caracteres
    if (lastName.length < 4 || lastName.length > 60) {
        alert('Los apellidos deben tener entre 4 y 60 caracteres.');
        event.preventDefault(); // Evita el envío
        return;
    }

    // Validar que el teléfono tenga exactamente 9 dígitos
    if (phone.length !== 9) {
        alert('El número de teléfono debe tener exactamente 9 dígitos.');
        event.preventDefault(); // Evita el envío
        return;
    }

    // Si todo es correcto
    alert('Formulario enviado correctamente.');
});