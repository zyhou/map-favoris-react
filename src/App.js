import React, { Component } from 'react';
import Search from './components/Search';
import CurrentLocation from './components/CurrentLocation';
import Map from './components/Map';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentAddress: "Nancy, France",
      mapCoordinates: { lat: 48.69, lng: 6.17 }
    };
  }

  searchForAddress(address) {

    let ref = this;

    //http://hpneo.github.io/gmaps/examples/geocoding.html
    window.GMaps.geocode({
      address: address,
      callback: function (results, status) {
        if (status !== 'OK') return;

        let latlng = results[0].geometry.location;
        ref.setState({
          currentAddress: results[0].formatted_address,
          mapCoordinates: {
            lat: latlng.lat(),
            lng: latlng.lng()
          }
        });
      }
    });

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
          <Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
        </section>

        <section>
          <CurrentLocation address={this.state.currentAddress} />
        </section>

      </main>
    );
  }
}
