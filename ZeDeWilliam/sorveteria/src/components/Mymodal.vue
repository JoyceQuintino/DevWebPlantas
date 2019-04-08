<template>
  <div class="Mymodal container">
    <!-- The Modal -->
    <div class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
                                            
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title"></h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
                                                
          <!-- Modal body -->
          <div class="modal-body">
            <form action="/action_page.php">
              <div class="form-group">
                  <label for="email">E-mail:</label>
                  <input placeholder="Email address" type="email" class="form-control" id="email">
              </div>
              <div class="form-group">
                  <label for="pwd">Senha:</label>
                  <input placeholder="Password" type="password" class="form-control" id="pwd">
              </div>
              <button type="submit" class="btn btn-primary">Entrar</button>
            </form>
          </div>
                                                
          <!-- Modal footer -->
          <div class="modal-footer"></div>

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
