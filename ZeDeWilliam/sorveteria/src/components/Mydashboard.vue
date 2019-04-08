<template>
  <div class="col-sm-offset-2 col-sm-8">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h1 class="panel-title">Gráfico: Total X Pagos </h1>
      </div>
      <canvas id="chart"></canvas>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Mydashboard',
  data() {
    return {

    };
  },
  methods: {
    createChart() {
      const ctx = document.getElementById('chart').getContext('2d');

      let data = ['08/04/2019', '09/04/2019', '10/04/2019'];
	    let pagos = [20, 21, 19];
	    let qtd = [25, 26, 23];
      // Grafico com dados dos batimentos cardíacos
      const chart1 = new Chart(ctx, {
          type: 'line',
          //                    responsive: true,
          data: {
            labels: data,
            datasets: [{
              label: 'Pagos',
              data: pagos,
              fill: false,
              backgroundColor: '#006400',
              borderColor: '#006400',
            }, {
              label: 'Total',
              data: qtd,
              fill: false,
              backgroundColor: '#FF0000',
              borderColor: '#FF0000',
            },
            ],
          },
        });
      window.chart1.update();
    },
  },

};
</script>
