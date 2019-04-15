<template>
  <h1>TESTE</h1>

</template>

<script>
import Service from '../services/ApiService.js'
export default {
  name: 'MyRemessaTable',
  data() {
    return {
      
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
        usuario_id: 1
      }


      let services = new Service('remessa').create(remessa).then(
        success => {
          console.log('sucesso', success);
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

