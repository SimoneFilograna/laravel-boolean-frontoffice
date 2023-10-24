<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<template>
  <header>


    <nav class="navbar navbar-expand-sm bg-body-tertiary">
      <div class="container-fluid d-flex justify-content-between px-5">
        <div class="d-flex nav-box py-3">
          <img src="../assets/images/nav-logo.png">

        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="d-flex list-unstyled gap-3 pt-3">
            <li><router-link class="color text-decoration-none fs-5" :to="{ name: 'home' }">Home</router-link></li>
            <li><router-link class="color text-decoration-none fs-5" :to="{ name: 'cocktails' }">Cocktail</router-link>
            </li>
            <li><router-link class="color text-decoration-none fs-5" :to="{ name: 'about_us' }">Chi Siamo</router-link>
            </li>
            <li><router-link class="color text-decoration-none fs-5" :to="{ name: 'contacts' }">Contatti</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </header>
  <Slider />
</template>

<style lang="scss">
.nav-box {
  height: 100px;

};
.color {
    color: #80725f;

    &:hover {
      color: rgb(160, 140, 28);
    }
  };
</style>