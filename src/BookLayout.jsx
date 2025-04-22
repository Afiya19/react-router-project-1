import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const BookLayout = () => {
  const [number, setNumber] = useState(3);
  return (
    <>
    <h1>BookLayout</h1>
    <Link to="/books/1">Book 1</Link>
    <br/>
    <Link to="/books/2">Book 2</Link>
    <br/>
    <Link to={`/books/${number}`}>Book {number}</Link>
    <Link to="/books/new"> New Book</Link>
    <Outlet context={{obj:{ hello : "world"}}}/>

    <input
    type="number"
    value={number}
    onChange={e=>setNumber(e.target.value)}
    
    />
    
    </>
  )
}

export default BookLayout