import React, {Component} from 'react';
import './App.css';


class News extends Component {
    render() {
        return (
            <div className={'inputContainer'}>
                <label>
                    <input className="checkbox" type="checkbox" name="checkbox-test"></input>
                    <span className="checkbox-custom"></span>
                </label>
                <input className={'inputArea'} placeholder={'Add your task'}></input>
                <input type="submit" className="submit" value="Add!"></input>
            </div>
        );
    }

}


export default News;