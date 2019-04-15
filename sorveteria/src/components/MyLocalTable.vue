<template>
  <div class="container" style="margin-top: 20px">
    <div class="row justify-content-center">
      <div class="col-offset-1 col-10">
        <div class="card">
          <div class="card-header">
            <h5>Locais</h5>
              <!--<div class="input-group ">-->
          </div>

            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Local</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-if="locais.length == 0">
                      <td colspan="4"
                          class="text-center font-italic">
                          <label> Nenhum registro foi cadastrado </label>
                        </td>
                    </tr>
                    <tr v-for="(row, index) in locais"
                      :key="row.id">
                      
                      <td>{{row.local}}</td>
                      
                    </tr>
                  </tbody>
                </table>
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
  name: 'MyLocalTable',
  data() {
    return {
      locais: []
    };
  },
  methods: {
    
    
  },
  created() {
    let services = new Service('local').getAll()
        .then(result =>{
          this.locais = result.locais
          console.log('locais', this.locais)
        })
  },
};
</script>

