import React, { Component } from 'react';

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = { value: "" };
    }

    handleChange(e) {
        this.setState({ value:  e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSearch(this.state.value)
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" placeholder="Chercher une localisation..." value={this.state.value} onChange={(e) => this.handleChange(e)} />
            </form>
        )
    }

}