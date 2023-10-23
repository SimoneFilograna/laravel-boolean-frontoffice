<script>
import axios from 'axios'

export default {
  data() {
    return {
      searchCocktail: '',
      cocktails: null,
    };
  },
  methods: {
    fetchCocktail() {
      const urlCocktail = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.searchCocktail}`;

      axios.get(urlCocktail).then((response) => {
        this.cocktails = response.data.drinks;
      });
    },
  },
};
</script>

<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Cerca il nome del cocktail" v-model="searchCocktail" @keyup.enter="fetchCocktail">
    <button class="btn btn-outline-secondary" type="button" @click="fetchCocktail">Cerca</button>
  </div>

  <div v-if="cocktails">
    <h5>Risultati:</h5>
    <div v-for="cocktail in cocktails" :key="cocktail.idDrink">
      <ul>
        <li>{{ cocktail.strDrink }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
