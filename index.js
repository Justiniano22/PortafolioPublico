
//MANEJO DE IMAGEN, CAMBIA DE IMAGEN POR OTRA

const imagenPresentación = document.getElementById('imagenPresentación');

imagenPresentación.addEventListener('mouseenter', () => {
    imagenPresentación.style.cursor = "pointer";
    // imagenPresentación.style.transform = "scale(1.5)";
    
    // Primero baja opacidad a 0
    imagenPresentación.style.opacity = "0";

    // Después de 500ms (medio segundo), cambia el src y vuelve a opacidad 1
    setTimeout(() => {
        imagenPresentación.src = "./media/Luffy4.png";
        imagenPresentación.style.opacity = "1";
    }, 500);
});

imagenPresentación.addEventListener('mouseleave', () => {
    imagenPresentación.style.opacity = "0";

    setTimeout(() => {
        imagenPresentación.src = "./media/Luff3.jpg";
        imagenPresentación.style.opacity = "1";
    }, 500);
});



//MANEJO DE LA CREACIÓN DE CARDS (HTML) DE SECTION PROYECTOS


const cardsProyectos = {
    proyectos : [
        {
            id: '1',
            url:'./media/LasMulitasfondoNaranja.png',
            nombre: 'Las Mulitas',
            subtitle: '2023',
            descrption: 'Proyecto final (realizado en equipo con 2 compañeros) para la materia de desarrollo web de la carrera de Desarrollador de Software.', 
            botonDescription: 'Git Hub',
            linkEnlace: 'https://github.com/GiselaFlores/lasMulitas',
            alt: 'Image of Luff3',
        },
        {
            id: '2',
            url:'./media/CuadroMitadSinFondo.webp',
            nombre: 'GalleryArt',
            subtitle: '2025',
            descrption: 'Proyecto intermedio individual para aplicar lo aprendido en la Diplomatura en Front End .', 
            botonDescription: 'Git Hub',
            linkEnlace: 'https://www.youtube.com/watch?v=5e_JADYG-1A',
            alt: 'Imagen de CuadroMitadSinFondo',
        },
    ]
}

const contenedorWrapper = document.getElementById('contenedorWrapper');

const generarCardsProjects = (proyectos) => {
    for (let i = 0; i < proyectos.length; i++) {
        const cardsDeProyectos = proyectos[i];  


        const divCard = document.createElement('div');
        
        const divFrontPage = document.createElement('div');
        const divCardInfo = document.createElement('div');
        const titleFrontPage = document.createElement('h2');
        const textFrontPage = document.createElement('p');

        const divBackPage = document.createElement('div');
        const divCardContent = document.createElement('div');
        const titleBackPage = document.createElement('h3');
        const textBackPage = document.createElement('p');
        const buttonBackPage = document.createElement('button');
        
        divCard.classList.add('card');
        divFrontPage.classList.add('front-page');
        divCardInfo.classList.add('card-info');
        titleFrontPage.classList.add('card-title');
        textFrontPage.classList.add('card-subtitle');

        divBackPage.classList.add('back-page');
        divCardContent.classList.add('card-content');
        textBackPage.classList.add('card-description');
        buttonBackPage.classList.add('card-button');
        
        divFrontPage.style.backgroundImage = `url(${cardsDeProyectos.url})`;
        titleFrontPage.textContent = cardsDeProyectos.nombre;
        textFrontPage.textContent = cardsDeProyectos.subtitle;

        titleBackPage.textContent = cardsDeProyectos.nombre;
        textBackPage.textContent = cardsDeProyectos.descrption;
        buttonBackPage.textContent = `${cardsDeProyectos.botonDescription}`;

        divCardInfo.append(...[titleFrontPage, textFrontPage]);
        divFrontPage.append(...[divCardInfo]);

        divCardContent.append(...[titleBackPage, textBackPage, buttonBackPage]);
        divBackPage.append(...[divCardContent])

        divCard.append(...[divFrontPage, divBackPage]);
        contenedorWrapper.append(...[divCard]);

        buttonBackPage.addEventListener('click', () => {
            const title = titleBackPage.textContent || 'Sin título';
            window.open(cardsDeProyectos.linkEnlace, "_blank");
            });
        }
};

generarCardsProjects(cardsProyectos.proyectos);


// const generarCardsProjects = (proyectos) => {
//     const htmlProyectos = proyectos.map(card => `
//         <div class="card">
//             <div class="front-page" style="background-image: url(${card.url});">
//                 <div class="card-info">
//                     <h2 class="card-title">${card.nombre}</h2>
//                     <p class="card-subtitle">${card.subtitle}</p>
//                 </div>
//             </div>
//             <div class="back-page">
//                 <div class="card-content">
//                     <h3>${card.nombre}</h3>
//                     <p class="card-description">${card.descrption}</p>
//                     <a href="${card.linkEnlace}" target="_blank" class="card-button">${card.botonDescription}</a>
//                 </div>
//             </div>
//         </div>
//     `).join('');

//     contenedorWrapper.innerHTML = htmlProyectos;
// };

// generarCardsProjects(cardsProyectos.proyectos);

//MANEJO DE BOTOR SUBIR AL PRINCIPIO DE LA PAGINA

const btnSubir = document.getElementById("btn-subir");

window.onscroll = ()=> {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnSubir.classList.add("show");
    } else {
        btnSubir.classList.remove("show");
    }
};

btnSubir.addEventListener("click", ()=> {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



// MANEJO DE MENU DE ELECCIÓN ENTRE PRESENTACIÓN E INFORMACIÓN 

const contenedorSobreMi = document.getElementById('contenedorSobreMi');
const contenedorInfo = document.getElementById('contenedorInfo');

const botonSobreMi = document.getElementById('botonSobreMi');
botonSobreMi.style.cursor = 'pointer';

const botonInfo = document.getElementById('botonInfo');
botonInfo.style.cursor = 'pointer';

botonSobreMi.addEventListener('click', ()=>{
    contenedorSobreMi.style.display = 'block';
    contenedorInfo.style.display = 'none';
    botonSobreMi.classList.add('btnActive');
    botonInfo.classList.remove('btnActive');
})

botonInfo.addEventListener('click', ()=>{
    contenedorInfo.style.display = 'block';
    contenedorSobreMi.style.display = 'none';
    botonInfo.classList.add('btnActive');
    botonSobreMi.classList.remove('btnActive');
})


// MANEJO DE DETECCIÓN PARA SABER EN QUE SECCION SE ENCUENTRA Y ASI SUBRAYAR EL MENU CORRESPONDIENTE DEL NAVBAR

const secciones = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    secciones.forEach(section => {
        const sectionTop = section.offsetTop - 200; // margen de detección
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
        }
    });
});


// MANEJO DE EVENTO SUBMIT EN FORMULARIO DE CONTACTO

const formularioContacto = document.getElementById('formularioContacto');
const nombreInput = document.getElementById('nombreInput');
const emailInput = document.getElementById('emailInput');
const mensajeInput = document.getElementById('mensajeInput');

formularioContacto.addEventListener('submit', async (event) => {
      event.preventDefault(); // Evita el envío por defecto del formulario

    const formData = new FormData(formularioContacto);
    const data = Object.fromEntries(formData.entries()); // Convierte los datos a un objeto

    try {
        const response = await fetch(formularioContacto.action, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Indica que estás enviando JSON
            'Accept': 'application/json'       // Indica que esperas una respuesta JSON
        },
          body: JSON.stringify(data) // Convierte el objeto a una cadena JSON
        });

    if (response.ok) {
        const result = await response.json();
        // Redirigir o mostrar un mensaje de éxito
        alert('Formulario enviado exitosamente:', result);
        //Limpiamos los campos en caso de éxito
        nombreInput.value = '';
        emailInput.value = '';
        mensajeInput.value = '';
    } else {
        console.error('Error al enviar el formulario:', response.statusText);
          // Mostrar un mensaje de error
    }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
});





