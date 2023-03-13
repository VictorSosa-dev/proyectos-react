# Crea un React Router desde cero

- [x] Instalar el linter
- [x] Crear una forma de hacer MPAs (Multiple Page Application)
- [x] Crea una forma de hacer SPAs (Single Page Applications)
- [x] Poder navegar entre páginas con el botón de atrás
- [x] Crear componente Link para hacerlo declarativo
- [x] Crear componente Router para hacerlo más declarativo
- [x] Soportar ruta por defecto (404)
- [x] Soportar rutas con parámetros
- [x] Componente <Route /> para hacerlo declarativo
- [x] Lazy Loading de las rutas
- [x] Hacer un i18n con las rutas
- [] Testing
- [] Publicar el paquete en NPM

## Lo aprendido

window.history.pushState({}, '', href)
Es un un objeto que tiene 3 propiedades, state, title y url. El state es un objeto que se puede usar para guardar información, el title es el título de la página y el url es la url de la página. El primer parámetro es un objeto vacío, el segundo es el título de la página y el tercero es la url de la página. Este método no hace un refresh de la página, solo cambia la url.
