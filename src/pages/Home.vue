<script>
import axios from 'axios';
import CardCocktail from '../components/CardCocktail.vue';


export default {
    components: {
        CardCocktail,
    },
    data() {
        return {
            cocktailsList:{},
        }
    },
    methods: {
        fetchData() {
            axios.get('http://127.0.0.1:8000/api/cocktails')
                .then((response) => {
                    //ottengo i dati relativi ai cocktails
                    this.cocktailsList = response.data.slice(0 , 2);

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
    <div class="container main-container">
        <h1 class="text-center style-text">Cocktail Lounge</h1>
        <p class="text-center mb-5 fst-italic"> The Best Lounge Bar in Boolean</p>
        <p class="text-center mb-5 px-5 fst-italic">Benvenuti nella nostra esclusiva pagina di cocktail, un luogo dove l'eleganza e il gusto si incontrano per creare esperienze indimenticabili. Qui, ogni bevanda è una forma d'arte, un'esplosione di sapori e colori che delizia non solo il palato, ma anche gli occhi. La nostra selezione di cocktail è curata con passione da mixologist di classe mondiale, che utilizzano solo gli ingredienti più pregiati e le tecniche più raffinate. Che tu sia un esperto di cocktail o un principiante alla ricerca di nuove esperienze gustative, ti invitiamo a immergerti in questo mondo di sofisticate libagioni, dove l'atmosfera è sempre carica di stile e fascino. Siate pronti a innamorarvi di nuovi sapori e a celebrare l'arte della mixologia in modo unico ed indimenticabile. Benvenuti nel regno del cocktail di classe.</p>
        <div class="row row-cols-3 g-5 justify-content-center">
            <div class="col" v-for="cocktail in cocktailsList" :key="cocktail.id">
                <CardCocktail :singleDrink="cocktail"></CardCocktail>
            </div>
        </div>

        <div class="text-center mt-5">
            <router-link class="btn load-more" :to='{name: "cocktails"}'>See More</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .main-container{
        margin-top: 6rem;

        .load-more{
            color: white;
            background-color: #80725F;
            border: 0;
            font-size: 1.4rem;
            font-family: 'Dancing Script', cursive;
            padding: .5rem 2.5rem;

            &:active {
                background-color: #4d453b;
            }

            &:hover {
                background-color: #6e5f4c;

            }
        }
    }
</style>