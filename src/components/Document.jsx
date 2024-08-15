import React from "react";

const Document = ({ basicInfo, educationInfo, experienceInfo, displayBasic, displayEducation, displayExperience }) => {


    function handleDate (date) {
        console.log(date)
        let year = date.slice(0,4);
        let monthDay = date.slice(5);
        let dateFormat = monthDay+"-"+year;
        console.log(dateFormat)
        return dateFormat
    }

    let startEd = handleDate(educationInfo.startDate);
    let endEd = handleDate(educationInfo.endDate);
    let startExp = handleDate(experienceInfo.startDate);
    let endExp = handleDate(experienceInfo.endDate);

    return (
        <div>
            {displayBasic ? 
            <div>
                <p>{basicInfo.firstName}</p>
                <p>{basicInfo.lastName}</p>
                <p>{basicInfo.email}</p>
                <p>{basicInfo.phone}</p>
            </div> : ""}
            {displayEducation ? 
            <div>
                <p>{educationInfo.school}</p>
                <p>{educationInfo.study}</p>
                <p>{educationInfo.degree}</p>
                <p>{startEd}</p>
                <p>{endEd}</p>
            </div> : ""}
            {displayExperience ?
            <div>
                <p>{experienceInfo.company}</p>
                <p>{experienceInfo.position}</p>
                <p>{experienceInfo.responsibilities}</p>
                <p>{startExp}</p>
                <p>{endExp}</p>
            </div> : ""}
        </div>
    )
}

export default Document;