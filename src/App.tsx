import React from 'react';
import './assets/css/App.css';
import Board from './components/Board';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';

const App: React.FC = () => {
    return (
        <div className="App">
            <Navbar />
            <div className="body">
                <Board />
            </div>
            <Footer />
        </div>
    );
};

export default App;
