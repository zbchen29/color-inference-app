import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import './InferBox.css';

import BarPlot from './BarPlot';

class InferBox extends Component {
    render() {
        return (
            <div className="infer-box rounded-lg">
                <ChromePicker className="w-100 force-sans" disableAlpha={true} onChange={this.props.onChange} color={this.props.color}/>
                <div className="d-flex flex-row">
                    <BarPlot side="left" names={this.props.inferred.map(x => x[0])} values={this.props.inferred.map(x => x[1])}>Bayesian Prediction</BarPlot>
                    <BarPlot side="right" names={this.props.inferred.map(x => x[0])} values={this.props.inferred.map(x => x[1])}>Nearest Neighbor</BarPlot>
                </div>
            </div>
        )
    }
}

export default InferBox;