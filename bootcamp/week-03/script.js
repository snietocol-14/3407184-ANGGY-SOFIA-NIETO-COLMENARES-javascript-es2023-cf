const initialCredits = 500;
const feePerHour = 120;
const platformFeePercent = 10;
const maxHoursPerSession = 8;
const minCreditsForPremium = 1_000;
const expertBadgeThreshold = 5_000;
const totalActiveUsers = 3_200;
const maxConcurrentSessions = 1_500;

// --- CÁLCULOS ARITMÉTICOS ---
// Costo de una sesión de 3 horas de programación
const sessionHours = 3;
const sessionCost = feePerHour * sessionHours;
console.log("Costo de sesión (3h de programación):", sessionCost, "SkillCoins");
// Comisión que cobra la plataforma por esa sesión
const platformFee = (sessionCost * platformFeePercent) / 100;
console.log("Comisión de la plataforma:", platformFee, "SkillCoins");
// Lo que realmente recibe el instructor después de la comisión
const instructorEarnings = sessionCost - platformFee;
console.log("Ganancias del instructor:", instructorEarnings, "SkillCoins");
// Promedio de créditos generados por usuario activo en la plataforma
const totalCreditsGenerated = 1_280_000;
const avgCreditsPerUser = totalCreditsGenerated / totalActiveUsers;
console.log("Promedio de créditos por usuario:", avgCreditsPerUser.toFixed(2), "SkillCoins");
// Sesiones simultáneas disponibles (capacidad restante)
const activeSessions = 870;
const availableSessions = maxConcurrentSessions - activeSessions;
console.log("Sesiones disponibles ahora:", availableSessions);
// Resto de horas no usadas en una sesión parcial de 5h sobre máximo de 8h
const usedHours = 5;
const remainingHours = maxHoursPerSession % usedHours;
console.log("Horas restantes del bloque de sesión:", remainingHours, "h");

// --- OPERADORES DE ASIGNACIÓN COMPUESTA ---
// Saldo inicial de un usuario llamado Alex
let alexBalance = initialCredits;
console.log("\nSaldo inicial de Alex:", alexBalance, "SkillCoins");
// Alex enseña diseño gráfico por 2 horas y gana créditos
const designSessionEarnings = feePerHour * 2;
alexBalance += designSessionEarnings;
console.log("Después de enseñar diseño (2h):", alexBalance, "SkillCoins");
// Alex toma una clase de fotografía de 1 hora
const photoSessionCost = feePerHour * 1;
alexBalance -= photoSessionCost;
console.log("Después de tomar fotografía (1h):", alexBalance, "SkillCoins");
// Bono de bienvenida: sus créditos se duplican por promoción del mes
alexBalance *= 2;
console.log("Después del bono x2 de bienvenida:", alexBalance, "SkillCoins");
// La plataforma aplica una tarifa de mantenimiento mensual del 5%
alexBalance /= 1.05;
console.log("Después de tarifa de mantenimiento:", alexBalance.toFixed(2), "SkillCoins");

// --- COMPARACIÓN ESTRICTA (===, !==, >=, <=, >, <) ---
// Verificar si el tipo de saldo es numérico antes de operar
const isBalanceNumeric = typeof alexBalance === "number";
console.log("\n¿El saldo de Alex es de tipo number?", isBalanceNumeric);
// Verificar si Alex tiene exactamente el saldo inicial (no debería)
const hasInitialBalance = alexBalance === initialCredits;
console.log("¿Alex tiene exactamente el saldo inicial?", hasInitialBalance);
// Verificar si Alex puede publicar una habilidad premium
const canPublishPremium = alexBalance >= minCreditsForPremium;
console.log("¿Alex puede publicar habilidad premium?", canPublishPremium);
// Verificar si la sesión de diseño duró menos del máximo permitido
const designHours = 2;
const sessionWithinLimit = designHours <= maxHoursPerSession;
console.log("¿La sesión de diseño está dentro del límite?", sessionWithinLimit);
// Verificar si hay más sesiones activas que disponibles
const moreActiveThanAvailable = activeSessions !== availableSessions;
console.log("¿Activas y disponibles son distintas?", moreActiveThanAvailable);

// --- OPERADORES LÓGICOS (&&, ||, !) ---
// Alex obtiene descuento si tiene más de 300 créditos Y lleva más de 3 sesiones completadas
const alexCompletedSessions = 5;
const alexHasDiscount = alexBalance > 300 && alexCompletedSessions > 3;
console.log("\n¿Alex obtiene descuento por fidelidad?", alexHasDiscount);
// Un usuario puede enseñar si tiene certificación O más de 10 sesiones dadas
const alexHasCertification = false;
const alexTaughtSessions = 12;
const canTeach = alexHasCertification || alexTaughtSessions > 10;
console.log("¿Alex puede enseñar en la plataforma?", canTeach);
// Verificar si Alex NO tiene la insignia de experto aún
const hasExpertBadge = alexBalance >= expertBadgeThreshold;
const notExpertYet = !hasExpertBadge;
console.log("¿Alex aún no es experto?", notExpertYet);
// Una sesión es válida si: está dentro del límite de horas Y hay sesiones disponibles Y el usuario puede enseñar
const sessionIsValid = sessionWithinLimit && availableSessions > 0 && canTeach;
console.log("¿La sesión es válida para iniciarse?", sessionIsValid);
// Alerta si la plataforma está casi llena (más del 90% de capacidad usada) O si no hay sesiones disponibles
const occupancyRate = activeSessions / maxConcurrentSessions;
const platformAlert = occupancyRate > 0.9 || availableSessions === 0;
console.log("¿Alerta de capacidad en la plataforma?", platformAlert);

// --- RESUMEN FINAL ---
console.log("\n===== RESUMEN DE LA PLATAFORMA =====");
console.log("Usuarios activos:", totalActiveUsers);
console.log("Sesiones en curso:", activeSessions);
console.log("Sesiones disponibles:", availableSessions);
console.log("Saldo final de Alex:", alexBalance.toFixed(2), "SkillCoins");
console.log("¿Alex puede publicar premium?", canPublishPremium);
console.log("¿Sesión válida para iniciar?", sessionIsValid);
console.log("====================================");
