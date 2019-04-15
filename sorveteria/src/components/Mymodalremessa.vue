<template>
  <div class="Mymodal container">
    <!-- The Modal -->
    <div class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
                                            
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Cadastro de remessa</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
                                                
          <!-- Modal body -->
          <div class="modal-body">
            <form action="/action_page.php">
              <div class="form-group">
                  <label for="datepicker">Data:</label>
                  <input  v-model="data" placeholder="Data" type="date" class="form-control" id="datepicker" width="276"/>
              </div>
              <div class="form-group">
                  <label for="quant">Quantidade:</label>
                  <input  v-model="quantidade" placeholder="Quantidade" class="form-control" id="quant">
              </div>
              <div class="form-group">
                  <label for="quantVendidos">Quantidade de vendidos:</label>
                  <input  v-model="quantVend" placeholder="Quantidade de vendidos" class="form-control" id="quantVendidos">
              </div>
              <div class="form-group">
                  <label for="quantPagos">Quantidade de pagos:</label>
                  <input  v-model="quantPagos" placeholder="Quantidade de pagos" class="form-control" id="quantPagos">
              </div>
              <div class="form-group">
                  <label for="local">Local:</label>
                   <b-form-select v-model="selected1" :options="local" id="local"></b-form-select>
              </div>
              <div class="form-group">
                  <label for="status">Status:</label>
                  <b-form-select v-model="selected1" :options="status" id="status"></b-form-select>
              </div>
            </form>
          </div>
                                                
          <!-- Modal footer -->
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Cadastrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from '../services/ApiService.js'
export default {
  name: 'Mymodalremessa',
  data() {
    return {
      data: [],
      quantidade: [],
      quantVend: [],
      quantPagos: [],
      selected1: [],
      local: [
        {value: 'Bloco A', text: 'Bloco A'},
        {value: 'Bloco B', text: 'Bloco B'},
        {value: 'Bloco C', text: 'Bloco C'}
      ],
      selected2: [],
      status: [
        {value: 'Pendente', text: 'Pendente'},
        {value: 'Finalizado', text: 'Finalizado'}
      ]
    };
  },
  methods: {
    click () {
      let remessa = {
        Data: this.data,
        Quantidade: this.quantidade,
        QuantVend: this.quantVend,
        QuantPagos: this.quantPagos,
        Selected1: this.selected1,
        Selected2: this.selected2
      }
    },
    createRemen(){
      let services = new Service('remessa').create(remessa).then(
        success => {
          console.log('sucesso', success);
        },
        error => {
          console.log('erro', error);
        }
      )
    }
  },
};
</script>

