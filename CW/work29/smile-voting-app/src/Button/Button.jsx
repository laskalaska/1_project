import { Component } from "react";
import { string, func } from "prop-types";

export default class Button extends Component {
    handleClick = () => {
        const {onClick} = this.props;
        onClick();
        console.log('btn was clicked')
    }

    render() {
        return (
            <input type="button" value={this.props.children} onClick={this.handleClick}/>
            // <input type="button" value={this.props.text} onClick={this.handleClick}/>
        )
    }
}

Button.propTypes = {
    onClick: func.isRequired
    // text: string.isRequired
}