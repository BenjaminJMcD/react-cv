import React from "react"
import { useState } from "react"


function BasicInfo() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <div className="basicInfo">
            <label htmlFor="firstName">First Name: </label>
            <input type="text"
                className="firstName"
                value = {firstName}
                onChange={(event) => setFirstName(event.target.value)} />
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" 
                className="lastName"
                value = {lastName}
                onChange={(event) => setLastName(event.target.value)} />
            <label htmlFor="email">Email: </label>
            <input type="email" 
                className="email" 
                value = {email}
                onChange = {(event) => setEmail(event.target.value)} />
            <label htmlFor="phoneNumber">Phone: </label>
            <input type="phone" 
                className="phoneNumber"
                value = {phone}
                onChange={(event) => setPhone(event.target.value)} />
        </div>

    )

}

export default BasicInfo