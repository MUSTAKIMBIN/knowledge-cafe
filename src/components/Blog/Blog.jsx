import PropTypes from 'prop-types'; 
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({blog,handleBookMarkButton,handleMarkAsRead}) => {
    // console.log(blog)
    const {id,title,cover_img,author,author_img,reading_time,post_date,hashtag}=blog
    return (
        <div className='my-12 space-y-4'>
            <img src={cover_img} className='rounded-xl ' alt={`image of this ${title}`} />
            <div className='flex justify-between items-center my-3'>
                <div className='flex gap-3'>
                    <img src={author_img} className='w-10' alt="" />
                    <div>
                        <p className='font-semibold'>{author}</p>
                        <p className='text-sm text-gray-400'>{post_date}</p>

                    </div>
                </div>
                <div className='text-gray-400'>
                   <span>{reading_time} min read</span>
                   <button onClick={()=>handleBookMarkButton(blog)}><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className='text-xs text-gray-400'>
                {hashtag.map((hash,indx)=> <span key={indx}><a>{hash}</a></span>)}
            </p>
            <button
             onClick={()=>handleMarkAsRead(reading_time,id)} className='cursor-pointer text-purple-700 text-sm '>Mark_As_Read
            </button>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleBookMarkButton: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;