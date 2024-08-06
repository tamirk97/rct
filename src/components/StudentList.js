// src/components/StudentList.js
import React, { useState } from 'react';
import Student from './Students';

function StudentList() {
    const [students, setStudents] = useState([
        { name: 'John Doe', age: 20, email: 'john@example.com' },
        { name: 'Jane Smith', age: 22, email: 'jane@example.com' },
        { name: 'Sam Brown', age: 19, email: 'sam@example.com' }
    ]);

    const [newStudent, setNewStudent] = useState({ name: '', age: '', email: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStudents([...students, newStudent]);
        setNewStudent({ name: '', age: '', email: '' });
    };

    return (
        <div className="student-list">
            <h2>Student List</h2>
            <form onSubmit={handleSubmit} className="mb-3">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={newStudent.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        className="form-control"
                        id="age"
                        name="age"
                        value={newStudent.age}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={newStudent.email}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Add Student</button>
            </form>
            {students.map((student, index) => (
                <Student key={index} student={student} />
            ))}
        </div>
    );
}

export default StudentList;
