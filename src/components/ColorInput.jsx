import React, { Component } from 'react';

export default class ColorInput extends Component {
    render() {
        return (
            <div className='color-input'>
                <label>{this.props.label}</label>
                <input type='text' value={this.props.value} onChange={this.props.onChange} />
            </div>
        );
    }
}
