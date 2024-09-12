import React from "react";

function BasicDoc({ basicInfo }) {

    return (
        <div>
            <div className="basicHeader">
                <p className="fullName">{basicInfo.firstName} {basicInfo.lastName}</p>
                <p className="title">{basicInfo.title}</p>
                <div className="contactInfoDoc">
                    <p>{basicInfo.linkedIn}</p>
                    <p>{basicInfo.gitHub}</p>
                    <p>{basicInfo.email}</p>
                    <p>{basicInfo.phone}</p>
                </div>
            </div>
            {basicInfo.description && 
                <div className="aboutMe">
                    <p className="aboutMeHeader">About Me</p>
                    <div className="descriptionDoc">
                        <p>{basicInfo.description}</p>
                    </div>
                </div>
            }
        </div>
    )

}

export default BasicDoc