[CheatSheet](https://nerdcave.com/tailwind-cheat-sheet)
# ¿Qué es TailWind CSS? 🧐
Es un framework que permite la contrucción de diseños altamente personalizados y de bajo nivel.

Tailwind is more than a CSS framework, it’s an engine for creating design systems.

## ¿Por qué usar TailWind CSS? 🤨
A diferencia de otros frameworks css, como lo es bootstrap, que otorgan componentes prediseñados, Tailwind provee clases a bajo nivel de css que nos permiten construir diseños completamente personalizados por nostros y sin tener que pelear con el framework en sí.

Nos externa una responsividad desde la misma sintaxis.
Trabaja de manera amigable en el crecimiento de nuestro proyecto al proveernos herramientas para extraer clases.

Pero sobre todo, nos abre su código para personalizarlo ya que esta escrito en *PostCSS* y configurado en JavaScript.

# Configuración
- `npm init -y`
- `npm i tailwindcss autoprefixer postcss-cli`
- `npx tailwindcss init`
- `npx tailwindcss init tailwind.config.full.js --full`
- `touch postcss.config.js`
- - `module.exports = { plugins: [require('tailwindcss'), require('autoprefixer')], };`
- `mkdir css`
- `touch css/tailwind.css`
- - `@tailwind base; @tailwind components; @tailwind utilities;`
- `mkdir public`
- `touch public/index.html`
- `package.json`
- - `"build": "postcss css/tailwind.css -o public/css/styles.css"`
- - `"dev": "postcss css/tailwind.css -o public/css/styles.css --watch"`
- `npm i -D @fullhuman/postcss-purgecss`
- `npm i -D cssnano`

## Directivas de Tailwind
Directiva es una instrucción que utiliza tailwind para insertar código en el archivo final de css que genera.

### @tailwind base
Inicializa los estilos base de Tailwind a todos los elementos de HTML (Para eliminar/modificar todos los estilos del navegador).

### @tailwind components
Esto inyecta las clases de componentes de Tailwind.

### @tailwind utilities
Esto inyecta las clases de utilidad de Tailwind.

### @tailwind screens
Esta directiva sirve para controlar donde Tailwind inyecta las variaciones responsivas de cada utilidad. Si se omite, Tailwind añadirá estas clases al final de tu css, por defecto.

## Configuración
Las configuraciones de cada sección del archivo son opcionales.
```javascript
// tailwind.config.js
module.exports = {
  theme: {}, // aspectos relacionados con el diseño visual de nuestro sitio.
  variants: {}, // controlar el comportamiento de las utilidades core, como responsive variants y pseudo-class variants.
  plugins: [], // registrar plugins de terceros con el objetivo de extender utilidades, componentes, estilos, etc.
}
```

## Ideologías de TailwindCSS
### Responsive Web Design
La web como la conocemos, hoy en día, no es una tecnología pensando en un UX o User Experience generando, desafortunadamente, que muchos de los sitio web no estén optimizados para los dispotivos móviles.

Definido por Ethan Marcotte, es una filosofía que responde a las necediades de los usuarios y a los dispositivos que estamos usando.

### Mobile First
Como su nombre sugiere, significa que iniciaremos con el diseño de móviles y expandiendo éstas características para crear una verión en tableta o escritorio/web tradicional.

Cabe mencionar que esta filosofía no es sinónimo de limitación, por lo que tenemos que tener el mismo contenido tanto en escritorio como en móvil. Google describe las best practices en su sitio.

### Utility first
CSS posee diferentes tipos de paradigmas para abstraer un diseño, como BEM, entre otros.
Sin embargo, en utility first, se va armando el estilo a partir de clases de utilidades.
Sin embargo, llega a ser muy complicado establecer un armonía entre desarrolladores-diseñadores si no hay una concesión de sintaxis o linter. Por ello, Tailwind establece su propio orden con el objetivo:

- No invertir tiempo en inventar nombres para las clases
- Detener el crecimiento, sin fin, de CSS
- Simplificando y asegurando los cambios al CSS