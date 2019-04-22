<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-offset-1 col-10">
        <div class="card" style="margin-top: 20px">
          <div class="card-header">
            Cadastro de Local
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-3">
                <label>Local</label>
              </div>
              <div class="col-6">
                <input v-model="local" type="text" class="form-control" aria-label="Text input with dropdown button">
              </div>
              <div class="row">
                <div class="col d-flex justify-content-end">
                  <button @click="createLocal()" type="button" style="width:100px" class="btn btn-secondary">Salvar</button>
                </div>
              </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  </div>
</template>

<script>
import Service from '../services/ApiService.js'
export default {
  name: 'Mymodallocal',
  data() {
    return {
      local: null
    };
  },
  methods: {
    createLocal () {
      let local = {
        descricao: this.local
      }

      let services = new Service('local').create(local).then(
        success => {
          console.log('sucesso', success);
          alert("Cadastro realizado com sucesso!");
        },
        error => {
          console.log('erro', error);
        }
      )
    },
  },
};


</script>

