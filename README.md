# CalidadLab

Página educativa en español sobre calidad de software, creada con **HTML, Tailwind CSS y JavaScript nativo en archivos independientes**.

## Abrir la página

Abre `index.html` directamente en un navegador moderno. La hoja de estilos de Tailwind ya está compilada y todos los recursos de la aplicación son locales: **no requiere conexión a Internet ni instalar dependencias para utilizarla**. Los enlaces a las fuentes sí requieren Internet.

También puedes servirla desde esta carpeta:

```bash
npm start
```

Abre **http://127.0.0.1:4173**. Este comando utiliza Python 3; se puede usar cualquier otro servidor de archivos estáticos.

## Archivos

| Archivo | Contenido |
| --- | --- |
| `index.html` | Estructura semántica, navegación y vistas. |
| `css/input.css` | Fuente de Tailwind y estilos propios del diseño. |
| `css/styles.css` | CSS compilado para el navegador. No editar manualmente. |
| `js/data.js` | 24 fichas con autores, fechas, descripciones, ejemplos y fuentes; preguntas de autoevaluación. |
| `js/app.js` | Búsqueda, filtros, comparación, guardados, navegación, cuestionario y controles de lectura. |
| `assets/favicon.svg` | Identidad visual local. |
| `package.json` y `package-lock.json` | Dependencias de desarrollo y comandos reproducibles. |
| `.github/workflows/pages.yml` | Compilación y publicación automática en GitHub Pages. |

## Funciones

- Panorama de los enfoques de proceso, producto y uso.
- Catálogo filtrable por enfoque y naturaleza: modelo, estándar, marco o método.
- Búsqueda por nombre, autor, año y conceptos, sin distinguir tildes o mayúsculas.
- Orden alfabético y cronológico; fichas detalladas y comparación de 2 o 3 referencias.
- Guardados en `localStorage`, sin registro ni envío de información. Si el navegador bloquea el almacenamiento, funcionan durante la sesión.
- Tabla de diferencias entre modelos y estándares, con las precisiones sobre obligatoriedad y certificación.
- Línea de tiempo filtrable y cuestionario de cinco preguntas con explicaciones, puntuación y repetición.
- Bibliografía enlazada, navegación con teclado, diálogos nativos, menú móvil y respeto de movimiento reducido.
- Diseño oscuro de alto contraste, tipografía ampliada y controles de lectura para presentaciones.

Atajos: `Ctrl+K` / `Cmd+K` o `/` abren la búsqueda. `Esc` cierra una ficha, comparación o menú móvil.

## Lectura a distancia

El diseño usa fondos azul oscuro, texto claro y acentos verdes. Los menús, botones, fichas, tablas y explicaciones tienen mayor tamaño y separación para facilitar la lectura desde lejos.

- **A− / A+** en la barra superior cambian el tamaño de lectura entre **100 %, 115 % y 130 %**. La preferencia se conserva en este navegador cuando el almacenamiento está disponible.
- **Pantalla completa** permite aprovechar la pantalla al proyectar la página. Pulsa de nuevo el control o `Esc` para salir. El botón se muestra cuando el navegador admite esta función.
- Las tarjetas ajustan sus columnas al espacio disponible. En pantallas pequeñas, el menú se abre con el botón de la esquina superior izquierda; las tablas pueden desplazarse horizontalmente dentro de su panel.

Para una presentación, selecciona **130 %** y activa **Pantalla completa**. Si ya tenías la página abierta antes del cambio de diseño, recarga con `Ctrl+F5` para actualizar los estilos.

## Modificar el diseño

Node.js 20 o posterior para las herramientas de desarrollo:

```bash
npm ci
npm run build
```

Para recompilar al editar:

```bash
npm run watch
```

Tailwind 4.1.18 genera `css/styles.css` a partir de `css/input.css`, `index.html` y los archivos JavaScript. Después de modificar clases o estilos, vuelve a compilar. No se usa el CDN de Tailwind.

## Publicar en GitHub Pages

La aplicación es estática y puede alojarse en **GitHub Pages**. Con GitHub Free se utiliza un repositorio público. [Documentación oficial de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

El flujo `.github/workflows/pages.yml` instala las dependencias, comprueba la sintaxis de JavaScript, compila Tailwind y prepara una carpeta `_site` con `index.html`, el CSS compilado, JavaScript y los recursos gráficos. Se ejecuta cuando subes cambios a `main` y también puede iniciarse manualmente. Utiliza los permisos de GitHub Actions del repositorio, sin configurar un token personal.

### Primera publicación

1. Crea un repositorio en GitHub, por ejemplo `calidadlab`. Si vas a seguir los comandos de abajo, créalo vacío, sin añadir README, licencia ni `.gitignore` desde GitHub.
2. Si esta carpeta todavía no es un repositorio Git, ejecuta estos comandos desde la carpeta del proyecto. Sustituye `TU_USUARIO` y `calidadlab` por tu usuario y el nombre real del repositorio:

   ```bash
   git init
   git add .github .gitignore README.md assets css index.html js package.json package-lock.json
   git commit -m "Crear CalidadLab y configurar GitHub Pages"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/calidadlab.git
   git push -u origin main
   ```

   Si ya tienes un repositorio con historial o un remoto `origin`, conserva esa configuración y sube estos archivos mediante tu flujo habitual. Los comandos anteriores son para un repositorio nuevo.

3. En el repositorio de GitHub abre **Settings → Pages → Build and deployment → Source** y selecciona **GitHub Actions**.
4. Ve a **Actions → Publicar CalidadLab en GitHub Pages → Run workflow**, selecciona `main` y ejecuta el flujo. Si el primer intento automático falló porque Pages aún no estaba habilitado, ejecútalo de nuevo después del paso 3.
5. Cuando el despliegue termine correctamente, abre el enlace mostrado en el trabajo de publicación o en **Settings → Pages → Visit site**.

Para el repositorio de ejemplo, la dirección tendrá esta forma:

```text
https://TU_USUARIO.github.io/calidadlab/
```

Las rutas de los recursos son relativas, por lo que funcionan dentro de la carpeta del repositorio. La navegación utiliza fragmentos como `#explorador` y no necesita reglas especiales de redirección.

### Actualizar la página

Después de editar los archivos, crea un commit y súbelo a `main`. GitHub Actions volverá a compilar y publicar automáticamente. Puedes consultar el resultado de cada ejecución en **Actions**. Los guardados pertenecen al navegador y al origen del sitio: no se transfieren desde la copia local ni entre dispositivos.

Referencia del despliegue: [flujos personalizados para GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Criterio editorial

El catálogo es una selección internacional, no un inventario exhaustivo de todas las propuestas existentes. Las fechas representan la primera publicación o un hito bibliográfico expresamente identificado en `dateNote`; no son necesariamente la última revisión. Las descripciones son síntesis didácticas propias y los ejemplos son ilustrativos.

- ISO/IEC 25010:2011 tenía 8 características de producto; la edición 2023 tiene 9. La calidad en uso se desarrolla en ISO/IEC 25019:2023.
- ISO/IEC 15504 y IEEE 830 se presentan con su contexto histórico y evolución.
- ISO/IEC 12207 y la adopción IEEE/EIA 12207 se distinguen dentro de una misma ficha; el número de edición de IEEE/EIA no coincide necesariamente con su año de publicación.
- PSP y TSP se identifican como métodos; ITIL y COBIT, como marcos. La clasificación por enfoque es didáctica y admite superposiciones.
- Un estándar puede definir un modelo. No todo estándar es obligatorio ni da lugar a certificación. ISO publica normas, pero no emite certificados.

Fuentes consultadas: 13 de octubre de 2026. Para usos formales, consultar el documento original y la edición aplicable. Los enlaces están disponibles tanto en cada ficha como en la vista «Fuentes y referencias».

## Verificación realizada

Compilación de Tailwind y comprobación de sintaxis de JavaScript. Pruebas de navegador en Chromium: apertura de las 24 fichas, filtros combinados, búsqueda, ordenación, estados vacíos, persistencia y recuperación de guardados, límite de comparación, cronología, cuestionario completo, teclado y menú móvil.

El diseño ampliado se comprobó en las siete vistas, con anchos de 320, 390, 768, 1024, 1280, 1440 y 1920 píxeles y tamaños de lectura del 100 % y 130 %: **98 combinaciones sin desbordamiento horizontal de página**. También se verificaron los tres niveles de lectura, sus límites, la persistencia tras recargar y la entrada y salida de pantalla completa. La aplicación no realizó solicitudes a recursos externos ni produjo errores de JavaScript durante estas pruebas.
