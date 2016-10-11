import React, { Component } from 'react';

export default class LocationListe extends Component {

    //    constructor(props) {
    //         super(props);
    //     }

    render() {

        var locations = this.props.locations.map(function (l) {
            return (<a key={l.id}>{l.address}</a>)
        });

        if (!locations.length) {
            return null;
        }

        return (
            <div className="localisation-items">
                <h3>Localisations sauvegardé</h3>
                <div>
                {locations}
                </div>
            </div>
        )
    }
}