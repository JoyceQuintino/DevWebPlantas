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
                  <label for="email">Data:</label>
                  <input placeholder="Data" type="date" class="form-control" id="datepicker" width="276" />
              </div>
              <div class="form-group">
                  <label for="quant">Quantidade:</label>
                  <input placeholder="Quantidade" class="form-control" id="quant">
              </div>
              <div class="form-group">
                  <label for="quantVendidos">Quantidade de vendidos:</label>
                  <input placeholder="Quantidade de vendidos" class="form-control" id="quantVendidos">
              </div>
              <div class="form-group">
                  <label for="quantPagos">Quantidade de pagos:</label>
                  <input placeholder="Quantidade de pagos" class="form-control" id="quantPagos">
              </div>
              <div class="form-group">
                  <label for="local">Local:</label>
                  <select class="form-control" id="local">
                    <option>Bloco A</option>
                    <option>Bloco B</option>
                    <option>Bloco C</option>
                  </select>
              </div>
              <div class="form-group">
                  <label for="status">Status:</label>
                  <select class="form-control" id="status">
                    <option>Pendente</option>
                    <option>Finalizado</option>
                  </select>
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
export default {
  name: 'Mymodal',
  data() {
    return {
      
    };
  },
};
</script>

<script>
  $('#datepicker').datepicker({
    uiLibrary: 'bootstrap4'
  });
</script>