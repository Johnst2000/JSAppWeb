document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Detiene envío hasta validar

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Validaciones
        if (nombre.length < 2) {
            mostrarMensaje("❌ El nombre debe tener al menos 2 caracteres.", "error");
            return;
        }

        if (!validarEmail(email)) {
            mostrarMensaje("❌ Ingresa un correo electrónico válido.", "error");
            return;
        }

        if (mensaje.length < 5) {
            mostrarMensaje("❌ El mensaje debe tener al menos 5 caracteres.", "error");
            return;
        }

        // Si todo está bien → enviar el formulario
        mostrarMensaje("✔ ¡Formulario enviado correctamente!", "exito");

        setTimeout(() => {
            form.submit();
        }, 500);

    });

    function mostrarMensaje(texto, tipo) {
        feedback.textContent = texto;
        feedback.className = "form-feedback " + tipo;
        feedback.hidden = false;
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

});
