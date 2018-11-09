import React, {Component} from 'react';
import '../App.css';

class LoginInput extends Component {


    render() {

        return (
            <div className={'mainLoginBlock'}>
                <div className={'loginContainer'}>
                    <input className={'regLogin'} placeholder={'Name'}/>
                    <input className={'regPass'} placeholder={'Password'}/>
                    <input className={'regConfirmPass'} placeholder={'Confirm your password'}/>

                    <button className={'submitButton'}>Submit</button>

                </div>
            </div>

        );
    }
}


export default LoginInput;