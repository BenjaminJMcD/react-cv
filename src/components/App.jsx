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

    return (
        <div>
            <Form 
                basicInfo={basicInfo}
                setBasicInfo={setBasicInfo}
                educationInfo={educationInfo}
                setEducationInfo={setEducationInfo}
                experienceInfo={experienceInfo}
                setExperienceInfo={setExperienceInfo}
            />
            <Document 
                basicInfo={basicInfo}
                educationInfo={educationInfo}
                experienceInfo={experienceInfo}
            />
        </div>
    )
}

export default App