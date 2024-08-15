import React from "react";

const Document = ({ basicInfo, educationInfo, experienceInfo, displayBasic, displayEducation, displayExperience }) => {

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
                <p>{educationInfo.startDate}</p>
                <p>{educationInfo.endDate}</p>
            </div> : ""}
            {displayExperience ?
            <div>
                <p>{experienceInfo.company}</p>
                <p>{experienceInfo.position}</p>
                <p>{experienceInfo.responsibilities}</p>
                <p>{experienceInfo.startDate}</p>
                <p>{experienceInfo.endDate}</p>
            </div> : ""}
        </div>
    )
}

export default Document;