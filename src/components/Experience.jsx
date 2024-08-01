import React from "react";
import { useState } from "react";

function Experience() {

    const [formData, setFormData]=useState({
        company: "",
        position: "",
        responsibilities: "",
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

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="company">Company: </label>
            <input type="text"
                className="company"
                name = "company"
                value = {formData.company}
                onChange={handleChange} />
            <label htmlFor="position">Position: </label>
            <input type="text" 
                className="position"
                name="position"
                value = {formData.position}
                onChange={handleChange} />
            <label htmlFor="responsibilities">Responsibilities: </label>
            <input type="text" 
                className="responsibilities" 
                name="responsibilities"
                value={formData.responsibilities}
                onChange = {handleChange} />
            <label htmlFor="startDate">Start Date: </label>
            <input type="date"
                className="startDate"
                name="startDate"
                onChange={handleChange}/>
            <label htmlFor="endDate">End Date: </label>
            <input type="date"
                className="endDate"
                name="endDate"
                onChange={handleChange} />
            <button className="submitButton" type="submit">SUBMIT</button>
        </form>
    )


}

export default Experience