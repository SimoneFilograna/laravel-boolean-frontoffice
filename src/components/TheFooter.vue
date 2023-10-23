<script>
export default {

}
</script>


<template>

  <footer>
    <div class="container">
      <div class="d-flex justify-content-between nav-box py-3 align-items-center">
        <div class="hide-600" >
          <img style="height: 80px;" src="../assets/images/nav-logo.png">
        </div>
        <div class="pt-5">
          <p class="color fs-6 hide-600"><i class="fa-solid fa-location-dot" style="color: #80725f;"></i> Via Brombeis, 23, Napoli</p>
        </div>
        <div class="pt-5 w-100-600">
          <ul class="d-flex list-unstyled justify-content-around">
            <li class="color text-decoration-none fs-6">Privacy Policy</li>
            <li class="color text-decoration-none fs-6 m-auto">|</li>
            <li class="color text-decoration-none fs-6">Site Map</li>
            <li class="color text-decoration-none fs-6 m-auto">|</li>
            <li class="color text-decoration-none fs-6">Website Accesibility</li>
            <li class="color text-decoration-none fs-6 m-auto">|</li>
            <li class="color text-decoration-none fs-6">Tracking preferences</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

</template>

<style lang="scss" scoped>

.color {
    color: #80725f;
    &:hover {
      color: rgb(160, 140, 28);
    }
  }
  @media screen and (max-width:600px) {

    .hide-600{
      display: none;
    };
    .w-100-600{
      width: 100%;
    }

  }
</style>