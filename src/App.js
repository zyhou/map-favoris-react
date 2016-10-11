import React, { Component } from 'react';
import Search from './components/Search';
import CurrentLocation from './components/CurrentLocation';
import Map from './components/Map';
import LocationListe from './components/LocationListe';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentAddress: "Nancy, France",
      mapCoordinates: { lat: 48.69, lng: 6.17 },
      favorisListe: []
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

  toggleFavoris(address) {
    let ref = this;
    if (ref.isFavorisExist(address)) {
      ref.removeFavoris(address)
    }
    else {
      ref.addFavoris(address)
    }
  }

  addFavoris(address) {
    // Trouvé sur internet
    let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    let favoris = this.state.favorisListe

    favoris.push({ id: id, address: address });
    this.setState({ favorisListe: favoris });
  }

  removeFavoris(address) {
    let favoris = this.state.favorisListe.filter(function (f) {
      return f.address !== address;
    });
    this.setState({ favorisListe: favoris });
  }

  isFavorisExist(address) {
    let favoris = this.state.favorisListe;
    for (var i = 0; i < favoris.length; i++) {
      if (favoris[i].address === address) {
        return true;
      }
    }
    return false;
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
          <CurrentLocation address={this.state.currentAddress} onToggleFavoris={ref.toggleFavoris.bind(this)} isInFavoris={this.isFavorisExist(this.state.currentAddress)} />
        </section>

        <section>
          <LocationListe locations={this.state.favorisListe} />
        </section>

      </main>
    );
  }
}
