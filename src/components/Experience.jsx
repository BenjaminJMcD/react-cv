import React from "react";
import { useState } from "react";

function Experience({formData, setFormData}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted", formData);
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="expCompany">Company: </label>
            <input type="text"
                id="expCompany"
                name = "company"
                value = {formData.company}
                onChange={handleChange} />
            <label htmlFor="expPosition">Position: </label>
            <input type="text" 
                id="expPosition"
                name="position"
                value = {formData.position}
                onChange={handleChange} />
            <label htmlFor="expResponsibilities">Responsibilities: </label>
            <input type="text" 
                id="expResponsibilities" 
                name="responsibilities"
                value={formData.responsibilities}
                onChange = {handleChange} />
            <label htmlFor="expStart">Start Date: </label>
            <input type="date"
                id="expStart"
                name="startDate"
                onChange={handleChange}/>
            <label htmlFor="expEnd">End Date: </label>
            <input type="date"
                id="expEnd"
                name="endDate"
                onChange={handleChange} />
            <button className="submitButton" type="submit">SUBMIT</button>
        </form>
    )


}

export default Experience