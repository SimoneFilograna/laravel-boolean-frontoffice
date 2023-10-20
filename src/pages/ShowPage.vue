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

    
</template>

<style lang="scss" scoped>

</style>