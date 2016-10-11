import React, { Component } from 'react';

export default class LocationListe extends Component {

    //    constructor(props) {
    //         super(props);
    //     }

    onClickItem(e) {
        let address = e.target.firstChild.nodeValue
        this.props.onClickItem(address)
    }

    render() {

        var locations = this.props.locations.map(function (l) {
            return (<span key={l.id} onClick={(e) => this.onClickItem(e)}>{l.address}</span>)
        }.bind(this))

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