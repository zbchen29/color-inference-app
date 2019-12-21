import React, { Component } from 'react';

// Components
import InferBox from './InferBox';
import InferBackground from './InferBackground.js';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: {
                hex:'#333',
                rgb: {
                    r:51,
                    g:51,
                    b:51
                },
                hsl: {
                    h:0,
                    s:0,
                    l:0.2
                }
            }
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(color, event) {
        this.setState({color: color});
        
    }

    render() {
        return (
            <div>
                <InferBackground/>
                <InferBox onChange={this.handleChange} color={this.state.color}/>
            </div>
        )
    }
}

export default Home;