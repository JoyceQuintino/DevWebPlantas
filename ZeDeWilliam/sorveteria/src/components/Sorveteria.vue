<template>
    <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <form class="form-signin">
              <div class="form-label-group">
                <label for="inputEmail">Usuário:</label>
                <input type="email" id="inputUser" class="form-control" placeholder="Usuário" required autofocus>
              </div>
              <br>
              <div class="form-label-group">
                <label for="inputPassword">Senha:</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required>
              </div>
              <br>
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Entrar</button>
              <hr class="my-4">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'GithubIssues',
    }
</script>

<style scoped>

</style>