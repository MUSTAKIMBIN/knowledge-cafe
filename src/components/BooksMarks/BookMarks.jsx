import PropTypes from 'prop-types'; 
import BookMark from '../BookMark/BookMark';
const BookMarks = ({bookMarks,readingTime}) => {
   
    return (
        <div className="md:w-1/3 text-center bg-gray-300 rounded-lg ml-2 p-3">
            <div>
                <p className="text-xl text-fuchsia-500 font-bold">Total Reading Time: {readingTime}</p>
            </div>
            <h1 className="text-3xl font-semibold">BookMarked Blog: {bookMarks.length}</h1>
            {
                bookMarks.map((bookMark) => <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>)
            }
        </div>
    );
};

BookMarks.propTypes={
    bookMarks: PropTypes.array,
    readingTime: PropTypes.num
}

export default BookMarks;