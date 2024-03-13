
import { useState } from 'react'
import './App.css'
import BookMarks from './components/BooksMarks/BookMarks'
import Blogs from './components/blogs/blogs'
import Header from './components/header/header'

function App() {
  const [bookMarks, setBookMarks]=useState([])
  const handleBookMarkButton=blog=>{
    console.log("book mark adding soon")
  }

  return (
    <div className='w-10/12 mx-auto'>
       <Header></Header>
      <div className='md:flex mt-5'>
        <Blogs handleBookMarkButton={handleBookMarkButton}></Blogs>
        <BookMarks></BookMarks>
      </div>
    </div>
  )
}

export default App
