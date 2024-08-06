// src/components/Student.js
import React from 'react';

function Student({ student }) {
    return (
        <div className="student">
            <h2>{student.name}</h2>
            <p>Age: {student.age}</p>
            <p>Email: {student.email}</p>
        </div>
    );
}

export default Student;
