<script>
import axios from 'axios'


export default {

    data() {
        return {
            cocktailEl: {},
        }
    },
    methods: {
        fetchData() {
            console.log(this.$route.params)
            axios.get('http://127.0.0.1:8000/api/cocktail/' + this.$route.params.id)
                .then((response) => {
                    //ottengo i dati relativi ai cocktails
                    this.cocktailEl = response.data;

                    console.log(this.cocktailEl);
                })
                .catch(e => {
                    this.$router.push({ name: "not-found" })
                })
        }
    },
    mounted() {
        this.fetchData();
    }
}
</script>

<template>

    <div class="container">

        <div class="row">

            <div class="col-12 col-md-6 p-5">
                <img style="width: 100%;" :src="cocktailEl.thumb" alt="">
            </div>
            <div class="col-12 col-md-6 p-5">
                <h2>{{ cocktailEl.name }}</h2>

                <p> Tipologia:    <small class="fw-bold">{{ cocktailEl.category }}</small>   </p>
                
                <h5>Ingredienti: </h5>
                <ul>
                    <li v-if="cocktailEl.ingredients" v-for="single in JSON.parse(cocktailEl.ingredients)">{{ single }}</li>
                </ul>

                <p> {{cocktailEl.instructions}}</p>
            </div>

        </div>


    </div>
</template>

<style lang="scss" scoped></style>