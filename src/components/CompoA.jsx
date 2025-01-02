import React, { useState, useEffect } from 'react';

 
const CompoA = ({ children, car, color }) => {
    return (
        <>
            <h1>Compo 1 {car} {color}</h1>
            <p>{children}</p>
        </>
    )
}


export default CompoA;
