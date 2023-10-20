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
          <li><router-link class="text-decoration-none fs-5" :to="{ name: 'cocktails'}">Cocktail</router-link></li>
          <!-- <li><router-link class="text-decoration-none fs-5 :to="{ name: 'cocktail.show'}">Cocktail</router-link></li> -->
          <li><router-link class="color text-decoration-none fs-5" :to="{ name: 'about_us' }">Chi Siamo</router-link></li>
          <li><router-link class="color text-decoration-none fs-5" :to="{ name: 'contacts' }">Contatti</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
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