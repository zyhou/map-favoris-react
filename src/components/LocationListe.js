import React, { Component } from 'react';

export default class LocationListe extends Component {

    //    constructor(props) {
    //         super(props);
    //     }

    render() {

        var locations = this.props.locations.map(function (l) {
            return (<div key={l.id}>{l.address}</div>)
        });

        if (!locations.length) {
            return null;
        }

        return (
            <div>
                {locations}
            </div>
        )
    }
}