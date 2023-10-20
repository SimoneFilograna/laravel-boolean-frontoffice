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
  <header>
    <TheHeader></TheHeader>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <TheFooter></TheFooter>
  </footer>
</template>

<style lang="scss">

header {
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 5;
}

footer {
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: 5;
}

</style>
