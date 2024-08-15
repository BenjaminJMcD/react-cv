import React from "react";
import { useState } from "react";
import Form from "./Form";
import Document from './Document';


function App() {

    const [basicInfo, setBasicInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });
    const [educationInfo, setEducationInfo] = useState({
        school: "",
        study: "",
        degree: false,
        startDate: "",
        endDate: ""
    });
    const [experienceInfo, setExperienceInfo] = useState({
        company: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: ""
    });

    const [displayBasic, setDisplayBasic] = useState(false);
    const [displayEducation, setDisplayEducation] = useState(false);
    const [displayExperience, setDisplayExperience] = useState(false);


    console.log(displayBasic);

    return (
        <div>
            <Form 
                basicInfo={basicInfo}
                setBasicInfo={setBasicInfo}
                setDisplayBasic={setDisplayBasic}
                educationInfo={educationInfo}
                setEducationInfo={setEducationInfo}
                setDisplayEducation={setDisplayEducation}
                experienceInfo={experienceInfo}
                setExperienceInfo={setExperienceInfo}
                setDisplayExperience={setDisplayExperience}
            />
            <Document 
                basicInfo={basicInfo}
                displayBasic={displayBasic}
                educationInfo={educationInfo}
                displayEducation={displayEducation}
                experienceInfo={experienceInfo}
                displayExperience={displayExperience}
            />
        </div>
    )
}

export default App