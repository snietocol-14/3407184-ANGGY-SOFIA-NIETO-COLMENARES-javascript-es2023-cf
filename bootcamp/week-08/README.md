##  Dominio: Intercambio de Habilidades

Esta aplicación de intercambio de habilidades es una plataforma donde los usuarios ofrecen y solicitan sesiones de aprendizaje a cambio de créditos virtuales llamados SkillCoins (SC). Cada sesión representa una habilidad que un instructor pone a disposición de la comunidad. Las sesiones tienen una categoría, un costo en SkillCoins, una calificación promedio y un estado (activa o pausada).

---

## Operaciones implementadas

- **`push`** — agrega una nueva sesión al catálogo
- **`unshift`** — destaca una sesión colocándola al inicio del catálogo
- **`splice`** — elimina una sesión por su posición
- **`pop`** — elimina la última sesión del catálogo
- **`filter`** — obtiene solo las sesiones activas y disponibles
- **`find`** — busca una sesión por su nombre exacto
- **`forEach`** — recorre e imprime el catálogo en pantalla
- **`map`** — transforma los datos (lista de nombres, precios con descuento)
- **Spread `...`** — genera un snapshot inmutable del catálogo sin modificar el original

---

## Estructura del proyecto

```
week-08/
├── README.md       ← este archivo
└── script.js       ← script principal del proyecto

```

---

# Cómo ejecutarlo

```bash
node week-08/script.js
```
