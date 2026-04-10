// ============================================================
// CLASIFICADOR DE INTERCAMBIO DE HABILIDADES
// Sistema que clasifica usuarios y sesiones de la plataforma
// donde se intercambian habilidades por SkillCoins
// ============================================================

// ==========================================================
// SECCIÓN 1: Datos del elemento (usuario de la plataforma)
// ==========================================================
const userName = "María López";
const userCredits = 1_850;          // SkillCoins acumulados
const userCategory = "diseño";      // categoría principal de habilidad
const completedSessions = 14;       // sesiones completadas como instructor
const userRating = 4.7;             // calificación promedio (sobre 5.0)

// perfil extendido que puede no existir en todos los usuarios
const userProfile = {
  badge: "verificado",
  location: {
    city: "Bogotá",
  },
};
// usuario sin perfil extendido
const newUser = null;


// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================
// el sistema clasifica al usuario según los SkillCoins acumulados (los créditos)
let creditLevel;

if (userCredits >= 5_000) {
  creditLevel = "Élite";
} else if (userCredits >= 2_000) {
  creditLevel = "Avanzado";
} else if (userCredits >= 500) {
  creditLevel = "Intermedio";
} else {
  creditLevel = "Principiante";
}

console.log(`Nivel de créditos de ${userName}: ${creditLevel}`);

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================
// determina si el usuario está activo (tiene sesiones recientes)
const isActive = completedSessions > 0 ? "Activo" : "Inactivo";
console.log(`Estado del usuario: ${isActive}`);
// Determina si la calificación es suficiente para enseñar
const canTeach = userRating >= 4.0 ? "Habilitado para enseñar" : "No habilitado";
console.log(`Permiso de enseñanza: ${canTeach}`);


// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================
// clasifica al usuario según su categoría principal
let skillArea;

switch (userCategory) {
  case "programación":
    skillArea = "Tecnología y Desarrollo";
    break;
  case "diseño":
    skillArea = "Artes Visuales y Creativas";
    break;
  case "música":
    skillArea = "Artes Escénicas";
    break;
  case "idiomas":
    skillArea = "Comunicación y Lenguaje";
    break;
  case "cocina":
    skillArea = "Gastronomía y Bienestar";
    break;
  default:
    skillArea = "Categoría General";
}

console.log(`Área de habilidad: ${skillArea}`);


// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================
// Si el usuario no tiene insignia, se asigna una por defecto
const badgeLabel = newUser?.badge ?? "Sin insignia";
console.log(`Insignia del nuevo usuario: ${badgeLabel}`);
// Si el usuario registrado no tiene ciudad, se usa un valor por defecto
const displayCity = userProfile?.location?.city ?? "Ciudad no registrada";
console.log(`Ciudad de ${userName}: ${displayCity}`);


// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================
// Accede a propiedades anidadas de forma segura
const badgeStatus = userProfile?.badge;
console.log(`Estado de insignia: ${badgeStatus}`);
// Intento seguro sobre un usuario nulo (no lanza error)
const newUserCity = newUser?.location?.city;
console.log(`Ciudad del nuevo usuario: ${newUserCity}`);  // undefined


// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

// TODO: Muestra la ficha en consola con template literals (sin concatenación +)
// Incluye todos los resultados de las secciones anteriores

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN DE USUARIO");
console.log("=".repeat(40));
console.log(`
Nombre         : ${userName}
Categoría      : ${userCategory} → ${skillArea}
SkillCoins     : ${userCredits}
Nivel          : ${creditLevel}
Estado         : ${isActive}
Calificación   : ${userRating} / 5.0
Enseñanza      : ${canTeach}
Insignia       : ${badgeStatus ?? "Sin insignia"}
Ciudad         : ${displayCity}
========================================
`);
