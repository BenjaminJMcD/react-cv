import React from "react";

function BasicDoc({ basicInfo }) {

    return (
        <div>
            <p>{basicInfo.firstName}</p>
            <p>{basicInfo.lastName}</p>
            <p>{basicInfo.email}</p>
            <p>{basicInfo.phone}</p>
            <p>{basicInfo.description}</p>
        </div>
    )

}

export default BasicDoc