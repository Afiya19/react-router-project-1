import {Link, Routes, Route, useRoutes} from "react-router-dom"
// import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import BookList from "./components/BookList"
import Book from "./components/Book"
import NotFound from "./components/NotFound"
import NewBook from "./components/NewBook"
import BookLayout from "./BookLayout"
import BookRoutes from "./BookRoutes"

function App() {
  let element = useRoutes([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"*",
      element:<NotFound/>
    },
    {
      path:"/about",
      element:<About/>
    }
  ])

  return (
    <>
    {element}
    <Routes location={{ pathname: "/books/2" }}>
      <Route path="/books/:id" element={<h1>Extra Content</h1>}/>
    </Routes>
    <nav>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </nav>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        {/* <Route path="/about" element={<About/>}/> */}
        <Route path="/books/*" element={<BookRoutes/>}>
       
        </Route>
        {/* <Route path="/books" element={<BookList/>}/>
        <Route path="/books/:id" element={<Book/>}/> */}
        {/* <Route path="*" element={<NotFound/>}/> */}
        <Route/>
      </Routes>
    </>
  )
}

export default App
