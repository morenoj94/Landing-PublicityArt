// ==========================================
// CONFIGURACIÓN DE WHATSAPP - PUBLICITY ART
// ==========================================

// 1. Número de teléfono principal (Código de país + número sin espacios ni signos +)
const TELEFONO_WHATSAPP = "50765403589";

document.addEventListener("DOMContentLoaded", () => {
    
    // 2. Lógica para los botones de Cotizar en las Tarjetas de Servicios (data-plan)
    const botonesPlanes = document.querySelectorAll(".btn-whatsapp-plan");

    botonesPlanes.forEach(boton => {
        boton.addEventListener("click", (e) => {
            e.preventDefault(); // Previene la navegación por defecto

            // Obtener el nombre del plan desde el atributo data-plan
            const nombrePlan = boton.getAttribute("data-plan") || "sus servicios";

            // Mensaje personalizado para el plan
            const mensajePlan = `Hola Fabi, estoy interesado en cotizar el ${nombrePlan}. ¿Me podrías dar más información?`;

            // Construcción de la URL de WhatsApp
            const urlWhatsApp = `https://wa.me/${TELEFONO_WHATSAPP}?text=${encodeURIComponent(mensajePlan)}`;

            // Abrir en una nueva pestaña
            window.open(urlWhatsApp, "_blank");
        });
    });

    // 3. Lógica para el botón general de la sección de Contacto
    const botonContactoGeneral = document.getElementById("btn-whatsapp-general");

    if (botonContactoGeneral) {
        botonContactoGeneral.addEventListener("click", (e) => {
            e.preventDefault();

            const mensajeGeneral = "Hola Fabi, me gustaría obtener más información sobre tus servicios de diseño y branding.";
            const urlWhatsApp = `https://wa.me/${TELEFONO_WHATSAPP}?text=${encodeURIComponent(mensajeGeneral)}`;

            window.open(urlWhatsApp, "_blank");
        });
    }
});