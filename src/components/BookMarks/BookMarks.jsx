import PropTypes from 'prop-types'

const BookMarks = ({ bookMarks, totalCredit, remainingCredit, totalPrice }) => {
    return (
        <div className="w-full md:w-1/4 h-fit rounded-xl bg-white p-6 mt-10">
            <h3 className="text-lg font-bold text-royal-blue mb-4">Credit Hour Remaining {remainingCredit} hr</h3>
            <hr />
            <h2 className='text-xl font-bold mt-4 mb-5'>Course Name</h2>
            {
                bookMarks.map((bookMark, index) => (
                    <div key={index}>
                        <p className='text-dark-gray leading-7'>{index + 1}. {bookMark.title}</p>
                    </div>
                ))
            }
            <hr className='mt-6 mb-4' />
            <h4 className='font-medium my-4'>Total Credit Hour : {totalCredit}</h4>
            <hr />
            <h3 className='font-semibold mt-4'>Total Price : {totalPrice} USD</h3>
        </div>
    );
};

BookMarks.propTypes = {
    bookMarks: PropTypes.array,
    totalCredit: PropTypes.number,
    remainingCredit: PropTypes.number,
    totalPrice: PropTypes.number,
}
export default BookMarks;