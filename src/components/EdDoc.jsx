import React from "react";
import fixDate from "./fixDate";

function EdDoc({ educationInfo }) {

    let startDate = ""
    let endDate = ""

    educationInfo.startDate ? startDate = fixDate(educationInfo.startDate) : "";

    educationInfo.endDate ? endDate = fixDate(educationInfo.endDate) : "";

    return (
        <div>
            {educationInfo.school &&
                <div className="educationInfoDoc">
                    <p className="schoolDoc">{educationInfo.school}</p>
                    <div className="educationDates">
                        <p className="edDates">
                            {startDate} ---- {endDate}
                        </p>
                    </div>
                    <p className="studyDoc">{educationInfo.study}</p>
                    <p className="degreeTitleDoc">{educationInfo.degreeTitle}</p>
                </div>
            }
        </div>
    )


}

export default EdDoc