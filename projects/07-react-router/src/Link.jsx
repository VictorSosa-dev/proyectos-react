import { EVENTS, BOTON } from './consts'

export function navigate (href) {
  // Cambiar la URL
  window.history.pushState({}, '', href)
  // Crear evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  // Disparar el evento
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (e) => {

    // Validaciones
    const isMainEvent = e.button === BOTON.primary // primary click
    const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && !isModifiedEvent && isManageableEvent) {
      e.preventDefault()
      navigate(to) // navegacion con SPA

    }
  }

  return <a onClick={ handleClick } href={ to } target={ target } { ...props } />
}
