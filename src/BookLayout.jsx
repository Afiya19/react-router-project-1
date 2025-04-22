import React, { useState } from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

const BookLayout = () => {
  // const [number, setNumber] = useState(3);
  const [searchParams, setSearchParams]=useSearchParams({n:3});
  const number = searchParams.get("n");
  return (
    <>
    <h1>BookLayout</h1>
    <Link to="/books/1">Book 1</Link>
    <br/>
    <Link to="/books/2">Book 2</Link>
    <br/>
    {/* <Link to={`/books/${number}`}>Book {number}</Link> */}
    <Link to={`/books/${number}`}>Book {number}</Link>
    <Link to="/books/new"> New Book</Link>
    <Outlet context={{obj:{ hello : "world"}}}/>

    {/* <input
    type="number"
    value={number}
    onChange={e=>setNumber(e.target.value)}
    
    /> */}
    <input
    type="number"
    value={number}
    onChange={e=>setSearchParams({n:e.target.value})}
    
    />
    
    </>
  )
}

export default BookLayout