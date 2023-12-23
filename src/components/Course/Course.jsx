import PropTypes from 'prop-types'
import { BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi2";

const Course = ({ course, handleCourses }) => {
    // console.log(course);
    const { img, alt_info, title, details, price, credit } = course;
    return (
        <div className="bg-white p-4 rounded-xl hover:shadow-md">
            <img className="mx-auto" src={img} alt={alt_info} />
            <h2 className="text-lg font-semibold mt-4 mb-3">{title}</h2>
            <p className="text-sm mb-4 text-dark-gray">{details}</p>
            <div className="flex justify-between text-dark-gray">
                <p className='flex items-center gap-3'><BsCurrencyDollar /><span>Price: {price}</span></p>
                <p className='flex items-center gap-3'><HiOutlineBookOpen /><span>Credit: {credit}hr</span></p>
            </div>
            <button onClick={() => handleCourses(course)} className='bg-royal-blue text-white w-full rounded-lg text-lg font-semibold py-2 mt-6'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object,
    handleCourses: PropTypes.func,
}

export default Course;