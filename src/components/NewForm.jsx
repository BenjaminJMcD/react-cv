import React, { useState } from 'react';
import NewBasic from './NewBasic';
import NewEducation from './NewEducation';
import NewExperience from './NewExperience';
import BasicDoc from './BasicDoc';
import EdDoc from './EdDoc';
import ExpDoc from './ExpDoc';


function NewForm() {

    const [basicInfo, setBasicInfo] = useState(
        { data: {}}
    );

    const [edForms, setEdForms] = useState([
        { id: 1, data: {} }
    ]);

    const [expForms, setExpForms] = useState([
        { id: 1, data: {} }
    ])


    const handleBasicSubmit = (basicData) => {
        setBasicInfo({data: basicData})
        console.log(`Form submitted:`, basicInfo);
    };

    const handleEdFormSubmit = (formData, formId) => {
        console.log(`Form ${formId} submitted:`, formData);
        if (edForms.length == 1) {
            setEdForms([{ id: formId, data: formData}])
        }
        if (edForms.length > 1) {
            let newEd = [...edForms];
            newEd.splice(formId-1, 1, {id: formId, data: formData})
            setEdForms(newEd)
        }
    };

    const handleExpFormSubmit = (formData, formId) => {
        console.log(`Form ${formId} submitted:`, formData);
        if (expForms.length == 1) {
            setExpForms([{ id: formId, data: formData}])
        }
        if (expForms.length > 1) {
            let newExp = [...expForms];
            newExp.splice(formId-1, 1, {id: formId, data: formData})
            setExpForms(newExp)
        }
    };

    const handleAddEdForm = () => {
        const newFormId = edForms.length + 1;
        setEdForms((prevForms) => [...prevForms, { id: newFormId, data: {} }]);
    };

    const handleRemoveEdForm = (formId) => {
        if (edForms.length > 1) {
            setEdForms((prevForms) => prevForms.filter((edForms) => edForms.id !== formId));
        }
    };

    const handleAddExpForm = () => {
        const newFormId = expForms.length + 1;
        setExpForms((prevForms) => [...prevForms, { id: newFormId, data: {} }]);
    };

    const handleRemoveExpForm = (formId) => {
        if (expForms.length > 1) {
            setExpForms((prevForms) => prevForms.filter((expForms) => expForms.id !== formId));
        }
    };

    console.log(edForms[0].data.school)

    return (
        <div>
            <h1 className="pageHeader">Create Your CV</h1>
            <div className="formsSideBar">
                {/* BASIC INFO */}
                <h2 className="formHeader">General Information</h2>
                <NewBasic
                    onFormSubmit={(data) => handleBasicSubmit(data)}
                />
                {/* EDUCATION FORMS */}
                <h2 className="formHeader">Education</h2>
                {edForms.map((edForm) => (
                    <NewEducation
                        key={edForm.id}
                        onFormSubmit={(data) => handleEdFormSubmit(data, edForm.id)}
                    />
                ))}
                <button className="addRemoveBtns" onClick={() => handleAddEdForm()}>Add Education</button>
                <button className="addRemoveBtns" onClick={() => handleRemoveEdForm(edForms.length)}>Remove</button>
                {/* EXPERIENCE FORMS */}
                <h2 className="formHeader">Experience</h2>
                {expForms.map((expForm) => (
                    <NewExperience
                        key={expForm.id}
                        onFormSubmit={(data) => handleExpFormSubmit(data, expForm.id)}
                    />
                ))}
                <button className="addRemoveBtns" onClick={() => handleAddExpForm()}>Add Experience</button>
                <button className="addRemoveBtns" onClick={() => handleRemoveExpForm(expForms.length)}>Remove</button>
            </div>
            <div className="cvDocument">
                {/* BASIC DOC */}
                <BasicDoc
                    basicInfo={basicInfo.data}
                />
                {/* EDUCATION DOC */}
                {edForms[0].data.school &&
                    <h1 className="educationHeader">Education</h1>
                }
                {edForms.map((edForm) => (
                    <EdDoc
                        key={edForm.id}
                        educationInfo={edForm.data}
                    />
                ))}
                {/* EXPERIENCE DOC */}
                {expForms[0].data.company &&
                    <h1 className="experienceHeader">Experience</h1>
                }
                {expForms.map((expForm) => (
                    <ExpDoc
                        key={expForm.id}
                        experienceInfo={expForm.data}
                    />
                ))}
            </div>
        </div>
  );
}

export default NewForm