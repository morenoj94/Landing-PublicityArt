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


// ==========================================
// LÓGICA DE MODAL Y CARRUSEL DE PORTAFOLIO
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".portfolio-card");
    const modal = document.getElementById("portfolio-modal");
    const modalClose = document.querySelector(".modal-close");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-description");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentImages = [];
    let currentIndex = 0;

    // Abrir Modal al hacer clic en una tarjeta
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const title = card.getAttribute("data-title");
            const desc = card.getAttribute("data-desc");
            const imagesAttr = card.getAttribute("data-images");

            if (imagesAttr) {
                currentImages = imagesAttr.split(",");
                currentIndex = 0;
                
                modalImg.src = currentImages[currentIndex];
                modalTitle.textContent = title;
                modalDesc.textContent = desc;

                modal.classList.add("active");
            }
        });
    });

    // Cambiar a la siguiente imagen
    nextBtn.addEventListener("click", () => {
        if (currentImages.length > 0) {
            currentIndex = (currentIndex + 1) % currentImages.length;
            modalImg.src = currentImages[currentIndex];
        }
    });

    // Cambiar a la imagen anterior
    prevBtn.addEventListener("click", () => {
        if (currentImages.length > 0) {
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            modalImg.src = currentImages[currentIndex];
        }
    });

    // Cerrar Modal
    modalClose.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    // Cerrar al hacer clic fuera del contenido
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
});