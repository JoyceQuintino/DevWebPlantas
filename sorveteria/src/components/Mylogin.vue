<template>
    <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <form class="form-signin">
              <div class="form-label-group">
                <label for="inputEmail">Usuário:</label>
                <input type="text" id="inputUser" class="form-control" placeholder="Usuário" required autofocus>
              </div>
              <br>
              <div class="form-label-group">
                <label for="inputPassword">Senha:</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required>
              </div>
              <br>
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit" @click="createLogin()">Entrar</button>
              <hr class="my-4">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>    
import Service from '../services/ApiService.js'
export default {
  name: 'Mylogin',
  data() {
    return {
      username: null,
      senha: null,
    };
  },
  methods: {
    createLogin () {
      let login = {
        username: this.username,
        senha: this.senha
      }


      let services = new Service('login').create(login).then(
        success => {
          console.log('sucesso', success);
        },
        error => {
          console.log('erro', error);
        }
      )

    },

  },
};
</script>

<style scoped>

</style>