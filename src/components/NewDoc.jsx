import React from "react";

function NewDoc (formData, displayFormData ) {

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
            {/* <p>{startEd}</p>
            <p>{endEd}</p> */}
        </div> : ""}
        {displayExperience ?
        <div>
            <p>{experienceInfo.company}</p>
            <p>{experienceInfo.position}</p>
            <p>{experienceInfo.responsibilities}</p>
            {/* <p>{startExp}</p>
            <p>{endExp}</p> */}
        </div> : ""}
    </div>
)
}