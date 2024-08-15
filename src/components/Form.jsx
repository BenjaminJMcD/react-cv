import React from "react";
import { useState } from "react";
import BasicInfo from "./BasicInfo";
import Education from "./Education";
import Experience from "./Experience";

function Form({basicInfo, educationInfo, experienceInfo, setBasicInfo, setEducationInfo, setExperienceInfo, setDisplayBasic, setDisplayEducation, setDisplayExperience}) {


    const [edAmount, setEdAmount] = useState("")
    // SaveEducation Array.length


    const addEducation = () => {


    }



    const removeEducation = () => {

    }


    return (
    <div>
        <h1 className="basicInfo">General Information</h1>
        <BasicInfo
            basicInfo = {basicInfo}
            setBasicInfo= {setBasicInfo}
            setDisplayBasic={setDisplayBasic}
        />
        <h1 className="education">Education</h1>
        <div id="edBox">
            <Education
                educationInfo = {educationInfo}
                setEducationInfo = {setEducationInfo}
                setDisplayEducation={setDisplayEducation}
            />
        </div>
            <button className="addEd"
                onClick={addEducation}>
                Add Education</button>
            <button className="removeEd"
                onClick={removeEducation}>
                Remove</button>
        <h1 className="experience">Work Experience</h1>
        <Experience 
            experienceInfo = {experienceInfo}
            setExperienceInfo = {setExperienceInfo}
            setDisplayExperience={setDisplayExperience}
        />
    </div>
    )
}

export default Form



//  HOLD INFO UNTIL SUBMIT, THEN SAVE IN ARRAY AS OBJECT
//  MAP INTO DOCUMENT FROM OBJECT