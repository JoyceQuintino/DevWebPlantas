<template>
  <div class="Start">
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">PlantLar</a>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <!--<a class="nav-link" href="#">Sign in</a>-->
                <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#MyModal">Sign in</button>
            </li>
            <li class="nav-item active">
                <!--<a class="nav-link" href="#">Sign up</a>-->
                <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#MyModal">Sign up</button>
            </li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Start',
  data() {
    return {
      
    };
  },
};
</script>
