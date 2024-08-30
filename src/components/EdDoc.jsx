import React from "react";

function EdDoc({ educationInfo }) {

    return (
        <div>
            <p>{educationInfo.school}</p>
            <p>{educationInfo.study}</p>
            <p>{educationInfo.degree}</p>
            <p>{educationInfo.startDate}</p>
            <p>{educationInfo.endDate}</p>
        </div>
    )


}

export default EdDoc