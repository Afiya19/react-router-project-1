import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookList from "./components/BookList"
import Book from "./components/Book"
import NotFound from "./components/NotFound"
import NewBook from "./components/NewBook"
import BookLayout from "./BookLayout"
const BookRoutes = () => {
  return (
      <>
      <h1>BookRoutes</h1>
      <Routes>
        <Route element={<BookLayout/>}>
      <Route index element={<BookList/>}/>
          <Route path=":id" element={<Book/>}/>
          <Route path="New" element={<NewBook/>}/>
          </Route>
      </Routes>
     
    
    
    </>
  )
}

export default BookRoutes