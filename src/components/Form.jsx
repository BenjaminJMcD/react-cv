import React from "react";
import { useState } from "react";
import BasicInfo from "./BasicInfo";
import Education from "./Education";
import Experience from "./Experience";

function Form() {

    const [formData, setFormData]=useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted", formData);
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleInput = (event) => {
        const formattedPhoneNumber = formatPhoneNumber(event.target.value);
        setFormData({...formData, [event.target.name]: formattedPhoneNumber})
    }

    function formatPhoneNumber(value) {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g,"");
        const phoneNumberLength = phoneNumber.length;

        if (phoneNumberLength < 4) {
            return phoneNumber
        }
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
        }
        return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6,10)}`
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name: </label>
            <input type="text"
                className="firstName"
                name = "firstName"
                required
                value = {formData.firstName}
                onChange={handleChange} />
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" 
                className="lastName"
                name="lastName"
                required
                value = {formData.lastName}
                onChange={handleChange} />
            <label htmlFor="email">Email: </label>
            <input type="email" 
                className="email" 
                name="email"
                required
                value = {formData.email}
                onChange = {handleChange} />
            <label htmlFor="phone">Phone: </label>
            <input type="tel"
                placeholder="(123) 456 7890" 
                pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}"
                className="phoneNumber"
                required
                name="phone"
                value = {formData.phone}
                onChange={handleInput}
                 />
            <button className="submitButton" type="submit">SUBMIT</button>
        </form>
    )

}

export default Form