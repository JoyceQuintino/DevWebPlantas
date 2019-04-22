<template>
  <div class="container" style="margin-top: 20px">
    <div class="row justify-content-center">
      <div class="col-offset-1 col-10">
        <div class="card">
          <div class="card-header">
            <div class="row">
              <ul class="navbar-nav" style="margin-left:10px">
                <li>
                  <h5>Remessas</h5>
                </li>
              </ul>
              <ul class="navbar-nav ml-auto" style="margin-right:10px">
                <li>
                  <router-link to="/modalremessa">Cadastrar</router-link>
                </li>
              </ul>
            </div>
          </div>

            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Data</th>
                      <th scope="col">Quatidade</th>
                      <th scope="col">Vendidos</th>
                      <th scope="col">Pagos</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-if="remessas.length == 0">
                      <td colspan="4"
                          class="text-center font-italic">
                          <label> Nenhum registro foi cadastrado </label>
                        </td>
                    </tr>
                    <tr v-for="(row, index) in remessas"
                      :key="row.id">
                      
                      <td>{{row.data}}</td>
                      <td>{{row.quantidade}}</td>
                      <td>{{row.vendidos}}</td>
                      <td>{{row.pagos}}</td>
                      <td><span :class="classeBadge(row.status)">{{row.status ? "Finalizado" : "Pendente" }}</span></td>
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
  name: 'MyRemessaTable',
  data() {
    return {
      remessas: []
    };
  },
  methods: {
    classeBadge (status) {
      if (!status) {
        return "badge badge-primary"
      }else {
        return "badge badge-danger"
      }
    }
    
  },
  created() {
    let services = new Service('remessa').getAll()
        .then(result =>{
          this.remessas = result.remessas
          console.log('remessas', this.remessas)
        })
  },
};
</script>

