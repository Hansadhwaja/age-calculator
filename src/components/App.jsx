import React, { useState } from "react";

export default function App() {
  const currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();
  const [isMousedOver, setMouseOver] = useState(false);
  const [date, setDate] = useState({
    Day: "",
    Month: "",
    Year: ""
  });
  const [ageDay, setAgeDay] = useState("");
  const [ageMonth, setAgeMonth] = useState("");
  const [ageYear, setAgeYear] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setDate((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function myfun(event) {
    if (currentDay < date.Day) {
      currentDay += 30;
      currentMonth -= 1;
    }
    if (currentMonth < date.Month) {
      currentMonth += 12;
      currentYear -= 1;
    }
    if(date.Day<31 && date.Month<12 && date.Year<currentYear &&date.Day && date.Month && date.Year){
      setAgeDay(currentDay - date.Day);
      setAgeMonth(currentMonth - date.Month);
      setAgeYear(currentYear - date.Year);
    }
    setDate({
      Day:"",
      Month:"",
      Year:""
    });
   
    event.preventDefault();
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }
  return (
    <div className="main-container">
      <div className="form-container">
        <div className="grid-container">
        <div className="date">
          <label className={!date.Day && "error-label"}>Day</label>
          <br />
          <input
            name="Day"
            type="number"
            className={date.Day?"box":"box border"}
            placeholder="DD"
            onChange={handleChange}
            value={date.Day}
          />
          {!date.Day && <p className="error">This Field is Required</p>}
          {date.Day>31 && <p className="error">Must be a valid day</p>}
        </div>
        <div className="date">
          <label className={!date.Month && "error-label"}>Month</label>
          <br />
          <input
            name="Month"
            type="number"
            className={date.Day?"box":"box border"}
            placeholder="MM"
            onChange={handleChange}
            value={date.Month}
          />
          {!date.Month && <p className="error">This Field is Required</p>}
          {date.Month>12 && <p className="error">Must be a valid month</p>}
        </div>
        <div className="date">
          <label className={!date.Year && "error-label"}>Year</label>
          <br />
          <input
            name="Year"
            type="number"
            className={date.Day?"box":"box border"}
            placeholder="YYYY"
            onChange={handleChange}
            value={date.Year}
          />
          {!date.Year && <p className="error">This Field is Required</p>}
          {date.Year>currentYear && <p className="error">Must be in the past</p>}
        </div>
        </div>
        <div className="container">
        <hr />
        <div className="arrow">
          <button
            type="submit"
            onClick={myfun}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{ backgroundColor: isMousedOver ? "black" : null }}
          >
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="44"
              viewBox="0 0 46 44"
            >
              <g fill="none" stroke="#fff" strokeWidth="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
              </g>
            </svg>
          </button>
        </div>
        </div>
      </div>
      <div className="content">
        <p className="answer">
          <span className="dot">{ageYear || "--"}</span>years
        </p>
        <p className="answer">
          <span className="dot">{ageMonth || "--"}</span>months
        </p>
        <p className="answer">
          <span className="dot">{ageDay || "--"}</span>days
        </p>
      </div>
    </div>
  );
}
