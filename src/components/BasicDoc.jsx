import React from "react";

function BasicDoc({ basicInfo }) {

    return (
        <div>
            <div className="nameAndTitle">
                <p className="fullName">{basicInfo.firstName} {basicInfo.lastName}</p>
                <p className="title">{basicInfo.title}</p>
            </div>
            <div className="contactInfoDoc">
                <p>{basicInfo.linkedIn}</p>
                <p>{basicInfo.gitHub}</p>
                <p>{basicInfo.email}</p>
                <p>{basicInfo.phone}</p>
            </div>
            <p className="descriptionDoc">{basicInfo.description}</p>
        </div>
    )

}

export default BasicDoc