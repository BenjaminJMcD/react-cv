import React from "react";
import { useState } from "react";
import saveEducationArr from "./saveEducation";

function Education({formData, setFormData}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        saveEducationArr(formData);
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }


    const handleClick = (event) => {
        setFormData({...formData, [event.target.name]: event.target.checked})
    }

    const handleDate = (event) => {

        let date = event.target.value;
        let year = date.slice(0,4);
        let monthDay = date.slice(5);
        let dateFormat = date.concat(monthDay+"-"+year);

        setFormData({...formData, [event.target.name]: dateFormat.slice(10)})
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
                onChange={handleDate}
            />
            <label htmlFor="educationEnd">End Date: </label>
            <input type="date"
                id="educationEnd"
                name="endDate"
                onChange={handleDate} />
            <button className="submitButton" type="submit">SUBMIT</button>
        </form>
    )

}

export default Education