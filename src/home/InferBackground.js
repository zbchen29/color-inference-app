import React, { Component } from 'react';

// CSS
import './InferBackground.css'

let colors = ["blue", "violet", "purple", "indigo", "medium orchid", "slate blue", "dark violet", "light blue"]

class InferBackground extends Component {
    constructor(props) {
        super(props)
        this.createBackground = this.createBackground.bind(this)
    }

    createBackground() {
        return colors.map(color => <div className="col-6 txt-lg text-white background-section" style={{"background-color":color.replace(/\s/g,"")}}>{color}</div>)
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