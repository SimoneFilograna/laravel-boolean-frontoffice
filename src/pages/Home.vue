<script>
import axios from 'axios'

export default {
    data() {
        return {
            cocktailsList: []
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
    <h1>HELLO FRONtoffice</h1>

    
</template>

<style lang="scss" scoped></style>