// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: Intercambio de Habilidades
// ============================================

"use strict"; // modo estricto

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

// Comisión que cobra la plataforma por cada sesión completada
const PLATFORM_FEE_PCT  = 10;
const DOMAIN_NAME       = "Intercambio de Habilidades";
const VALUE_LABEL       = "SkillCoins";
// Calificación mínima para que una sesión sea considerada de calidad
const MIN_RATING        = 4.0;
// Créditos mínimos para que una sesión se publique como premium
const MIN_CREDITS_PREMIUM = 300;

// Sesiones registradas en la plataforma
const items = [
  { id: 1, name: "Introducción a Python",         category: "tecnología",  value: 360, rating: 4.8, active: true  },
  { id: 2, name: "Fotografía para principiantes", category: "arte",        value: 240, rating: 3.9, active: true  },
  { id: 3, name: "Conversación en inglés",         category: "idiomas",     value: 300, rating: 4.5, active: false },
  { id: 4, name: "Diseño en Figma",                category: "tecnología",  value: 420, rating: 4.7, active: true  },
  { id: 5, name: "Guitarra acústica básica",       category: "música",      value: 180, rating: 4.2, active: true  },
  { id: 6, name: "Cocina italiana",                category: "gastronomía", value: 150, rating: 3.8, active: false },
  { id: 7, name: "Excel avanzado",                 category: "tecnología",  value: 390, rating: 4.6, active: true  },
  { id: 8, name: "Meditación y mindfulness",       category: "bienestar",   value: 120, rating: 4.1, active: true  },
];

// ============================================
// SECCIÓN 2: Función de formato (arrow function)
// ============================================

// Recibe una sesión y devuelve una ficha legible para mostrar en pantalla.
// Incluye categoría, nombre, costo en SkillCoins, calificación y estado.
const formatItem = (session) => {
  const status = session.active ? "Activa" : "Pausada";
  const tier   = session.value >= MIN_CREDITS_PREMIUM ? "Premium" : "Estándar";
  return `[${session.category.toUpperCase()}] ${session.name} — ${session.value} ${VALUE_LABEL} | ★ ${session.rating} | ${tier} | ${status}`;
};

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// Calcula el costo real que paga el estudiante por una sesión,
// sumando la comisión de la plataforma al precio base.
// factor = porcentaje de comisión (por defecto usa la constante global)
const calculateValue = (baseValue, factor = PLATFORM_FEE_PCT) => {
  const platformFee = (baseValue * factor) / 100;
  return baseValue + platformFee;
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// Una sesión está disponible para ser tomada si está marcada como activa por el 
// instructor y su calificación supera el mínimo de calidad de la plataforma
const isValid = (session) => {
  return session.active === true && session.rating >= MIN_RATING;
};

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

// Formatea un monto de SkillCoins con etiqueta y unidad configurables.
// Si no se pasan argumentos opcionales, usa los valores por defecto del dominio.
const formatWithDefault = (value, label = VALUE_LABEL, currency = "SC") => {
  return currency
    ? `${label}: ${value.toFixed(2)} ${currency}`
    : `${label}: ${value.toFixed(2)}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(55)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(55)}`);

if (items.length === 0) {
  console.log("\n  No hay sesiones registradas en la plataforma.");
} else {
  console.log("\n Sesiones registradas en la plataforma:\n");
  let lineNumber = 1;
  for (const session of items) {
    console.log(`  ${lineNumber}. ${formatItem(session)}`);
    lineNumber++;
  }

  // Sesiones disponibles para tomar
  console.log("\n Sesiones disponibles para tomar:\n");
  let availableCount = 0;
  for (const session of items) {
    if (isValid(session)) {
      availableCount++;
      console.log(`  • ${session.name} — ${session.value} ${VALUE_LABEL}`);
    }
  }
  console.log(`\n  Total disponibles: ${availableCount} / ${items.length} sesiones`);

  // Costo total que pagaría un estudiante por todas las sesiones activas
  // Se usa calculateValue() para sumar el costo con comisión incluida
  let totalCostForStudent = 0;
  for (const session of items) {
    if (isValid(session)) {
      totalCostForStudent += calculateValue(session.value ?? 0);
    }
  }
  console.log(`\n Resumen financiero:`);
  console.log(`  ${formatWithDefault(totalCostForStudent, "Costo total (sesiones disponibles, con comisión")}`);

  // Promedio de créditos por sesión disponible
  const avgCost = availableCount > 0 ? totalCostForStudent / availableCount : 0;
  console.log(`  ${formatWithDefault(avgCost, "Promedio por sesión disponible")}`);

  // Sesiones no disponibles
  console.log("\n  Sesiones no disponibles:\n");
  for (const session of items) {
    if (!isValid(session)) {
      const reason = !session.active
        ? "pausada por el instructor"
        : `calificación insuficiente (${session.rating} / mínimo ${MIN_RATING})`;
      console.log(`  • ${session.name} — ${reason}`);
    }
  }
}

console.log(`\n${"═".repeat(55)}\n`);