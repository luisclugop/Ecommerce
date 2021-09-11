import React, { Component } from "react";
import '../css/Button.css';

class Button extends Component {
    render(){
        let { title, task } = this.props;
        return(
            <a className="button1" onClick={ task }>
                { title }
            </a>
        );
    }   
}

export default Button;