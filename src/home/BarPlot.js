import React, { Component } from 'react';
import colorData from './radius.json';

// let colorsLeft = ["blue", "purple", "medium orchid", "dark violet"]
// let valuesLeft = [1, 0.25, 0.1, 0.05]

// let colorsRight = ["violet", "indigo", "slate blue", "light blue"]
// let valuesRight = [1, 0.8, 0.75, 0.4]

class BarPlot extends Component {
    constructor(props) {
        super(props)

        this.createBars = this.createBars.bind(this);
    }

    createBars() {
        let rows = []
        let colors = this.props.names;
        let values = this.props.values;
        let maxValue = Math.max(...values);

        rows.push(<div className="text-center txt-md font-cabin pb-3">{this.props.children}</div>);
        if (this.props.side === "left") {
            for (let i=0; i<colors.length; i++) {
                let height = "90%";
                let width = (values[i]/maxValue*100) + "%";
                let backgroundColor = "rgb(" + colorData[colors[i]]["mean"][0] + "," + colorData[colors[i]]["mean"][1] + "," + colorData[colors[i]]["mean"][2] + ")";
                rows.push(
                    <div className="row">
                        <div className="col-4 txt-ty text-right font-cabin overflow-hidden text-truncate pr-1">{colors[i]}</div>
                        <div className="col pl-1"><div style={{height:height, width:width, backgroundColor:backgroundColor}}></div></div>
                    </div>
                );
            }
        }
        else {
            for (let i=0; i<colors.length; i++) {
                let height = "90%";
                let width = (values[i]/maxValue*100) + "%";
                let backgroundColor = "rgb(" + colorData[colors[i]]["mean"][0] + "," + colorData[colors[i]]["mean"][1] + "," + colorData[colors[i]]["mean"][2] + ")";
                rows.push(
                    <div className="row">
                        <div className="col pr-1"><div className="ml-auto" style={{height:height, width:width, backgroundColor:backgroundColor}}></div></div>
                        <div className="col-4 txt-ty text-left font-cabin overflow-hidden text-truncate pl-1">{colors[i]}</div>
                    </div>
                );
            }
        }

        return rows
    }

    render() {
        return (
            <div className="container txt-sm p-3">
                { this.createBars() }
            </div>
        )
    }
}

export default BarPlot;