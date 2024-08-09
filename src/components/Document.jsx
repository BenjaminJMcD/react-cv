import React from "react";
import { useState } from "react";

const Document = ({basicInfo, educationInfo, experienceInfo}) => {
    return (
        <div>
            <p>{basicInfo.firstName}</p>
            <p>{basicInfo.lastName}</p>
            <p>{basicInfo.email}</p>
            <p>{basicInfo.phone}</p>
            <p>{educationInfo.school}</p>
            <p>{educationInfo.study}</p>
            <p>{educationInfo.degree}</p>
            <p>{educationInfo.startDate}</p>
            <p>{educationInfo.endDate}</p>
            <p>{experienceInfo.company}</p>
            <p>{experienceInfo.position}</p>
            <p>{experienceInfo.responsibilities}</p>
            <p>{experienceInfo.startDate}</p>
            <p>{experienceInfo.endDate}</p>
        </div>
    )
}

export default Document;