import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; 

const Blogs = ({handleBookMarkButton,handleMarkAsRead}) => {
    const [blogData, setBlogData]=useState([])
    useEffect(()=>{
        fetch("blogsData.json")
        .then(res => res.json())
        .then(data =>setBlogData(data))
        // console.log(blogData)
    },[])
    return (
        <div className="md:w-2/3">
           <h1 className="text-2xl">Blogs {blogData.length}</h1>
           {
            blogData.map(blog=><Blog 
                handleBookMarkButton ={handleBookMarkButton}
                handleMarkAsRead={handleMarkAsRead}
                key={blog.id}
                blog={blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    handleBookMarkButton: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;