<script>
  import TheHeader from './components/TheHeader.vue';
  import TheFooter from './components/TheFooter.vue';

  export default{
    components: {
            TheHeader,
            TheFooter,
        }
  }
</script>

<template>
  <TheHeader></TheHeader>
  <router-view></router-view>
  <footer>
    <TheFooter></TheFooter>
  </footer>
</template>

<style lang="scss">

footer {
  width: 100vw;
  position: fixed;
  bottom: 0;
}

</style>
