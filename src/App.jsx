import {Link, Routes, Route} from "react-router-dom"
// import './App.css'
import Home from "./components/Home"
import About from "./components/About"

function App() {

  return (
    <>
    <nav>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route/>
        <Route/>
      </Routes>
    </>
  )
}

export default App
