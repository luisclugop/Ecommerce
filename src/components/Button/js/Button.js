import React, { Component } from "react";
import '../css/Button.css';

class Button extends Component {
    render(){
        let { title, task, icon } = this.props;
        return(
            <a className="button1" onClick={ task } href='n'>
                { title } { icon }
            </a>
        );
    }   
}

export default Button;