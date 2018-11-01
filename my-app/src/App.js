import React, {Component} from 'react';
import Header from './components/header.js';
import AddTodo from "./components/addtodo";

class App extends Component {


    render() {
        return (
            <div>
                <Header/>
                <AddTodo/>
            </div>)

    }
}

export default App;

