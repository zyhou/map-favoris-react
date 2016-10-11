import React, { Component } from 'react';

export default class Map extends Component {

    //    constructor(props) {
    //         super(props);
    //     }

    componentDidMount() {

        // Méthode pas appelé par défaut voir
        // https://facebook.github.io/react/docs/component-specs.html
        this.componentDidUpdate()
    }

    componentDidUpdate() {

        // Si c'est les mêmes coordonnée, on ne recharge pas la map
        if (this.lastLat === this.props.lat && this.lastLng === this.props.lng) {
            return;
        }

        this.lastLat = this.props.lat;
        this.lastLng = this.props.lng

        let map = new window.GMaps({
            el: '#map',
            lat: this.props.lat,
            lng: this.props.lng
        });

        map.addMarker({
            lat: this.props.lat,
            lng: this.props.lng
        });
    }

    render() {
        return (
            <div id="map"></div>
        )
    }
}