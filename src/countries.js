import axios from 'axios';
import apiUrl from './api.js';


export const getCountryList = function() {
    return axios.get( '/api/country/' ).then( response => response.data );
  }

  export const postCountry = function(country) {
    return axios.post('/api/country/', country).then(response => {
      return response.data;
    })
  }

  export const getCountry = function(id) {
    return axios.get('/api/country/' + id).then((response) => response.data);
}

export const updateCountry = function(id, country) {
    return axios.patch('/api/country/' + id).then((response) => response.data);
}

export const deleteCountry = function(id) {
    return axios.delete('/api/country/' + id).then((response) => response.data);
}