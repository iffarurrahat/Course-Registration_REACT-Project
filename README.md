# Project Name: Course-Registration
# Project Live URL: [Course-Registration](https://effortless-smakager-791514.netlify.app/)

<h3 className="text-3xl">Code Documents</h3>
<p className="text-lg font-semibold">Setup:</p>
<ol>
    <li>React</li>
    <li>Tailwind</li>
    <li>prop types react</li>
    <li>React Icons</li>
    <li>React Toastify</li>
</ol>
</br>
<p className="text-lg font-semibold">Using font-family:</p>
<p><span>'Inter', sans-serif</span></p>

<!-- Projects Questions -->
<h3 className="text-2xl">Questions</h3>
<h4 className="text-lg">1.Add at least 3 Projects features?</h4>
<ol>
    <li>When I click the button, the course title can be added to Denpashe bookmarks, but a course can be clicked once, and if not the second time, a waton button can be collected.</li>
    <li>Again, when I click on the button, there is an option named course credit, there is the number of hours. When I click on the button, I go to the bookmark on the right side and go to Total Credit Hour. In the initial state, its value is 0 and it can be added up to 20. A warning message will be given if it is added more than that </br> Besides that, there is an option in the bookmark called Credit Hour Remaining, it will be the default value of 20 when we click on the button, it will be subtracted from the Total Credit Hour, but there is a problem here, that is, the value of Credit Hour Remaining can never be less than 0.</li>
    <li>Again, when we click on the button, there is an option called price of the course. When we click on the button, the price will be added to the bookmark on the right side and Total Price.</li>
</ol> </br></br>

<h4 className="text-lg">2.Discuss how you managed the state in your assignment project.</h4>
<p>
    <span className="font-medium">I used first in my project's state,<span> 
    </br> 
    <small className="text-sm bg-slate-300">[bookMarks, setBookMarks] = useState([]):</small> </br> 
    <small className="text-sm">With this I loaded data from my project's api and displayed each course separately in the display</small>
</p></br>
<p>
    <span className="font-medium">Secondly, the use of the second state is because,<span>
    </br>
    <small className="text-sm bg-slate-300">[totalCredit, setTotalCredit] = useState(0):</small></br>
     <small className="text-sm">Every time I click on the select button, there is a value of credit in it, then Total Credit Hour will be added to the right side of the bookMarks section, but more than 20 cannot be added. will give alert or warning.</small>
</p></br>
<p>
    <span className="font-medium">Thirdly, the use of the third state causes,<span></br>
    <small className="text-sm bg-slate-300">[remainingCredit, setRemainingCredit] = useState(20);</small></br>
    <small className="text-sm">If we click on the select button then inside the bookmark there is an option called Credit Hour Remaining that value will be 20 by default but when we click on the button then the value of credit will be subtracted from 20 for that we have used third state</small>
</p></br>
<p>
    <span className="font-medium"><span>Fourthly, the fourth state is used because,</br>
    <small className="text-sm bg-slate-300">[totalPrice, setTotalPrice] = useState(0) ;</small></br>
    <small className="text-sm">When we click on the mutton option, there is an option named price in the card, and with that, the total price will be added inside the bookmark, so we have used the fourth state.</small>
</p>


