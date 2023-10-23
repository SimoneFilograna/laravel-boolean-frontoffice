<script>
    import axios from 'axios'
    import CardCocktail from '../components/CardCocktail.vue'

    export default {
        components:{
            CardCocktail,
        },           
        data() {
            return {
                cocktailsList: [],
            }
        },
        methods: {
            fetchData() {
                axios.get('http://127.0.0.1:8000/api/cocktails')
                    .then((response) => {
                        //ottengo i dati relativi ai cocktails
                        this.cocktailsList = response.data;

                        console.log(this.cocktailsList);
                    })
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<template>
    
    <h1 class="text-center mt-5 style-text">Cocktails</h1>
    <p class="text-center mb-5 fst-italic"> A list of our best Drinks</p>
    <div class="container">
        <div class="row row-cols-3 g-5 justify-content-center">
            <div class="col" v-for="cocktail in cocktailsList" :key="cocktail.id">
                <CardCocktail :singleDrink="cocktail"></CardCocktail>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>