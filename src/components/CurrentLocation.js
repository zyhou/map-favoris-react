import React, { Component } from 'react';

export default class CurrentLocation extends Component {

//    constructor(props) {
//         super(props);
//     }


    render() {
        return (
            <h4>{this.props.address}</h4>
        )
    }
}