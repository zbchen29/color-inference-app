import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import './InferBox.css';

import BarPlot from './BarPlot';

class InferBox extends Component {
    render() {
        return (
            <div className="infer-box rounded-lg">
                <ChromePicker className="w-100 force-sans" disableAlpha={true} />
                <BarPlot />
            </div>
        )
    }
}

export default InferBox;