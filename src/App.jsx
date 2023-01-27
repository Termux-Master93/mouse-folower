import { useState,useEffect } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false)
  useEffect(()=>{
    console.log("efect",{enabled})
  },[enabled])

  return (
    <>
      <p>Mosue Follower</p>
      <button
        onClick={()=>setEnabled(!enabled)}
      >{enabled ? 'Desactivar' : 'Activar'} Seguir Puntero</button>
    </>
  )
}

export default App
