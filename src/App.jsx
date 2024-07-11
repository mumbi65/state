import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './components/component1'

export const NameContext = createContext()

function App() {
  const [name, setname] = useState("Mumbi")

  return (
    <>
    <h1>APP</h1>
    <button onClick={() =>setname('Tiff')}>Change Name</button>
    <NameContext.Provider value={[name, setname]}>
    <Component1 />
    </NameContext.Provider>
    
    </>
  )
}

export default App
