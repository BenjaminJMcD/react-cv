import React from "react";
import fixDate from "./fixDate";

function ExpDoc({ experienceInfo }) {

    let startDate = ""
    let endDate = ""

    experienceInfo.startDate ? startDate = fixDate(experienceInfo.startDate) : "";

    experienceInfo.endDate ? endDate = fixDate(experienceInfo.endDate) : "";

    return (
        <div>
            <p>{experienceInfo.company}</p>
            <p>{experienceInfo.position}</p>
            <p>{experienceInfo.responsibilities}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>
        </div>
    )


}

export default ExpDoc