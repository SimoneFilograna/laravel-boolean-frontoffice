<script>
    export default{
        props:{
            singleDrink : {
                type: Object,
                require: true,
            }
        },
    }
</script>

<template>
        <router-link :to='{ name:"cocktail.show", params: {id: singleDrink.id}}'>
        <div class="card text-white border-0">
            <img :src="singleDrink.thumb" class="card-img" :alt="singleDrink.name">
            <div class="card-img-overlay text-center">    
                <div class="center-container">
                    <h2 class="card-title">{{singleDrink.name}}</h2>
                    <p class="card-text"><small>{{ singleDrink.category }}</small></p>      
                </div>         
            </div>
        </div>
        </router-link>
</template>

<style lang="scss" scoped>
        .card-img-overlay{
            display: flex;
            flex-direction: column;
            opacity: 0;
            transition: opacity .6s;
            backdrop-filter: brightness(50%);
        &:hover {
            opacity: 1;
        }    
            .center-container{
                margin-top: 30%;
            }
            .text-card{
                width: 33%;
                .img-back{
                    object-fit: contain;
                }
            }
        }
    
</style>