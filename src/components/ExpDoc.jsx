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
                    <p className="companyDoc">{experienceInfo.company}</p>
                    <div className="experienceDates">
                        <p className="expDates">
                            {startDate} ---- {endDate}
                        </p>
                    </div>
                    <p className="experienceDoc">{experienceInfo.position}</p>
                    <p className="responsibilitiesDoc">{experienceInfo.responsibilities}</p>
                </div>
            }
        </div>
    )


}

export default ExpDoc