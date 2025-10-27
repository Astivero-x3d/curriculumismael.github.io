/* ========================================
    FUNCIÓN: CREAR FONDO DE BINARIOS ANIMADOS
   ======================================== */
/**
 * Crea un efecto de fondo animado con columnas de binarios (0s y 1s) cayendo
 * Similar al efecto de Matrix
 */
function createBinaryBackground() {
    // Obtiene el contenedor donde se añadirán las columnas de binarios
    const container = document.getElementById('binaryBg');

    // Define cuántas columnas de binarios se crearán
    const numberOfColumns = 50;

    // Bucle para crear cada columna de binarios
    for (let i = 0; i < numberOfColumns; i++) {
        // Crea un nuevo elemento div para cada columna
        const column = document.createElement('div');
        column.className = 'binary-column';

        // Posiciona aleatoriamente cada columna horizontalmente (0% - 100%)
        column.style.left = `${Math.random() * 100}%`;
                
        // Asigna una duración de animación aleatoria entre 5 y 15 segundos
        column.style.animationDuration = `${5 + Math.random() * 10}s`;
                
        // Asigna un retraso aleatorio de inicio entre 0 y 5 segundos
        column.style.animationDelay = `${Math.random() * 5}s`;
                
        // Genera el contenido de binarios (0s y 1s) para la columna
        let binaryText = '';
        for (let j = 0; j < 20; j++) {
            // Genera aleatoriamente un 1 o un 0 (50% de probabilidad cada uno)
            binaryText += Math.random() > 0.5 ? '1' : '0';
            // Añade un salto de línea después de cada dígito
            binaryText += '<br>';
        }

        // Inserta el texto de binarios en la columna
        column.innerHTML = binaryText;

        // Añade la columna al contenedor principal
        container.appendChild(column);
    }
}

// Ejecuta la función para crear el fondo de binarios al cargar el script
createBinaryBackground();

/*  ========================================
    DATOS: ARRAY DE HABILIDADES
    ======================================== */
/**
* Array que contiene todas las habilidades técnicas
* Cada habilidad es un objeto con una propiedad 'name'
*/
const skills = [
    { name: 'Montaje y mantenimiento de equipos hardware' },
    { name: 'Instalación de sistemas operativos' },
    { name: 'Configuración de Linux' },
    { name: 'Gestión de Windows Server y Linux Server' },
    { name: 'HTML/CSS' },
    { name: 'JavaScript' },
    { name: 'Java' },
    { name: 'JPA y JSP'},
    { name: 'PHP' },
    { name: 'Angular'},
    { name: 'Node.js' },
    { name: 'MySQL' },
    { name: 'SQL' },
    { name: 'PL/SQL'},
    { name: 'Git' },
    { name: 'Github' },
    { name: 'Docker' },
    { name: 'Wordpress' },
    { name: 'Plugin de Wordpress: Elementor'},
    { name: 'React'}
];

/*  ========================================
    FUNCIÓN: GENERAR TARJETAS DE HABILIDADES DINÁMICAMENTE
    ======================================== */
/**
 * Genera dinámicamente las tarjetas de habilidades en el DOM
 * a partir del array de skills
 */

// Obtiene el contenedor donde se insertarán las tarjetas de habilidades
const skillsContainer = document.getElementById('skillsContainer');

// Itera sobre cada habilidad del array
skills.forEach(skill => {
    // Crea un nuevo elemento div para cada tarjeta de habilidad
    const skillCard = document.createElement('div');
    
    // Asigna la clase CSS para el estilo de la tarjeta
    skillCard.className = 'skill-card';
    
    // Inserta el HTML interno con el nombre de la habilidad
    skillCard.innerHTML = `
        <div class="skill-name">${skill.name}</div>
    `;
    
    // Añade la tarjeta al contenedor de habilidades
    skillsContainer.appendChild(skillCard);
});