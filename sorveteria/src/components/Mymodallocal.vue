<template>
  <div class="Mymodal container">
    <!-- The Modal -->
    <div class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
                                            
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Cadastro de local</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
                                                
          <!-- Modal body -->
          <div class="modal-body">
            <form action="/action_page.php">
              <div class="form-group">
                  <label for="local">Local:</label>
                  <input  v-model="local" placeholder="local" type="text" class="form-control" id="local" width="276"/>
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
  name: 'Mymodallocal',
  data() {
    return {
      local: []
    };
  },
  methods: {
    click () {
      let local = {
        Local: this.local
      }
    },
    createLocal(){
      let services = new Service('local').create(local).then(
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