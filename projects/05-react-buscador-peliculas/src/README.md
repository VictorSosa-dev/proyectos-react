## Enunciado

Crea una aplicación para buscar películas

http://www.omdbapi.com/?apikey=[yourkey]&s=[movie]
API a usar: - https://www.omdbapi.com/
Consigue la API Key en la propia página web registrando tu email.

Requerimientos:

✅ ✅ Necesita mostrar un input para buscar la película y un botón para buscar.

✅ ✅ Lista las películas y muestra el título, año y poster.

✅ ✅ Que el formulario funcione

✅ ✅ Haz que las películas se muestren en un grid responsive.

✅ ✅ Hacer el fetching de datos a la API

Primera iteración:

✅ ✅ Evitar que se haga la misma búsqueda dos veces seguidas.

✅ ✅ Haz que la búsqueda se haga automáticamente al escribir.

✅ ✅ Evita que se haga la búsqueda continuamente al escribir (debounce)

## Nuevos temas

useRef es un hook que nos permite crear una referencia mutable que no va a causar un re-renderizado del componente
en este caso, la referencia mutable es el input

### Uso de useRef

- Ferencia del Dom
- para ver si es la primera vez que se renderiza el componente
- obtener el valor anterior de una variable

### useMemo

- Permite memorizar un valor
- medir un valor

### useCallback

- Permite memorizar una función
- simplifica la sintaxis de useMemo
- solo se utiliza para funciones

### race condition

- Es un problema que ocurre cuando dos o más procesos intentan acceder a un recurso compartido al mismo tiempo
