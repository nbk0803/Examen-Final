// Botón Pedir Ahora - Redirige a WhatsApp
document.getElementById('pedir-ahora').addEventListener('click', function() {
    const numero = '573232198483';
    const mensaje = 'Hola CarneYFuego, me gustaría hacer un pedido. ¿Cuál es el menú disponible?';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
});

// Botón Ver Menú - Scroll suave
document.getElementById('ver-menu').addEventListener('click', function() {
    const menuSection = document.getElementById('menu');
    menuSection.scrollIntoView({ behavior: 'smooth' });
});

// Formulario de Contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    
    // Validación básica
    if (!nombre || !email || !telefono || !mensaje) {
        alert('Por favor, completa todos los campos.');
        return;
    }
    
    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo válido.');
        return;
    }
    
    // Validación de teléfono
    const telefonoRegex = /^[0-9]{7,}$/;
    if (!telefonoRegex.test(telefono.replace(/\D/g, ''))) {
        alert('Por favor, ingresa un teléfono válido.');
        return;
    }
    
    // Mensaje de éxito
    alert(`Gracias ${nombre}, tu mensaje ha sido enviado. Nos pondremos en contacto pronto.`);
    this.reset();
});