import React, { useState } from 'react';
import FormComponent from './FormComponent';


function NewForm() {


    const [forms, setForms] = useState([
        { id: 1, data: {} },
        // ... other initial forms
    ]);



    const handleFormSubmit = (formData, formId) => {
        // Handle form submission for a specific form
        console.log(`Form ${formId} submitted:`, formData);
        // Update form data in the state if needed
    };



    const handleAddForm = () => {
        const newFormId = forms.length + 1;
        setForms((prevForms) => [...prevForms, { id: newFormId, data: {} }]);
    };



    const handleRemoveForm = () => {
        setForms((prevForms) => prevForms.filter((form) => form.id  !== forms.length));
    };

    return (
        <div>
            {forms.map((form) => (
                <FormComponent
                key={form.id}
                onFormSubmit={(data) => handleFormSubmit(data, form.id)}
                />
            ))}
            <button onClick={handleAddForm}>Add Form</button>
            <button onClick={handleRemoveForm}>Remove</button>
            
        </div>
  );
}

export default NewForm