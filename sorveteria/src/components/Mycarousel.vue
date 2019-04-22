<template>
  <div class="container" style="margin-top:10px">
    <div class="row">
      <div class="d-flex justify-content-center" style="height: 100%; ">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style="height: 50%; width: 60%;">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src="@/assets/sorveteria1.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                  <img src="@/assets/sorveteria2.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                  <img src="@/assets/sorveteria3.jpg" class="d-block w-100" alt="...">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
        </div>
      </div>
    </div>
   
    
    <div class="row justify-content-center" style="margin-top:10px">
        <div class="btn-group btn-group-lg">
            <button type="button" class="btn btn-warning" style="margin-right: 10px;">
                <router-link to="/local" >Locais</router-link>
            </button>
        
            <button type="button" class="btn btn-warning" style="margin-left: 10px;">
                <router-link to="/remessa" >Remessas</router-link>
            </button>
        </div>
    </div>
    
    
    </div>
    
  
</template>

<script>
export default {
  name: 'Mycarousel',
};
</script>
