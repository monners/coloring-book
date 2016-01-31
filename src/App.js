import React, { Component } from 'react';
import Bird from './components/Bird.jsx';
import ColorInput from './components/ColorInput.jsx';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            tail: 'ff0202',
            legs: 'ab93ab',
            body: 'fffada',
            beakUpper: '9930f2',
            beakLower: '00ac55',
            eye: 'ff0000',
            wing: 'dd396a',
            hair: '000000'
        };
    }

    updateColor = (prop, e) => {
        let newState = Object.assign({}, this.state, {[prop]: e.target.value});
        this.setState(newState);
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <Bird tail={this.state.tail}
                    legs={this.state.legs}
                    body={this.state.body}
                    beakUpper={this.state.beakUpper}
                    beakLower={this.state.beakLower}
                    eye={this.state.eye}
                    wing={this.state.wing}
                    hair={this.state.hair} />
                <ColorInput
                    value={this.state.tail}
                    label='tail'
                    onChange={this.updateColor.bind(null, 'tail')} />
                <ColorInput
                    value={this.state.legs}
                    label='legs'
                    onChange={this.updateColor.bind(null, 'legs')} />
                <ColorInput
                    value={this.state.eye}
                    label='eye'
                    onChange={this.updateColor.bind(null, 'eye')} />
                <ColorInput
                    value={this.state.body}
                    label='body'
                    onChange={this.updateColor.bind(null, 'body')} />
                <ColorInput
                    value={this.state.beakUpper}
                    label='beakUpper'
                    onChange={this.updateColor.bind(null, 'beakUpper')} />
                <ColorInput
                    value={this.state.beakLower}
                    label='beakLower'
                    onChange={this.updateColor.bind(null, 'beakLower')} />
                <ColorInput
                    value={this.state.wing}
                    label='wing'
                    onChange={this.updateColor.bind(null, 'wing')} />
                <ColorInput
                    value={this.state.hair}
                    label='hair'
                    onChange={this.updateColor.bind(null, 'hair')} />
            </div>
        );
    }
};
