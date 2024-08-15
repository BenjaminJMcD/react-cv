import React from "react";

function Education({educationInfo, setEducationInfo, setDisplayEducation}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplayEducation(true);
    }

    const handleChange = (event) => {
        setEducationInfo({...educationInfo, [event.target.name]: event.target.value})
    }


    const handleClick = (event) => {
        setEducationInfo({...educationInfo, [event.target.name]: event.target.checked})
    }



    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="educationSchool">School: </label>
            <input type="text"
                id="educationSchool"
                name = "school"
                required
                value = {educationInfo.school}
                onChange={handleChange} 
            />
            <label htmlFor="educationStudy">Study: </label>
            <input type="text" 
                id="educationStudy"
                name="study"
                value = {educationInfo.study}
                onChange={handleChange} 
            />
            <label htmlFor="educationDegree">Degree Obtained: </label>
            <input type="checkbox" 
                id="educationDegree"
                name="degree"
                onClick = {handleClick} 
            />
            <label htmlFor="educationStart">Start Date: </label>
            <input type="date"
                id="educationStart"
                name="startDate"
                onChange={handleChange}
            />
            <label htmlFor="educationEnd">End Date: </label>
            <input type="date"
                id="educationEnd"
                name="endDate"
                onChange={handleChange} 
            />
            <button className="submitButton" type="submit">SUBMIT</button>
        </form>
    )

}

export default Education