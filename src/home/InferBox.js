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
                    <BarPlot side="left">Bayesian Prediction</BarPlot>
                    <BarPlot side="right">Nearest Neighbor</BarPlot>
                </div>
            </div>
        )
    }
}

export default InferBox;