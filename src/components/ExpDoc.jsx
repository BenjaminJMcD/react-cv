import React from "react";

function ExpDoc({ experienceInfo }) {

    return (
        <div>
            <p>{experienceInfo.company}</p>
            <p>{experienceInfo.position}</p>
            <p>{experienceInfo.responsibilities}</p>
            <p>{experienceInfo.startDate}</p>
            <p>{experienceInfo.endDate}</p>
        </div>
    )


}

export default ExpDoc