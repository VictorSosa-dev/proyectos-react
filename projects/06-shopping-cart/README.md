# Enunciado

Ecommerce

- [x] Muestra una lista de productos que vienen de un JSON
- [x] Añade un filtro por categoría
- [x] Añade un filtro por precio

Haz uso de useContext para evitar pasar props innecesarias.

Carrito:

- [x] Haz que se puedan añadir los productos a un carrito.
- [x] Haz que se puedan eliminar los productos del carrito.
- [x] Haz que se puedan modificar la cantidad de productos del carrito.
- [x] Sincroniza los cambios del carrito con la lista de productos.
- [x] Guarda en un localStorage el carrito para que se recupere al recargar la página. (da puntos)

## Cosas aprendidas

Cuando se pasen las props entre componentes
se puede usar la composición de componentes
para evitar taladrar los hijos con props
Se puede usar los children para pasar los props a los componentes

- [x] Uso de context
      Se usa para crear estados globales
      que cambian pocas veces como,
      el tema, el idioma, el carrito de la compra
  1. Crear el contexto
  2. Proveer el contexto
  3. Consumir el contexto
- [ ]
- [ ] UseReducer
      Se usa cuando el estado se esta seteando muchas veces
      y se quiere tener un control de los cambios
- [ ] UseId
      crea un identificador único

- [ ] Tener solo una fuente de la verdad
      para el estado global
