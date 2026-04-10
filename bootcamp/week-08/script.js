// ============================================
// SEMANA 08 — PROYECTO
// Dominio: Intercambio de Habilidades
// ============================================
const DOMAIN_NAME = "Intercambio de Habilidades";
const VALUE_LABEL = "sesiones";
// ============================================
// 1. ARRAY INICIAL 
// ============================================
// Cada sesión representa una habilidad ofrecida en la plataforma.
// Propiedades: id, nombre, categoría, créditos (costo), calificación y estado activo.
const items = [
  { id: 1, name: "Introducción a Python",         category: "tecnología",  credits: 360, rating: 4.8, active: true  },
  { id: 2, name: "Fotografía para principiantes", category: "arte",        credits: 240, rating: 3.9, active: true  },
  { id: 3, name: "Conversación en inglés",         category: "idiomas",     credits: 300, rating: 4.5, active: false },
  { id: 4, name: "Diseño en Figma",                category: "tecnología",  credits: 420, rating: 4.7, active: true  },
  { id: 5, name: "Guitarra acústica básica",       category: "música",      credits: 180, rating: 4.2, active: true  },
  { id: 6, name: "Cocina italiana",                category: "gastronomía", credits: 150, rating: 3.8, active: false },
  { id: 7, name: "Excel avanzado",                 category: "tecnología",  credits: 390, rating: 4.6, active: true  },
  { id: 8, name: "Meditación y mindfulness",       category: "bienestar",   credits: 120, rating: 4.1, active: true  },
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

/**
 * Agrega una nueva sesión al inventario de la plataforma
 * @param {Object} newItem - Sesión a agregar
 */
const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Sesión agregada: ${newItem.name}`);
};

/**
 * Elimina la última sesión del inventario
 * @returns {Object} La sesión eliminada
 */
const removeLastItem = () => {
  const removed = items.pop();
  console.log(`Última sesión eliminada: ${removed.name}`);
  return removed;
};

/**
 * Agrega una sesión destacada al inicio del inventario (mayor visibilidad)
 * @param {Object} priorityItem - Sesión a destacar
 */
const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Sesión destacada agregada al inicio: ${priorityItem.name}`);
};

/**
 * Elimina una sesión por su posición en el inventario
 * @param {number} index - Posición de la sesión a eliminar
 */
const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  console.log(`Sesión eliminada de la posición ${index}: ${removed[0].name}`);
};

/**
 * Obtiene todas las sesiones activas y disponibles para tomar
 * @returns {Array} Array de sesiones activas
 */
const getActiveItems = () => {
  return items.filter((session) => session.active === true);
};

/**
 * Busca una sesión por su nombre exacto
 * @param {string} name - Nombre de la sesión a buscar
 * @returns {Object|undefined} La sesión encontrada o undefined
 */
const findByName = (name) => {
  return items.find((session) => session.name === name);
};

/**
 * Formatea una sesión para mostrar en el reporte
 * @param {Object} item - Sesión a formatear
 * @returns {string} Texto formateado con los datos clave de la sesión
 */
const formatItem = (item) => {
  const status = item.active ? "Activa" : "⏸Pausada";
  return `[${item.id}] ${item.name} — ${item.category} — ${item.credits} SC | ★ ${item.rating} | ${status}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial del inventario
console.log(`Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// Agregar una nueva sesión al final del inventario
addItem({ id: 9, name: "Tejido y bordado artesanal", category: "arte", credits: 200, rating: 4.3, active: true });

// Agregar una sesión prioritaria al inicio (destacada por la plataforma)
addPriorityItem({ id: 0, name: "Introducción al emprendimiento", category: "negocios", credits: 450, rating: 4.9, active: true });

// Eliminar una sesión del medio (posición 3: "Conversación en inglés" pausada)
removeByIndex(3);

// Eliminar la última sesión del inventario
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// Buscar una sesión específica por nombre
const found = findByName("Diseño en Figma");
console.log(`Búsqueda "Diseño en Figma": ${found ? found.name + ` (${found.credits} SC)` : "No encontrada"}`);

// Mostrar sesiones activas disponibles para tomar
const activeSessions = getActiveItems();
console.log(`\n Sesiones disponibles para tomar (${activeSessions.length}):`);
activeSessions.forEach((session) => {
  console.log(`  • ${session.name} — ${session.credits} SC`);
});

// Snapshot inmutable del inventario actual usando spread
const snapshot = [...items, { id: 99, name: "[Vista previa] Robótica básica", category: "tecnología", credits: 480, rating: 4.5, active: false }];
console.log(`\n Snapshot con sesión extra (sin modificar inventario real): ${snapshot.length} ${VALUE_LABEL}`);

console.log("\n--- Transformación con map ---\n");

// Lista de solo los nombres de las sesiones actuales
const sessionNames = items.map((session) => session.name);
console.log(" Nombres de sesiones en inventario:");
sessionNames.forEach((name) => console.log(`  • ${name}`));

// Lista de sesiones con créditos con descuento del 15% (promoción de la plataforma)
const discountedSessions = items.map((session) => ({
  name: session.name,
  originalCredits: session.credits,
  discountedCredits: +(session.credits * 0.85).toFixed(0),
}));
console.log("\n  Sesiones con 15% de descuento:");
discountedSessions.forEach((s) => {
  console.log(`  • ${s.name}: ${s.originalCredits} SC → ${s.discountedCredits} SC`);
});

console.log("\n--- Resumen final ---\n");
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);
const activeCount = getActiveItems().length;
console.log(`Activas: ${activeCount} | Pausadas: ${items.length - activeCount}`);

// Total de SkillCoins en circulación (suma de créditos de todas las sesiones activas)
const totalCredits = getActiveItems().reduce((acc, s) => acc + s.credits, 0);
console.log(`SkillCoins en circulación (sesiones activas): ${totalCredits} SC`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);