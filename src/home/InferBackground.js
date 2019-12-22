import React, { Component } from 'react';

import colorData from './radius.json';

// CSS
import './InferBackground.css'

// let colors = ["blue", "violet", "purple", "indigo", "medium orchid", "slate blue", "dark violet", "light blue"]

class InferBackground extends Component {
    constructor(props) {
        super(props);
        this.createBackground = this.createBackground.bind(this);
    }

    createBackground() {
        let sections = [];

        for (let i=0; i<this.props.inferred.length; i++) {
            let inferredColor = "rgb(" + colorData[this.props.inferred[i][0]]["mean"][0] + "," +  colorData[this.props.inferred[i][0]]["mean"][1] + "," +  colorData[this.props.inferred[i][0]]["mean"][2] + ")";
            sections.push(<div className="col-6 txt-hg font-nunito text-white background-section text-left pl-4" style={{backgroundColor:inferredColor}}>{this.props.inferred[i][0]}</div>);
            let nearestColor = "rgb(" + colorData[this.props.nearest[i][0]]["mean"][0] + "," +  colorData[this.props.nearest[i][0]]["mean"][1] + "," +  colorData[this.props.nearest[i][0]]["mean"][2] + ")";
            sections.push(<div className="col-6 txt-hg font-nunito text-white background-section text-right pr-4" style={{backgroundColor:nearestColor}}>{this.props.nearest[i][0]}</div>);
        }

        return sections;

        // return colors.map(color => <div className={"col-6 txt-hg font-nunito text-white background-section " + (colors.indexOf(color)%2 === 0 ? "text-left pl-4" : "text-right pr-4")} style={{"backgroundColor":color.replace(/\s/g,"")}}>{color}</div>);
    }

    render() {
        return (
            <div className="d-flex flex-wrap">
                { this.createBackground() }
            </div>
        )
    }
}

export default InferBackground;