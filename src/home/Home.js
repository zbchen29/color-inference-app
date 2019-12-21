import React, { Component } from 'react';

// Components
import InferBox from './InferBox';
import InferBackground from './InferBackground.js';
import radius from './radius.json';
import probabilities from './probabilities.json';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: {
                hex:'#333',
                rgb: {
                    r:51,
                    g:51,
                    b:51
                },
                hsl: {
                    h:0,
                    s:0,
                    l:0.2
                }
            },
            inferred: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.likelihood = this.likelihood.bind(this);
        this.prior = this.prior.bind(this);
        this.infer = this.infer.bind(this);
    }

    handleChange(color, event) {
        this.setState({color: color});
        this.setState({inferred: this.infer(this.state.color.rgb,4)});
    }

    likelihood(rgb, mean, sigma) {
        let sqrt_const = 248.050213442;
        return 1/Math.sqrt(sqrt_const*Math.pow(sigma,3)) * Math.exp(-(Math.pow(rgb[0]-mean[0],2) + Math.pow(rgb[1]-mean[1],2) + Math.pow(rgb[2]-mean[2],2)) / (2*sigma));
    }

    prior(color) {
        return probabilities[color];
    }

    infer(rgb, n) {
        rgb = [rgb.r,rgb.b,rgb.g]

        let evidence_probability = 0;
        for (const [color, data] of Object.entries(radius)) {
            let mean = data['mean'];
            let sigma = data['radius'];
            evidence_probability = evidence_probability + this.likelihood(rgb, mean, sigma) * this.prior(color);
        }
        
        let probabilities = {}
        for (const [color, data] of Object.entries(radius)) {
            let mean = data['mean'];
            let sigma = data['radius'];
            probabilities[color] = this.likelihood(rgb, mean, sigma) * this.prior(color) / evidence_probability;
        }

        let colors = Object.entries(probabilities);
        colors.sort((a,b) => {
            let keyA = a[1];
            let keyB = b[1];
            return (keyA < keyB) ? -1 : (keyA > keyB ? 1 : 0);
        })

        return colors.slice(-n);
    }

    render() {
        return (
            <div>
                <InferBackground inferred={this.state.inferred}/>
                <InferBox onChange={this.handleChange} color={this.state.color} inferred={this.state.inferred}/>
            </div>
        )
    }
}

export default Home;