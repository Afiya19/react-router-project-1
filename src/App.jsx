import {Link, Routes, Route} from "react-router-dom"
// import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import BookList from "./components/BookList"
import Book from "./components/Book"
import NotFound from "./components/NotFound"
import NewBook from "./components/NewBook"
import BookLayout from "./BookLayout"

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
        <Route path="/books" element={<BookLayout/>}>
          <Route index element={<BookList/>}/>
          <Route path=":id" element={<Book/>}/>
          <Route path="New" element={<NewBook/>}/>
        </Route>
        {/* <Route path="/books" element={<BookList/>}/>
        <Route path="/books/:id" element={<Book/>}/> */}
        <Route path="*" element={<NotFound/>}/>
        <Route/>
      </Routes>
    </>
  )
}

export default App
