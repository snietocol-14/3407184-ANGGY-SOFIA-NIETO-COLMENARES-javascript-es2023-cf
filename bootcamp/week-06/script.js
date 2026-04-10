// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================
const sessions = [
  { name: "Introducción a Python",        category: "tecnología",  value: 360 },
  { name: "Fotografía para principiantes",category: "arte",        value: 240 },
  { name: "Conversación en inglés",        category: "idiomas",     value: 300 },
  { name: "Diseño en Figma",               category: "tecnología",  value: 420 },
  { name: "Guitarra acústica básica",      category: "música",      value: 180 },
  { name: "Cocina italiana",               category: "gastronomía", value: 150 },
  { name: "Excel avanzado",               category: "tecnología",  value: 390 },
  { name: "Francés intermedio",           category: "idiomas",     value: 270 },
  { name: "Ilustración digital",          category: "arte",        value: 330 },
  { name: "Meditación y mindfulness",     category: "bienestar",   value: 120 },
];
// Categorías de habilidades de la plataforma
const categories = [
  "tecnología",
  "arte",
  "idiomas",
  "música",
  "gastronomía",
  "bienestar",
];
// Nombre descriptivo del valor numérico
const valueLabel = "SkillCoins"; // créditos que cuesta cada sesión


// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== LISTADO COMPLETO ===");
let lineNumber = 0;

for (const item of sessions) {
  lineNumber++;
  console.log(`${lineNumber}. ${item.name} — ${item.category} — ${valueLabel}: ${item.value}`);
}
console.log("");


// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("=== CONTEO POR CATEGORÍA ===");
 
for (const category of categories) {
  let count = 0;
  for (const item of sessions) {
    if (item.category === category) count++;
  }
  console.log(`${category}: ${count} elemento(s)`);
}

console.log("");


// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================
console.log("=== ESTADÍSTICAS ===");
let totalValue = 0;

for (const item of sessions) {
  totalValue += item.value;
}
const averageValue = sessions.length > 0 ? totalValue / sessions.length : 0;
console.log(`Total ${valueLabel}: ${totalValue}`);
console.log(`Promedio ${valueLabel}: ${averageValue.toFixed(1)}`);
console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== MÁXIMO Y MÍNIMO ===");
let maxItem = sessions[0] ?? null;
let minItem = sessions[0] ?? null;

if (sessions.length > 0) {
  for (const item of sessions) {
    if (item.value > maxItem.value) maxItem = item;
    if (item.value < minItem.value) minItem = item;
  }
  console.log(`Mayor ${valueLabel}: ${maxItem?.name} (${maxItem?.value})`);
  console.log(`Menor ${valueLabel}: ${minItem?.name} (${minItem?.value})`);
}
console.log("");


// ============================================
// SECCIÓN 6: Reporte numerado con for clásico
// ============================================
console.log("=== REPORTE DETALLADO ===");

for (let i = 0; i < sessions.length; i++) {
  const item = sessions[i];
  const comparison = item.value >= averageValue ? "sobre el promedio" : "bajo el promedio";
  console.log(`${i + 1}. ${item.name} — ${item.value} ${valueLabel} — ${comparison}`);
}
console.log("");
console.log("=== FIN DEL REPORTE ===");