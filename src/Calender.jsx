import React, { useState } from 'react'
import left from "../src/assets/left.png"
import right from "../src/assets/right.png"
import "./Calender.css"

const daysofweek = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Calender = () => {
    const [selectdate, setselectdate] = useState(new Date())

    const daysinmonth = () => {
        const dayarray = [];

        const firstday = new Date(selectdate.getFullYear(), selectdate.getMonth(), 1)
        const lastday = new Date(selectdate.getFullYear(), selectdate.getMonth() + 1, 0)

        for (let i = 0; i < firstday.getDay(); i++) {
            dayarray.push(null);
        }
        for (let i = 1; i <= lastday.getDate(); i++) {
            dayarray.push(new Date(selectdate.getFullYear(), selectdate.getMonth(), i))
        }


        return dayarray


    }
    daysinmonth()

const sameday =(date1,date2)=>{
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth()
    && date1.getFullYear() === date2.getFullYear();
}


const handlechangemonth =(e)=>{
    const newmonth =parseInt(e.target.value,10);
    setselectdate(new Date(selectdate.getFullYear(),newmonth,1))
}

const handlechangeyear=(e)=>{
    const newyear =parseInt(e.target.value,10);
    setselectdate(new Date(newyear ,selectdate.getMonth(),1))
}


    return (
        <>
            <div className="calender">
                <div className="header">
                    <button onClick={()=>{
                        setselectdate(new Date(selectdate.getFullYear(),
                    selectdate.getMonth()-1,1))
                    }}>
                        <img className='left' src={left} alt="left arrow" />
                    </button>
                    <select value={selectdate.getMonth()} onChange={handlechangemonth}>
                        {month.map((month, index) => (
                            <option key={index} value={index}>
                                {month}
                            </option>
                        ))}
                    </select>
                    <select value={selectdate.getFullYear()} onChange={handlechangeyear}>
                        {Array.from({ length: 20 }, (_, i) => selectdate.getFullYear() - 5 + i).map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                    <button onClick={()=>{
                        setselectdate(new Date(selectdate.getFullYear(),
                    selectdate.getMonth()+1,1))
                    }}>
                        <img className='right' src={right} alt="right arrow" />
                    </button>
                </div>
                <div className="daysofweek">
                    {daysofweek.map((day) => (
                        <div key={day}>{day}</div>
                    ))}
                </div>
                <div className='days'>
                    {daysinmonth().map((day, index) => (
                        <div key={index} className={day ?(sameday(day,new Date()))?"day current": "day" : "empty"}>{day ? day.getDate() : ""}</div>
                    ))}
                </div>
            </div>


        </>
    )
}

export default Calender
