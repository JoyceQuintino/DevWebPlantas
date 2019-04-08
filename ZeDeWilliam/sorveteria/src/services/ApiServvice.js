/* eslint-disable */
import axios from 'axios';
import toastr from 'toastr';

const baseUrl = 'http://localhost:5000/';
export default class ApiService {
  constructor(name) {
    this.url = baseUrl + this.name;
  }

  async getAll(filter = {}, sub = '') {
    let params = {
      params: filter
    }
    
    return axios
      .get(this.url + sub, params)
      .then(response => response.data)
      .catch(err => {
        console.log(err);
        toastr.error('Falha ao carregar os dados');
      })
  }

  
}
