import React, { Component } from 'react';

// Components
import InferBox from './InferBox';
import InferBackground from './InferBackground.js';
import radius from './radius.json';
import priors from './priors.json';

class Home extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.likelihood = this.likelihood.bind(this);
        this.prior = this.prior.bind(this);
        this.infer = this.infer.bind(this);
        this.nearest = this.nearest.bind(this);

        this.state = {
            color: {
                hex:'#8C0D07',
                rgb: {
                    r:140,
                    g:13,
                    b:7
                },
                hsl: {
                    h:3,
                    s:0.9,
                    l:0.29
                }
            },
            inferred: this.infer({r:140, g:13, b:7},4),
            nearest: this.nearest({r:140, g:13, b:7},4)
        }
    }

    handleChange(color, event) {
        this.setState({color: color});
        this.setState({inferred: this.infer(color.rgb,4)});
        this.setState({nearest: this.nearest(color.rgb,4)});
    }

    likelihood(rgb, mean, sigma) {
        let sqrt_const = 248.050213442;
        return 1/Math.sqrt(sqrt_const*Math.pow(sigma,3)) * Math.exp(-(Math.pow(rgb[0]-mean[0],2) + Math.pow(rgb[1]-mean[1],2) + Math.pow(rgb[2]-mean[2],2)) / (2*sigma));
    }

    prior(color) {
        return priors[color];
    }

    infer(rgb, n) {
        rgb = [rgb.r,rgb.g,rgb.b];
        let evidence_probability = 0;

        for (const [color, data] of Object.entries(radius)) {
            let mean = data['mean'];
            let sigma = 12 * data['radius'];
            evidence_probability = evidence_probability + this.likelihood(rgb, mean, sigma) * this.prior(color);
        }

        let probabilities = {}
        for (const [color, data] of Object.entries(radius)) {
            let mean = data['mean'];
            let sigma = 12 * data['radius'];
            probabilities[color] = this.likelihood(rgb, mean, sigma) * this.prior(color) / evidence_probability;
        }

        let colors = Object.entries(probabilities);
        colors.sort((a,b) => {
            let keyA = a[1];
            let keyB = b[1];
            return (keyA < keyB) ? -1 : (keyA > keyB ? 1 : 0);
        })

        return colors.slice(-n).reverse();
    }

    nearest(rgb, n) {
        rgb = [rgb.r,rgb.g,rgb.b];

        let squaredDistances = {}
        for (const [color, data] of Object.entries(radius)) {
            let point = data['mean'];
            squaredDistances[color] = Math.pow(rgb[0]-point[0],2) + Math.pow(rgb[1]-point[1],2) + Math.pow(rgb[2]-point[2],2);
        }

        let colors = Object.entries(squaredDistances);
        colors.sort((a,b) => {
            let keyA = a[1];
            let keyB = b[1];
            return (keyA < keyB) ? -1 : (keyA > keyB ? 1 : 0);
        });

        return colors.slice(0,n).map(x => [x[0], Math.sqrt(x[1])]);
    }

    render() {
        return (
            <div>
                <InferBackground inferred={this.state.inferred} nearest={this.state.nearest}/>
                <InferBox onChange={this.handleChange} color={this.state.color.hsl} inferred={this.state.inferred} nearest={this.state.nearest}/>
            </div>
        )
    }
}

export default Home;