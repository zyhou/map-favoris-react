import React, { Component } from 'react';

export default class Map extends Component {

//    constructor(props) {
//         super(props);
//     }

	componentDidMount(){

        // Méthode pas appelé par défaut voir
        // https://facebook.github.io/react/docs/component-specs.html
        this.componentDidUpdate()
    }

    componentDidUpdate(){

        // new GMaps({
		// 	el: '#map',
		// 	lat: this.props.lat,
		// 	lng: this.props.lng
		// });
    }

    render() {
        return (
            <div id="map"></div>
        )
    }
}