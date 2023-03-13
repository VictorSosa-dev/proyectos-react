import { useEffect, useState } from 'react'
import { EVENTS } from './conts.js'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

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

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
