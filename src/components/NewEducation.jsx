import React, { useState } from 'react';

function NewEducation({ onFormSubmit }) {


  const [formData, setFormData] = useState({
    school: '',
    study: '',
    degree: false,
    degreeTitle: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(formData);
  };

  const handleClick = (event) => {
    setFormData((prevFormData) => ({...prevFormData, [event.target.name]: event.target.checked}))
}


  return (
    <form onSubmit={handleSubmit} id="educationForm">
      <label htmlFor="educationSchool">School: </label>
      <input type="text"
          id="educationSchool"
          name = "school"
          required
          value = {formData.school}
          onChange={handleChange} 
      />
      <label htmlFor="educationStudy">Study: </label>
      <input type="text" 
          id="educationStudy"
          name="study"
          value = {formData.study}
          onChange={handleChange} 
      />
      <label htmlFor="educationDegree">Degree Obtained: </label>
      <input type="checkbox" 
          id="educationDegree"
          name="degree"
          value= {formData.degree}
          onClick = {handleClick} 
      />
      {formData.degree && 
        <div className="degreeTitle">
          <label htmlFor="degreeTitle">Degree: </label>
          <input type="text"
            id="degreeTitle"
            name="degreeTitle"
            value={formData.degreeTitle}
            onChange={handleChange}
          />
        </div>
      }
      <label htmlFor="educationStart">Start Date: </label>
      <input type="date"
          id="educationStart"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
      />
      <label htmlFor="educationEnd">End Date: </label>
      <input type="date"
          id="educationEnd"
          name="endDate"
          value= {formData.endDate}
          onChange={handleChange} 
      />
      <button className="submitButton" type="submit">SUBMIT</button>
    </form>
  );
}

export default NewEducation