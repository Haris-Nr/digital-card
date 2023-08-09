import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import About from './assets/About'
import Footer from './assets/Footer'
import Info from './assets/Info'
import Interests from './assets/Interests'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='digital'>
      <Info/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  )
}

export default App
