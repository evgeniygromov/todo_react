import React, { Component } from 'react';
import News from './news.js';
import './App.css';


class Apps extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
                <h1>Todo list</h1>
                <News />
            </header>
        </div>
    );
    }
}

export default Apps;