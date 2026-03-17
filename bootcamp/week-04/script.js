const DOMAIN_NAME = "Intercambio de Habilidades";
const rawEntityName = "  Pepo Pérez  ";
const entityCategory = "Tecnología - Nivel intermedio";
const entityCode = "USR-001";
const entityDescription = "Pepo Pérez es un usuario activo en la plataforma de intercambio de habilidades, especializado en programación. Tiene una reputación positiva entre los demás usuarios.";
const hoursAvailablePerWeek = 8;
const isAvailableNow = true;

const entityName = rawEntityName.trim();
const entityNameUpper = entityName.toUpperCase();
const entityNameLower = entityName.toLowerCase();
const codePrefix = entityCode.slice(0, 3);
const hasValidPrefix = entityCode.startsWith(codePrefix);
const descriptionIsRelevant = entityDescription.includes("habilidades");
const hasValidSuffix = entityCode.endsWith("001");

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);

const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE USUARIO
${separator}
Nombre del usuario:               ${entityName}
Nombre en mayúsculas:             ${entityNameUpper}
Nombre en minúsculas:             ${entityNameLower}
Categoría:                        ${entityCategory}
Código:                           ${entityCode}
Prefijo:                          ${codePrefix}
Horas disponibles por semana:     ${hoursAvailablePerWeek}
Disponible:                       ${isAvailableNow ? "Sí" : "No"}

${subSeparator}
Descripción:
${entityDescription}
${separator}
`;

console.log(mainCard);

console.log("--- Validaciones ---");
console.log(`¿Código empieza con '${codePrefix}'?: ${hasValidPrefix}`);
console.log(`¿Descripción contiene 'habilidades'?: ${descriptionIsRelevant}`);
console.log(`¿Código termina con '001'?: ${hasValidSuffix}`);
console.log("");

console.log("--- Notificación ---");
const notification = `📢 ${entityName} (${entityCode} se ha conectado)`;
console.log(notification);
console.log("");