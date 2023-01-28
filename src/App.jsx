import { useState, useEffect } from 'react'
const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    //siempre ejecutar cuando se desmonta la funcionalidad y cuanfda cambian las dependencias antes de ejecutar el efecto
    return (() => {
      window.removeEventListener('pointermove', handleMove)
    })
  }, [enabled])

  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: '0.8',
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px,${position.y}px)`
        }
        }
      />
      <button
        onClick={() => setEnabled(!enabled)}
      >{enabled ? 'Desactivar' : 'Activar'} Seguir Puntero</button>
    </>
  )
}

function App() {
  const [mouted,setMouted]=useState(true)
  return (
    <main>
      {mouted && <FollowMouse/>}
      
      <button
        onClick={()=>setMouted(!mouted)}
      >remove the useEffect</button>

    </main>
  )

}

export default App
