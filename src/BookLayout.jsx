import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const BookLayout = () => {
  return (
    <>
    <h1>BookLayout</h1>
    <Link to="/books/1">Book 1</Link>
    <br/>
    <Link to="/books/2">Book 2</Link>
    <br/>
    <Link to="/books/new"> New Book</Link>
    <Outlet/>
    
    </>
  )
}

export default BookLayout