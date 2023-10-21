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
  <div class="container-fluid p-0">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000" v-for="image in images">
          <img style="height: 650px;" class="d-block w-100 object-fit-cover" :src="getImg(image)">
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

.object-fit-cover{
  object-position: top;
}
</style>


