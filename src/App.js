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

    makeValueLink = (prop) => {
        return {
            value: this.state[prop],
            requestChange: (newVal) => {
                this.setState({...this.state, [prop]: newVal});
            }
        }
    };

    updateColor = (prop, e) => {
        let newState = Object.assign({}, this.state, {[prop]: e.target.value});
        this.setState(newState);
    };

    render() {
        const coloringRegions = ['tail', 'legs', 'eye', 'body', 'beakUpper', 'beakLower', 'wing', 'hair'];

        return (
            <div>
                <Bird
                    tail={this.state.tail}
                    legs={this.state.legs}
                    body={this.state.body}
                    beakUpper={this.state.beakUpper}
                    beakLower={this.state.beakLower}
                    eye={this.state.eye}
                    wing={this.state.wing}
                    hair={this.state.hair} />

                {coloringRegions.map(region => {
                    return <ColorInput
                             valueLink={this.makeValueLink(region)}
                             label={region} />;
                })}
            </div>
        );
    }
};
