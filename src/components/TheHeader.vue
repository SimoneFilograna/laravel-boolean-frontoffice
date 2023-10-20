<script>
export default {
  data() {
    return {
      images: ['../assets/images/slider1.jpeg', '../assets/images/slider2.jpeg']
    }
  },
  methods: {
    getImg(img) {
      return new URL(img, import.meta.url).href
    }
  }
}
</script>

<template>
  <nav>
    <div class="container">
      <div class="d-flex justify-content-between nav-box py-3">
        <img src="../assets/images/nav-logo.png">
        <ul class="d-flex list-unstyled gap-3 pt-3">
          <li><router-link class="color text-decoration-none fs-5" :to="{ name: 'home' }">Home</router-link></li>
          <!-- <li><router-link class="text-decoration-none fs-5" :to="{ name: 'cocktails'}">Cocktail</router-link></li> -->
          <!-- <li><router-link class="text-decoration-none fs-5 :to="{ name: 'cocktail.show' }">Cocktail</router-link></li> -->
          <li><router-link class="color text-decoration-none fs-5" :to="{ name: 'about_us' }">Chi Siamo</router-link></li>
          <li><router-link class="color text-decoration-none fs-5" :to="{ name: 'contacts' }">Contatti</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid p-0">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000" v-for="image in images">
          <img style="height: 650px;" class="d-block w-100" :src="getImg(image)">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss">

.nav-box {
  height: 100px;
  
  .color {
    color: #80725f;
    &:hover {
      color: rgb(160, 140, 28);
    }
  }
}

</style>