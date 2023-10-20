import { createRouter, createWebHistory } from "vue-router";

// importazione componenti singole pagine
import HomePage from "./pages/Home.vue";
import ShowPage from "./pages/ShowPage.vue";
import AboutUsPage from "./pages/AboutUs.vue";
import ContactsPage from "./pages/Contacts.vue";
import NotFoundPage from "./pages/NotFound.vue";


const routes = [
  {
    path: "/", 
    name: "home", // nome della rotta da usare per creare un link
    component: HomePage 
  },

  {
    path: "/cocktail/:id",
    name: "cocktail.show",
    component: ShowPage,
  },

  {
    path: "/aboutus",
    name: "about_us",
    component: AboutUsPage,
  },

  {
    path: "/contacts",
    name: "contacts",
    component: ContactsPage,
  }, 

  {
    path: "/:pathMatch(.)",
    name: "not-found",
    component: NotFoundPage,
  }, 

]

// creazione istanza di Router
const router = createRouter({
  history: createWebHistory(),
  routes
});

export { router };



/* istruzioni per i link alle pagine nel front

// creiamo un link usando il path della rotta
<router-link to="/">Home</router-link>
<router-link :to="'/posts/' + post.id">Dettagli post</router-link>

// creiamo un link usando il name della rotta
<router-link :to="{ name:'posts.index' }">Posts</router-link>
// link ad una rotta che richiede un parametro dinamico
<router-link :to="{ name:'posts.show', params: { id: post.id } }">Dettagli post</router-link>

*/