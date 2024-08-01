import React from "react";
import { useState } from "react";

function Education() {

    const [formData, setFormData]=useState({
        school: "",
        degreeTitle: "",
        degree: false,
        startDate: "mm/dd/yyyy",
        endDate: "mm/dd/yyyy"
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted", formData);
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    
    const handleClick = (event) => {
        setFormData({...formData, [event.target.name]: event.target.checked})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="school">School: </label>
            <input type="text"
                className="school"
                name = "school"
                required
                value = {formData.school}
                onChange={handleChange} />
            <label htmlFor="degreeTitle">Study: </label>
            <input type="text" 
                className="degreeTitle"
                name="degreeTitle"
                value = {formData.degreeTitle}
                onChange={handleChange} />
            <label htmlFor="degree">Degree Obtained: </label>
            <input type="checkbox" 
                className="degree" 
                name="degree"
                onClick = {handleClick} />
            <button className="submitButton" type="submit">SUBMIT</button>
        </form>
    )

}

export default Education