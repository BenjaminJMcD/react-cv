import React from "react";
import { useState } from "react";

const Document = ({info}) => {
    return (
        <div>
            <p>{info.firstName}</p>
            <p>{info.lastName}</p>
            <p>{info.email}</p>
            <p>{info.phone}</p>

        </div>
    )
}

export default Document;