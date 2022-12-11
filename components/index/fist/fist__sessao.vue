<template >
    <div class=" position-relative ">
        <nuxt-img src="img/persona__right.webp" alt="Wilkson cardoso, UX / UI"
            sizes=" sm:384px md:400px lg:400px xl:80vw" class=" mt-5 will__index" loading="lazy" preload />
        <background />

        <v-container>
            <v-row class="index--card justify-center index-session" align="center">
                <v-col cols="12" lg="4" xl="4">
                    <h1 class="font-weight-medium primary--text mb-3">UX / UI / DEV</h1>
                    <h1 class="text-h2 text-lg-h1 font-weight-black mb-3 ">Wilkson</h1>
                    <h1 class="text-h2 text-lg-h1 font-weight-black mb-3 ">Cardoso</h1>
                    <h5 class="grey--text lighten-1 z-index">"Hoje melhor do que ontem, amanhã melhor do que hoje." -
                        Kaisen </h5>
                    <v-row class="mt-4">
                        <v-col col="6">
                            <v-btn to="/perfil" class="py-7" block color="primary">Contato</v-btn>
                        </v-col>
                        <v-col col="6">
                            <v-btn href="#projetos" class="py-7" block outlined color="primary">Projetos</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="4" xl="5"></v-col>
                <v-col cols="12" lg="4" xl="3" >
                    <h4 class="text-center mb-2">Habilidades desempenhadas</h4>
                    <div class="list-group">
                        <div class="list-item" v-for="data in icons" :key="data.id" :style="border">
                            <v-icon color="primary" large >mdi-{{data.icon}}</v-icon>
                            <h5 class="primary--text">{{data.text}}</h5>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import background from "../fist/svg__img__back.vue";
export default {
    data() {
        return {
            icons: [
                {
                    id: 0,
                    icon: "application-braces-outline",
                    text: "Desenvolvimento",
                },
                {
                    id: 1,
                    icon: "airballoon",
                    text: "Gestão",
                },
                {
                    id: 2,
                    icon: "file-tree-outline",
                    text: "Prototipação",
                },
                {
                    id: 3,
                    icon: "fingerprint",
                    text: "Identidade visual",
                },
                {
                    id: 4,
                    icon: "palette",
                    text: "Design Palette",
                },
                {
                    id: 5,
                    icon: "responsive",
                    text: "Responsive",
                },

            ],

        };
    },
    components: { background },
    computed: {
        border() {
            return { border: '1px solid' + this.$vuetify.theme.themes.dark.primary+'40' }
        }
    }
}
</script>
<style lang="scss">
.will__index {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    width: 50vh;
    height: auto;
    margin: auto;
    z-index: 1;
    @media  (max-width: 1000px) {
        display:none;
      }
}

.position-relative {
    position: relative;
}

.index-session {
    position: relative;
    z-index: 1;
    @media  (min-width: 1000px) {
      height: 90vh;
      }
}
.list-group{
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: auto auto ;
    .list-item{
        padding: 20px 15px;
        margin: 5px;
        border-radius: 20px;
        @media  (max-width: 600px) {
            padding: 10px 15px;

        }
    }
}
</style>
