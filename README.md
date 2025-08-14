# 🎮 acePlay — E-commerce de videojuegos (React)

Tienda web de videojuegos con catálogo, categorías, favoritos, carrito, checkout y listado de pedidos.  
La interfaz es **100% responsive** (mobile-first) manteniendo la estética gamer y la paleta original.

---

## ✨ Características

- **Catálogo** con paginación y ficha de cada juego.
- **Categorías** (géneros) y resultados filtrados.
- **Favoritos** y **Carrito** (gestión de items, totales).
- **Checkout** con confirmación de compra.
- **Historial de pedidos**.
- **Navbar** con menú **hamburguesa** en mobile.
- Estilos con **SCSS** (mixins, `clamp()`, media queries semánticas).
- Cambios documentados con comentarios `MEJORAS - ...`.

---

## 🧰 Stack

- **React 18**, **React Router DOM 6**
- **Context API** (Favorites, Cart, Tickets)
- **SCSS** modular (parciales en `scss/base`, `scss/components`, `scss/pages`)
- **Bootstrap Icons**
- CRA (**react-scripts**)

---

## 📂 Estructura (resumen)

```
src/
  components/
    NavBar/
      Navbar.jsx
      FavCartWidget.jsx
    Footer.jsx
    juegos/
      JuegoItem.jsx
      JuegoData.jsx
  pages/
    Home.jsx
    Juegos.jsx
    Categorias.jsx
    Lanzamientos.jsx
    Favoritos.jsx
    Carrito.jsx
    Checkout.jsx
    Orders.jsx
    GenreResults.jsx
    index.js
  scss/
    base/
      reset.scss
      utilities.scss
      onWorkingPage.scss
    components/
      Navbar.scss
      Footer.scss
    pages/
      Inicio.scss
      Juegos.scss
      Categorias.scss
      Lanzamientos.scss
      Favoritos.scss
      Carrito.scss
      Checkout.scss
      DataJuego.scss
      Results.scss
      Orders.scss
    styles.scss
  App.jsx
  index.js
```

---

## 🚀 Puesta en marcha

### Requisitos
- Node 18+ recomendado
- NPM 8+ / Yarn / PNPM

### Instalación
```bash
npm install
# o
yarn
```

### Desarrollo
```bash
npm start
```
La app corre en `http://localhost:3000`.

### Build de producción
```bash
npm run build
```

### Tests
```bash
npm test
```

---

## 🎨 Estilos & Responsive (SCSS)

El entry principal de estilos es `src/scss/styles.scss`.

> **Recomendado**: importar SCSS directamente en la app.
```jsx
// en App.jsx
// import './css/App.css';  // si existe, desactivarlo
import './scss/styles.scss'; // usar fuente SCSS
```

Instalá Sass si aún no lo tenés:
```bash
npm i -D sass
```

### Mixins clave (`src/scss/base/utilities.scss`)
- `@mixin mq(xs|sm|md|lg|xl)` → media queries semánticas.
- `@mixin container-max($max:1200px, $pad:1rem)` → contenedor fluido centrado.
- `@mixin fluid-type($min,$max)` → tipografía fluida con `clamp()`.

### Cambios responsive aplicados
- Sustitución de `width: 1200px;` por:
  ```scss
  /* MEJORAS - contenedor fluido */
  @include container-max(1200px, 1rem);
  ```
- Rejillas de tarjetas escalables:
  ```scss
  /* MEJORAS - ancho responsive por breakpoint */
  width: calc(50% - 10px);
  @include mq(md) { width: calc(33.333% - 10px); }
  @include mq(lg) { width: calc(25% - 10px); }
  @include mq(xl) { width: calc(20% - 10px); }
  ```
- **Navbar mobile**: botón hamburguesa + drawer lateral (`components/Navbar.scss`).

---

## ♿ Accesibilidad

- Botones y links con tamaño táctil adecuado.
- Recomendado usar `:focus-visible` para navegación con teclado.
- Contraste mantenido en fondos oscuros.

---

## 🧠 Estado global (Contexts)

- `FavoritesProvider` → favoritos.
- `CartProvider` → carrito (items, totales, acciones).
- `TicketsProvider` → gestión de pedidos / tickets.

---

## 🗺️ Rutas principales

- `/` → Home  
- `/lanzamientos`  
- `/categorias`  
- `/juegos/page/:page`  
- `/categorias/page/:page/:query`  
- `/juegos/page/:page/juego/:id`  
- `/favoritos`  
- `/carrito`  
- `/checkout`  
- `/pedidos`

---

## 🔌 Datos / APIs

El proyecto está listo para integrar datos externos (p. ej., APIs de juegos).  
Si añadís servicios (RAWG, Firebase, etc.), definí tus **variables de entorno**.

### Variables de entorno (ejemplo)
Crea un archivo `.env` (no lo subas al repo):

```
REACT_APP_API_BASE_URL=https://...
REACT_APP_API_KEY=xxxxxxxx
```

---

## 📦 Scripts (package.json)

```json
{
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

---

## 🧭 Roadmap (ideas)

- Búsqueda por texto y filtros avanzados.
- Paginación mejorada (1…N) o “infinite scroll”.
- Persistencia en `localStorage` / backend real.
- Autenticación y perfil de usuario.
- Integración con pasarela de pago (sandbox).

---

## 📝 Licencia

Proyecto de portafolio / educativo. Podés usarlo y adaptarlo libremente (MIT sugerida).

---

## 🙌 Créditos

- UI & Dev: **acePlay**
- Iconografía: **Bootstrap Icons**
- Tipografías: Audiowide / Inter / Poppins / Nunito / Rubik.
