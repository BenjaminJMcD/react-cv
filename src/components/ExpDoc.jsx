import React from "react";
import fixDate from "./fixDate";

function ExpDoc({ experienceInfo }) {

    let startDate = ""
    let endDate = ""

    experienceInfo.startDate ? startDate = fixDate(experienceInfo.startDate) : "";

    experienceInfo.endDate ? endDate = fixDate(experienceInfo.endDate) : "";

    return (
        <div>
            {experienceInfo.company &&
                <div className="experienceInfoDoc">
                    <div className="companyAndDates">
                        <p className="companyDoc">{experienceInfo.company}</p>
                        <p className="expDates">
                            {startDate} ---- {endDate}
                        </p>
                    </div>
                    <p className="positionDoc">{experienceInfo.position}</p>
                    <p className="responsibilitiesDoc">{experienceInfo.responsibilities}</p>
                </div>
            }
        </div>
    )


}

export default ExpDoc