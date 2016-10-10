import React, { Component } from 'react';
import Search from './components/Search';
import CurrentLocation from './components/CurrentLocation';

import './App.css';

export default class App extends Component {
  
    constructor(props) {
        super(props);
        this.state = { currentAddress: "Nancy, France" };
    }

  searchForAddress(address) {
    this.setState({currentAddress: address});

  }

  render() {

  let ref = this;

    return (
      <main>
        <h1>Votre localisation Google map</h1>

        <section>
          <Search onSearch={ref.searchForAddress.bind(this)} />
        </section>

        <section>
        </section>

        <section>
         <CurrentLocation address={this.state.currentAddress} />
        </section>

      </main>
    );
  }
}
