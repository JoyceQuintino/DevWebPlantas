<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-offset-1 col-10">
        <div class="card" 
             style="margin: 10px">
          <div class="card-header">
            Filtro por datas
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-2">
                <label>Data inicial</label>
              </div>
              <div class="col-3">
                <input v-model="dataInicial" type="date" class="form-control" aria-label="Text input with dropdown button">
              </div>

              <div class="col-2">
                <label>Data final</label>
              </div>
              <div class="col-3">
                <input v-model="dataFinal" type="date" class="form-control" aria-label="Text input with dropdown button">
              </div>
              
              <div class="col">
                <button type="button" class="btn btn-secondary" @click="createChart()">Filtrar</button>
              </div>
            </div>

            <!-- <div class="row"> -->
              <!-- <div class="col-offset-10 col-2"> -->
                <!-- <div class="text-right" style="margin-top: 10px">
                  <button type="button" class="btn btn-secondary">Filtrar</button>
                </div> -->
                
              <!-- </div> -->
            <!-- </div> -->
             
          </div>
        </div>
      </div>
    </div>

    
    
    <div class="row justify-content-md-center">
      <div class="col-offset-1 col-10">
        <div class="card" 
             style="margin: 10px">
          <div class="card-header">
            Gráfico: Total X Pagos
          </div>
          <div class="card-body">
            <canvas id="chart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js';
import Service from '../services/ApiService.js'
export default {
  name: 'Mydashboard',
  data() {
    return {
      dataInicial: new Date(),
      dataFinal: new Date(),
      dados: [],
      data: [],
      pagos: [],
      qtd: []
    };
  },
  methods: {
    createChart() {
      let filter = {
        dataInicial: this.dataInicial,
        dataFinal: this.dataFinal
      }
      let services = new Service('remessa/filtro').getAll(filter)
        .then(result =>{
          console.log("sucesso: ", result)
          this.dados = result
        
          let data = []//['08/04/2019', '09/04/2019', '10/04/2019'];
          let pagos = [] //[20, 21, 19];
          let qtd =  []//[25, 26, 23];  
          const ctx = document.getElementById('chart').getContext('2d');
          console.log('Dados: ', this.dados.remessas)
          for(let dado in this.dados.remessas) {
            console.log('dado: ', dado)
            this.data.push(this.dados.remessas[dado].data)
            this.pagos.push(this.dados.remessas[dado].pagos)
            this.qtd.push(this.dados.remessas[dado].quantidade)
          }
          console.log('data', this.data)
          
          // Grafico com dados dos batimentos cardíacos
          const chart1 = new Chart(ctx, {
              type: 'line',
              //                    responsive: true,
              data: {
                labels: this.data,
                datasets: [{
                  label: 'Pagos',
                  data: this.pagos,
                  fill: false,
                  backgroundColor: '#006400',
                  borderColor: '#006400',
                }, {
                  label: 'Total',
                  data: this.qtd,
                  fill: false,
                  backgroundColor: '#FF0000',
                  borderColor: '#FF0000',
                },
                ],
              },
            });
          //window.chart1.update();
    })
        
      
      
    },
  },
  mounted() {
    this.createChart()
  },

};
</script>
