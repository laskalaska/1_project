import React, {Component} from 'react';
import {string, func} from 'prop-types';
import './SmileCard.scss';

class SmileCard extends Component {

    handleClick = () => {
        const { id, onVote } = this.props;
        onVote(id);
        // this.props.onVote(this.props.id);
    }
    render() {
        const { id, smile, title, description, onVote } = this.props;
        return (
            <div className='smileCard' onClick={this.handleClick}>
               <div>{smile}</div>
                <div>
                    <h3>{title}</h3>
                    <div>{description}</div>
                </div>
            </div>
        );
    }
}

SmileCard.propTypes = {
    smile: string.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    onVote: func
}

SmileCard.defaultProps = {
    smile: 'SMILE',
    title: 'TITLE',
    description: 'DESCRIPTION'
}

export default SmileCard;