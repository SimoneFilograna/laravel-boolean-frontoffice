<script>
  import TheHeader from './components/TheHeader.vue';
  import TheFooter from './components/TheFooter.vue';
  import Slider from './components/Slider.vue';

  export default{
    components: {
      TheHeader,
      TheFooter,
      Slider,
    }
  }
</script>

<template>
  <TheHeader></TheHeader>
  <div class="main">
    <Slider></Slider>
    <router-view></router-view>
  </div>
  <TheFooter></TheFooter>
</template>

<style lang="scss">

.main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

</style>
