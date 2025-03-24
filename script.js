document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM completamente cargado");

    const form = document.getElementById("contactForm");
    if (!form) {
        console.error("Formulario no encontrado en el HTML");
        return;
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre")?.value;
        const email = document.getElementById("email")?.value;
        const tipo_consulta = document.getElementById("tipo_consulta")?.value;
        const mensaje = document.getElementById("mensaje")?.value;

        console.log("Valores del formulario:", { nombre, email, tipo_consulta, mensaje });

        if (!nombre || !email || !tipo_consulta || !mensaje) {
            console.error("Faltan campos en el formulario");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/enviar-mensaje", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre, email, tipo_consulta, mensaje }),
            });

            const data = await response.json();
            console.log("Respuesta del servidor:", data);
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
        }
    });
});
