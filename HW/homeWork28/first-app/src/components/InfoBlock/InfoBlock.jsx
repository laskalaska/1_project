import React from 'react';
import {string} from 'prop-types';
import './InfoBlock.scss';

function InfoBlock(props) {
    const {title, text} = props;
    return (
        <section className="info-block">
            <h3 className="title">{title}</h3>
            <div className="text">{text}</div>
        </section>
    );
}

InfoBlock.propTypes = {
    title: string.isRequired,
    text: string.isRequired
}

export default InfoBlock;