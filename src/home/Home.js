import React, { Component } from 'react';

// Components
import InferBox from './InferBox';
import InferBackground from './InferBackground.js';

class Home extends Component {
    render() {
        return (
            <div>
                <InferBackground/>
                <InferBox/>
            </div>
        )
    }
}

export default Home;