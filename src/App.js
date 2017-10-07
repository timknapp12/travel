import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Results from './Results.js';
import axios from 'axios';
import baseUrl from './api.js';

class App extends Component {

  constructor() {
    super();

    this.state = {
      countryName: '',
      // countryCode: '',
      // region: '',
      // capitalCity: '',
      // language: '',
      // currency: '',
      results: {},
      userInput: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.findResults = this.findResults.bind(this);

  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  findResults() {
    return axios.get(baseUrl).then(response => {
      this.setState({ results: response.data })
    })
  }

  componentDidMount() {
    return this.state.results;
  }


  render() {
    console.log(this.state.results);


    return (
      <section >
        <div>
          <div className="App">
            <Header findResults={this.findResults}
              handleChange={this.handleChange} />
          </div>

          <div>
            {/* <Text /> */}
          </div>

        </div>

        <div>
        <table>
                        <tbody>
                          <Results
                          countryName/>
                            <tr>
                                <th></th>
                                <th className='table_header'>Destination</th>
                            </tr>
                            <tr>
                                <td>Country</td>
                                <td>countryName={this.state.response.data[0].name}</td>
                            </tr>
                            <tr>
                                <td>Region</td>
                                <td>region={this.state.results[0].region}</td>
                            </tr>
                            <tr>
                                <td>Sub-region</td>
                                <td>subregion={this.state.results[0].subregion}</td>
                            </tr>
                            <tr>
                                <td>Capital City</td>
                                <td>capital={this.state.results[0].capital}</td>
                            </tr>
                            <tr>
                                <td>Language</td>
                                <td>language={this.state.results[0].languages}</td>
                            </tr>
                            <tr>
                                <td>Currency</td>
                                <td>currency={this.state.results[0].currencies}</td>
                            </tr>
                        </tbody>
                    </table> */}
        </div>
      </section>
    );
  }
}

export default App;
