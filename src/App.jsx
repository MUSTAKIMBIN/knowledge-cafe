
import { useState } from 'react'
import './App.css'
import BookMarks from './components/BooksMarks/BookMarks'
import Blogs from './components/blogs/blogs'
import Header from './components/header/header'

function App() {
  const [bookMarks, setBookMarks]=useState([])
  const [readingTime, setReadingTime]=useState(0)

  const handleBookMarkButton=blog=>{
    const newBookMark = [...bookMarks, blog]
    setBookMarks(newBookMark)
  }
  const handleMarkAsRead = (time,id)=>{
   setReadingTime(readingTime+time)
  //  console.log("remove bookMark ", id)
  const remainingBookMark = bookMarks.filter(bookMark => bookMark.id !== id)
  setBookMarks(remainingBookMark)
  }

  return (
    <div className='w-10/12 mx-auto'>
       <Header></Header>
      <div className='md:flex mt-5'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleBookMarkButton={handleBookMarkButton}></Blogs>
        <BookMarks readingTime={readingTime} bookMarks={bookMarks}></BookMarks>
      </div>
    </div>
  )
}

export default App
