import React from "react";
import { useState } from "react";

function Experience({experienceInfo, setExperienceInfo, setDisplayExperience}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted", experienceInfo);
        setDisplayExperience(true);
    }

    const handleChange = (event) => {
        setExperienceInfo({...experienceInfo, [event.target.name]: event.target.value})
    }

    const handleDate = (event) => {

        let date = event.target.value;
        let year = date.slice(0,4);
        let monthDay = date.slice(5);
        let dateFormat = date.concat(monthDay+"-"+year);

        setExperienceInfo({...experienceInfo, [event.target.name]: dateFormat.slice(10)})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="expCompany">Company: </label>
            <input type="text"
                id="expCompany"
                name = "company"
                value = {experienceInfo.company}
                onChange={handleChange} />
            <label htmlFor="expPosition">Position: </label>
            <input type="text" 
                id="expPosition"
                name="position"
                value = {experienceInfo.position}
                onChange={handleChange} />
            <label htmlFor="expResponsibilities">Responsibilities: </label>
            <textarea rows="4" cols="50"
                id="expResponsibilities" 
                name="responsibilities"
                value={experienceInfo.responsibilities}
                onChange = {handleChange} />
            <label htmlFor="expStart">Start Date: </label>
            <input type="date"
                id="expStart"
                name="startDate"
                onChange={handleDate}/>
            <label htmlFor="expEnd">End Date: </label>
            <input type="date"
                id="expEnd"
                name="endDate"
                onChange={handleDate} />
            <button className="submitButton" type="submit">SUBMIT</button>
        </form>
    )


}

export default Experience