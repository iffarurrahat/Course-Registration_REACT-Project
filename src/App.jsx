import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import BookMarks from './components/BookMarks/BookMarks';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [bookMarks, setBookMarks] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCourses = course => {
    const duplicateBtn = bookMarks.find(item => item.id === course.id)
    if (duplicateBtn) {
      return toast.info("Already this course is exist in cart")
    }
    // Total Credit Hour
    let credit = course.credit;
    bookMarks.forEach(hour => {
      credit += hour.credit;
    })

    // Credit Hour Remaining
    const remaining = 20 - credit;
    if (remaining < 0 || credit > 20) {
      return toast.warning("Remaining value never less 0 or Total Credit never greater than 20")
    }

    // Total Price 
    let totalPrice = course.price;
    bookMarks.forEach(cost => {
      totalPrice += cost.price
    })

    setTotalCredit(credit);
    setRemainingCredit(remaining);
    setTotalPrice(totalPrice);

    const newCourses = [...bookMarks, course]
    setBookMarks(newCourses)
  }

  return (
    <>
      <h1 className='text-3xl font-bold text-center py-4'>Course Registration</h1>
      <div className='flex flex-col-reverse md:flex-row gap-5 max-w-screen-xl mx-auto px-3 md:px-5 lg:px-0'>
        <Courses handleCourses={handleCourses}></Courses>
        <BookMarks
          bookMarks={bookMarks}
          totalCredit={totalCredit}
          remainingCredit={remainingCredit}
          totalPrice={totalPrice}
        ></BookMarks>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
