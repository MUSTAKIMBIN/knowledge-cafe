import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogData, setBlogData]=useState([])
    useEffect(()=>{
        fetch("blogsData.json")
        .then(res => res.json())
        .then(data =>setBlogData(data))
        // console.log(blogData)
    },[])
    return (
        <div>
           
        </div>
    );
};

export default Blogs;