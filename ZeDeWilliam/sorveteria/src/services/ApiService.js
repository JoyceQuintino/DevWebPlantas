/* eslint-disable */
import axios from 'axios';
import toastr from 'toastr';

const baseUrl = 'http://localhost:5000/';
export default class ApiService {
  constructor(name) {
    this.url = baseUrl + name;
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


  async getById (id, sub = '') {
    return new Promise((resolve, reject) => {
      axios
        .get(this.url + sub + id)
        .then(res => resolve(res.data))
        .catch(err => {
          reject(err.response)
          toastr.error('Erro!', err.response)
        })
    })
  }

  async create (newObject = {}, sub = '') {
    return new Promise((resolve, reject) => {
      axios
        .post(this.url + sub, newObject)
        .then(res => {
          resolve(res.data)
          toastr.success("Dados cadastrados com sucesso!!")
        })
        .catch(err => {
          reject(err.response)
          toastr.error("Falha ao cadastrar!!")
        })
    })
  }

  async update (newObject, id, sub = '') {
    
    return new Promise((resolve, reject) => {
      axios
        .put(this.url + sub + id, newObject)
        .then(res => {
          resolve(res.data)
          toastr.success("Dados atualizado com sucesso!!")
        })
        .catch(err => {
          reject(err.response)
          toastr.error("Falha ao atualizar")
        })
    })
  }


  async delete (id, sub = '') {
    return new Promise((resolve, reject) => {
      axios
        .delete(this.url + sub + id)
        .then(res => {
          resolve(res.data)
          toastr.success("Sucesso!!")
        })
        .catch(err => {
          // if (err.response.data) {
          // toastr.error(err.response.data)
          // } else {
          toastr.error("Falha!!")
          // }
          reject(err.response)
        })
    })
  }





}
