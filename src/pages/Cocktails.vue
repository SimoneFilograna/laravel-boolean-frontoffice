<script>
import axios from 'axios'
import CardCocktail from '../components/CardCocktail.vue'

export default {
    components: {
        CardCocktail
    },
    data() {
        return {
            cocktailsList: [],
            userSearch: '',       
            selectedCategory: ''    
        }
    },
    methods: {
        fetchData() {
            axios.get('http://127.0.0.1:8000/api/cocktails', {
                params: { category: this.userSearch }
            })
                .then((response) => {

                    this.cocktailsList = response.data;

                    console.log(this.cocktailsList);
                    console.log(this.userSearch);
                })
        },
        onSearch() {
            this.fetchData();
        },
    },
    mounted() {
        this.fetchData();
    },
    computed: {
        uniqueCategories() {
            const categories = new Set(this.cocktailsList.map(cocktail => cocktail.category));
            return Array.from(categories);
        }
    },
}
</script>

<template>
    <h1 class="text-center mt-5 style-text">Cocktails</h1>
    <p class="text-center mb-5 fst-italic"> A list of our best Drinks</p>
    <div class="container d-flex flex-column align-items-end">
        <div class="search my-5">
            <form @submit.prevent="fetchData">
                <div class="input-group">
                    <select class="form-select" v-model="userSearch">
                        <option selected value="">Tutti i cocktails</option>
                        <option :value="category" v-for="category in uniqueCategories">{{ category }}</option>
                    </select>
                    <button type="submit" class="btn btn-secondary">Vai</button>
                </div>
            </form>
        </div>
        <div class="row row-cols-3 g-5 justify-content-center">
            <div class="col-12 col-sm-6 col-md-4" v-for="cocktail in cocktailsList" :key="cocktail.id">
                <CardCocktail :singleDrink="cocktail"></CardCocktail>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.search {
    width: 500px;

    .form-select:focus {
    border-color: lightgray;
    outline: 0;
    box-shadow: 0 0 0px 0px #80725f00;
    }

    button{
        background-color: #6e5f4c;  

    &:active{
        background-color: #4d453b;
        }
    }
}
</style>