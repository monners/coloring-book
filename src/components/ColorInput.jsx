import React, { Component } from 'react';

export default class ColorInput extends Component {
    render() {
        return (
            <div className='color-input'>
                <label>{this.props.label}</label>
                <input type='text' valueLink={this.props.valueLink} />
            </div>
        );
    }
}
