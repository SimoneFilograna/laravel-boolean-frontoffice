<script>
    import axios from 'axios'
    import CardCocktail from '../components/CardCocktail.vue'

    export default {
                   
        data() {
            return {
                cocktailEl: {},
            }
        },
        methods: {
            fetchData() {
                axios.get('http://127.0.0.1:8000/api/cocktails' +this.$route.params.id)
                    .then((response) => {
                        //ottengo i dati relativi ai cocktails
                        this.cocktailEl = response.data;

                        console.log(this.cocktailEl);
                    })
                    .catch(e=>{
                        this.$router.push({name: "not-found"})
                    })
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<template>
    <h1>show</h1>
    {{ cocktailEl }}
    
</template>

<style lang="scss" scoped>

</style>