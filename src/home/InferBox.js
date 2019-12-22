import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import './InferBox.css';

import BarPlot from './BarPlot';

class InferBox extends Component {
    render() {
        return (
            <div className="infer-box rounded-lg shadow-lg">
                <ChromePicker className="w-100 force-sans shadow-none" disableAlpha={true} onChange={this.props.onChange} color={this.props.color}/>
                <div className="color-band" style={{backgroundColor:"hsl(" + this.props.color.h + "," + this.props.color.s*100 + "%," + this.props.color.l*100 + "%)"}}></div>

                <div className="d-flex flex-row">
                    <BarPlot side="left" names={this.props.inferred.map(x => x[0])} values={this.props.inferred.map(x => x[1])}>Bayesian Prediction</BarPlot>
                    <BarPlot side="right" names={this.props.nearest.map(x => x[0])} values={this.props.nearest.map(x => 1/(x[1]+1))}>Nearest Neighbor</BarPlot>
                </div>
            </div>
        )
    }
}

export default InferBox;