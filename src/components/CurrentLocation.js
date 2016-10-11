import React, { Component } from 'react';

export default class CurrentLocation extends Component {

    //    constructor(props) {
    //         super(props);
    //     }

    toggleFavoris() {
        this.props.onToggleFavoris(this.props.address)
    }

    render() {

        let etoileFull = this.props.isInFavoris ? "full" : "";

        return (
            <div className="currentlocation">
                <h4>{this.props.address}</h4>
                <span className={"etoile-icon " + etoileFull} onClick={() => this.toggleFavoris()}>☆</span>
            </div>
        )
    }
}