import React, { Component } from 'react';

export default class Map extends Component {

//    constructor(props) {
//         super(props);
//     }

    render() {
        return (
            <div>
                <h4>{this.props.lat}</h4>
                <h4>{this.props.lng}</h4>
            </div>
        )
    }
}