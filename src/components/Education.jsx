import React from "react";
import { useState } from "react";

function Education({formData, setFormData}) {

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
            <label htmlFor="educationSchool">School: </label>
            <input type="text"
                id="educationSchool"
                name = "school"
                required
                value = {formData.school}
                onChange={handleChange} />
            <label htmlFor="educationStudy">Study: </label>
            <input type="text" 
                id="educationStudy"
                name="study"
                value = {formData.study}
                onChange={handleChange} />
            <label htmlFor="educationDegree">Degree Obtained: </label>
            <input type="checkbox" 
                id="educationDegree"
                name="degree"
                onClick = {handleClick} />
            <label htmlFor="educationStart">Start Date: </label>
            <input type="date"
                id="educationStart"
                name="startDate"
                onChange={handleChange}/>
            <label htmlFor="educationEnd">End Date: </label>
            <input type="date"
                id="educationEnd"
                name="endDate"
                onChange={handleChange} />
            <button className="submitButton" type="submit">SUBMIT</button>
        </form>
    )

}

export default Education