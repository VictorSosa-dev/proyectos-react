import { useEffect, useState } from 'react'
import './App.css'

function FollowMouse(params) {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Pointer move
  useEffect(() => {
    // console.log('efecto', { enable })
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    // suscribirse a eventos
    if (enable) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    // cleanup
    // --> cuando el componente se desmonta
    // --> cuando las dependencias cambian
    // antes de ejecutar el efecto de nuevo
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [enable])

  // [] --> solo se ejecuta una vez
  // [enable] --> se ejecuta cuando enable cambia y cuando se monta el componente
  // undefined --> se ejecuta cada vez que se renderiza el componente

  // change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enable)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enable])

  return (
    <>
      <h1>Proyecto 3</h1>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setEnable(!enable)}>
        {enable ? 'Desactivar' : 'Activar'}
      </button>
    </>
  )
}
function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
