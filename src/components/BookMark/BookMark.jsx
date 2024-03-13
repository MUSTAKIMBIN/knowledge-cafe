import PropTypes from 'prop-types'; 

const BookMark = ({bookMark}) => {
    const {title}=bookMark
    return (
        <div className='bg-slate-100 py-3 my-2 rounded-md text-lg font-semibold'>
            <h2 >{title}</h2>
        </div>
    );
};
BookMark.propTypes={
    bookMark: PropTypes.object
}
export default BookMark;