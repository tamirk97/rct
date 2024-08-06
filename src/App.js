// src/App.js
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import StudentList from './components/StudentList';

function App() {
    return (
        <div>
            <Header />
            <Main />
            <StudentList />
            <Footer />
        </div>
    );
}

export default App;
