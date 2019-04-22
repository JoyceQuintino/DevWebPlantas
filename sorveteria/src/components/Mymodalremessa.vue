<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-offset-1 col-md-10 col-lg-10 col-xl-10 col-sm-10 col-12">
        <div class="card" style="margin-top: 20px">
          <div class="card-header">
            Cadastro de Remessa
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-12">
                <label>Quantidade total</label>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-12">
                <input v-model="quantidade" type="number" class="form-control" aria-label="Text input with dropdown button">
              </div>
            
              <div class="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-12">
                <label>Quantidade vendida</label>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-12">
                <input v-model="quantVend" type="number" class="form-control" aria-label="Text input with dropdown button">
              </div>
            </div>

            <div class="row" style="margin-top: 5px">
              <div class="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-12">
                <label>Quantidade paga</label>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-12">
                <input v-model="quantPagos" type="number" class="form-control" aria-label="Text input with dropdown button">
              </div>

              <div class="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-12">
                <label>Data</label>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-12">
                <input v-model="data" type="date" class="form-control" aria-label="Text input with dropdown button">
              </div>
            </div>

            <div class="row" style="margin-top: 5px">
              <div class="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-12">
                <label>Local</label>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-12">
                <select v-model="local_id" name="select-local" class="form-control">
                  <!-- <option   key="Selecione" value=none>Selecione</option> -->
                  <option  v-for="(item, index) in local" :key="index" :value="item.id">{{item.descricao}}</option> 
                </select>
              </div>

              <div class="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-12">
                <label>Status</label>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-12">
                <select v-model="status" name="select" class="form-control">
                  <!-- <option   key="Selecione" value=None>Selecione</option> -->
                  <option   key="Pendente" :value=false>Pendente</option>
                  <option   key="Finalizado" :value=true>Finalizado</option>
                </select>
              </div>
            </div>

            <div class="row" style="margin-top: 5px">
              <div class="col d-flex justify-content-end">
                <button @click="createRemessa()" type="button" style="width:100px" class="btn btn-secondary" >Salvar</button>
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
  name: 'Mymodalremessa',
  data() {
    return {
      data: null,
      quantidade: null,
      quantVend: null,
      quantPagos: null,
      status: null,
      local_id: null,
      selected1: [],
      local: [],
      status: []
    };
  },
  methods: {
    createRemessa () {
      let remessa = {
        data: this.data,
        quantidade: parseInt(this.quantidade),
        vendidos: parseInt(this.quantVend),
        pagos: parseInt(this.quantPagos),
        status: this.status,
        local_id: parseInt(this.local_id),
        usuario_id: 2
      }


      let services = new Service('remessa').create(remessa).then(
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
  created() {
    let services = new Service('local').getAll()
        .then(result =>{
          this.local = result.locais
          console.log('Locaissssss', this.local)
        })
  },
};
</script>

