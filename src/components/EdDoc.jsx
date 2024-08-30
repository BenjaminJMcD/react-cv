import React from "react";
import fixDate from "./fixDate";

function EdDoc({ educationInfo }) {

    let startDate = ""
    let endDate = ""

    educationInfo.startDate ? startDate = fixDate(educationInfo.startDate) : "";

    educationInfo.endDate ? endDate = fixDate(educationInfo.endDate) : "";

    return (
        <div>
            <p>{educationInfo.school}</p>
            <p>{educationInfo.study}</p>
            <p>{educationInfo.degree}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>
        </div>
    )


}

export default EdDoc