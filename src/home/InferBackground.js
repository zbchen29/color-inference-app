import React, { Component } from 'react';

// CSS
import './InferBackground.css'

let colors = ["blue", "violet", "purple", "indigo", "medium orchid", "slate blue", "dark violet", "white"]

class InferBackground extends Component {
    constructor(props) {
        super(props);
        this.createBackground = this.createBackground.bind(this);
    }

    createBackground() {
        // Not ETU
        return colors.map(color => <div className={"col-6 txt-hg font-nunito text-white background-section " + (colors.indexOf(color)%2 === 0 ? "text-left pl-4" : "text-right pr-4")} style={{"background-color":color.replace(/\s/g,"")}}>{color}</div>);
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