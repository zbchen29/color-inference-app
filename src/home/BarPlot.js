import React, { Component } from 'react';

let colors = ["blue", "purple", "medium orchid", "dark violet"]
let values = [0.6, 0.25, 0.1, 0.05]

class BarPlot extends Component {
    constructor(props) {
        super(props)

        this.createBars = this.createBars.bind(this);
    }

    createBars() {
        let rows = []

        for (var i=0; i<colors.length; i++) {
            rows.push(
                <div className="row">
                    <div className="col-4">{colors[i]}</div>
                    <div className="col"><div style={{height:"90%", width:(values[i]*100).toString() + "%", backgroundColor:colors[i].replace(/\s/g,"")}}></div></div>
                </div>
            );
        }

        return rows
    }

    render() {
        return (
            <div class="container txt-sm p-3">
                { this.createBars() }
            </div>
        )
    }
}

export default BarPlot;