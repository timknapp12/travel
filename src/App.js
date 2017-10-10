import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Results from './Results.js';
import axios from 'axios';
import baseUrl from './api.js';
import { getCountryList, getCountry, updateCountry, deleteCountry } from './countries.js';
import CountryLists from './countryLists';


class App extends Component {

  constructor() {
    super();

    this.state = {
      countryName: '',
      results: [],
      userInput: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.findResults = this.findResults.bind(this);

  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  findResults() {
    console.log(`${baseUrl}/country/${this.state.userInput}`);
    return axios.get(`${baseUrl}/country/${this.state.userInput}`).then(response => {
      console.log("indicator", response.data);
      let newResults = [...this.state.results, response.data[0]]
      this.setState({ results: newResults })
    })

  }

  componentWillMount() {
    return this.state.results;
  }


  render() {

    var newResults = this.state.results.map(i => {
      return (
        <Results
          name={i.name}
          region={i.region}
          subregion={i.subregion}
          capital={i.capital}
          language={i.languages[0].name}
          currency={i.currencies[0].name} />
      )
    })



    return (
      <section >
        <div>
          <div className="App">
            <Header findResults={this.findResults}
              handleChange={this.handleChange} />
            <div className="center_text">
              <div>
                <h2>Change Your World :</h2>
              </div>
              <div className='one_dest'>
                <h3 className='h31'>one</h3>
                <h3 className='h32' >destination</h3>
                <h3 className='h33'>at a time</h3>
              </div>
            </div>

          </div>
          <div>
            <div className='results_container'>
              <div>
                <a id="results_section"><span><h2>My List of Countries</h2></span></a>
              </div>
              <section className='results_flex'>
                  {newResults}

              </section>
            </div>

          </div>

          <div>
            {newResults}
          </div>
        </div>
      </section>
    );
  }
}

export default App;
