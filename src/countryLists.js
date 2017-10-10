import React, { Component } from 'react';
import { getCountryList, getCountry, postCountry, updateCountry, deleteCountry } from './countries';


class CountryList extends Component {
    constructor() {
        super();

        this.state = {
            countryList: undefined,
            initialLoad: true,
            creating: false,
            currentCountry: null
        }
        this.createCounty = this.createCounty.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
        this.removeCountry = this.removeCountry.bind(this);
    }

    componentDidMount() {
        getCountryList().then(response => {
            this.setState({ countryList: response });
        })
    }

    render() {
        return 
               
           
    }


}






















export default CountryList;