# Aliester Landing

Landing page oficial de **Aliester**, pensada para presentar el producto durante el hackathon con una estética **product-tech premium** y una narrativa enfocada en claridad, atención y organización personal.

## Qué comunica esta landing

- **Aliester** como centro de operaciones personal
- el **asistente** como principal diferenciador
- módulos integrados para finanzas, tareas, calendario, notas y suscripciones
- screenshots reales del producto para demostrar que ya existe una base funcional

## Stack

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **lucide-react**

## Correr localmente

```bash
npm install
npm run dev
```

Abrir en:

```text
http://localhost:3000
```

## Scripts útiles

```bash
npm run dev
npm run build
npm run lint
```

## Estructura relevante

```text
app/
  globals.css   -> sistema visual y estilos globales
  layout.tsx    -> layout base y metadata
  page.tsx      -> composición completa de la landing

public/screenshots/
  -> capturas reales del producto usadas en la página
```

## Dirección visual

- negro cálido: `#201f1d`
- beige claro: `#efebea`
- acento cálido restringido para resaltar CTAs, badges y puntos clave

La intención es que la landing se sienta moderna, sobria y premium, alineada con la identidad visual de la app principal.

## Estado actual

- hero orientado a claridad y atención priorizada
- sección del asistente como hook principal del producto
- screenshots reales integrados
- composición pensada para demo/pitch de hackathon

## Pendiente / siguiente paso

- conectar CTAs a URLs reales
- pulir copy final para pitch/demo
- preparar deployment público si se necesita mostrar fuera del entorno local
