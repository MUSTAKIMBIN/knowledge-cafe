import PropTypes from 'prop-types'; 
import BookMark from '../BookMark/BookMark';
const BookMarks = ({bookMarks}) => {
   
    return (
        <div className="md:w-1/3 text-center bg-gray-300 rounded-lg ml-2 p-3">
            <h1 className="text-3xl font-semibold">BookMarked Blog: {bookMarks.length}</h1>
            {
                bookMarks.map((bookMark) => <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>)
            }
        </div>
    );
};

BookMarks.propTypes={
    bookMarks: PropTypes.array
}

export default BookMarks;