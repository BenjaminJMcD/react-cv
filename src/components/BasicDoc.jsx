import React from "react";

function BasicDoc({ basicInfo }) {

    return (
        <div>
            <p className="firstNameDoc">{basicInfo.firstName}</p>
            <p className="lastNameDoc">{basicInfo.lastName}</p>
            <div className="contactInfoDoc">
                <p>{basicInfo.email}</p>
                <p>{basicInfo.phone}</p>
            </div>
            <p className="descriptionDoc">{basicInfo.description}</p>
        </div>
    )

}

export default BasicDoc