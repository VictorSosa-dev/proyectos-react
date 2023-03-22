import { useEffect, useState, Children } from 'react'
import { match } from 'path-to-regexp'
import { EVENTS } from './consts.js'
import { getCurrentPath } from './utils.js'

export function Router({
  children,
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>
}) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath())

  useEffect(() => {
    // Callback que se ejecutará cuando se dispare el evento
    const handleNavigate = () => {
      setCurrentPath(window.location.pathname)
    }

    // Escuchar el evento personalizado
    window.addEventListener(EVENTS.PUSHSTATE, handleNavigate)

    // Evento de retorno
    window.addEventListener(EVENTS.PUSHSTATE, handleNavigate)

    // Limpiar el evento
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, handleNavigate)
      window.removeEventListener(EVENTS.POPSTATE, handleNavigate)
    }
  }, [])

  let routeParams = {}

  // add routes from children
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'

    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

  // Buscar la ruta actual en el array de rutas
  // hemos usado path-to-regexp para poder detectar
  // rutas dinámicas como por ejemplo
  // /search/:query <- :query es una ruta dinámica
  const Pages = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)

    if (!matched) return false
    // guardar los parámetros de la url que era dinámicas
    // y que hemos extraído con path-to-regexp
    // por ejemplo si la ruta es /search/:query
    // y la url es /search/react
    // matched.params.query === 'react'
    routeParams = matched.params // { query: 'react' } // search: '?query=react'
    return true
  })?.Component

  return Pages ? (
    <Pages routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  )
}
