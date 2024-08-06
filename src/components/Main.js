// src/components/Main.js
import React, { useState } from 'react';

function Main() {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted name: ${name}`);
    };

    return (
        <main>
            <h2>Main Content Area</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </main>
    );
}

export default Main;
