<template >
  <div class="sessao__fist" >
    <div class="card__index__fist">
      <v-container class="sessao__margin">
        <v-row class="justify-center" align="center">
          <v-col class="ma-xs-5" cols="12" lg="6" xl="4" md="6" sm="8" xs="6">
            <index__sessao />
          </v-col>
          <v-col class="text-center text-lg-left text-xl-left"  cols="12" lg="6" xl="5" md="6" sm="12" xs="6">
            <span class="font-weight-medium primary--text text-h3">
                UX / UI teste</span
              >
            <h1 class="text-h2 text-lg-h1 font-weight-black ">Wilkson</h1>
            <h1 class="text-h2 text-lg-h1 font-weight-black mb-3 ">

              Cardoso
            </h1>
            <h5 class="grey--text lighten-1">HOJE MELHOR DO QUE ONTEM, AMANHÃ MELHOR DO QUE HOJE.</h5>
            <v-divider class="my-3"></v-divider>
            <v-chip
              class="ma-2 chip__fist "
              color="primary"
              outlined
              v-for="icon in icons"
              :key="icon.id"
            >
              <v-icon color="primary" left> mdi-{{ icon.icon }} </v-icon>
              {{ icon.text }}
            </v-chip>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- <top__sessao /> -->

    <sobre__will__atualizado />
    <!-- <sobre__bottom/> -->



    <div class="card__index__secon  ">
      <sessao__secon  class="sessao__margin"/>
    </div>
    <sessao__cards/>
    <desafio__session class="sessao__margin" />

    <!-- <end__session /> -->
  </div>
</template>
<script defer>
import top__sessao from "../components/divider/Top__index__sessao.vue";
import top__secon__sessao from "../components/divider/Top__secon__sessao.vue";
// divider sessao

import index__sessao from "../components/index/index__will.vue"; //fist sessao
import sessao__secon from "../components/index/secon__sessao.vue"; //hard skill
// conteudo de sessao

import menu_top from "../components/menu/top.vue";

//sesao cards
import sessao__cards from '../components/index/session__cards.vue'

// sessao sobre will
import sobre__will__atualizado from "../components/index/sobre/session__sobre.vue";
import sobre__bottom from "../components/index/sobre/divider__session__bottom.vue";


import desafio__session from '../components/index/session__desafio.vue'
// sessão freelance



import end__session from "../components/end__session/end.vue";
// end sessao



export default {
  name: "IndexPage",
  data() {
    return {
      icons: [
        {
          id:0,
          icon: "application-braces-outline",
          text: "Desenvolvimento",
        },
        {
          id:1,
          icon: "airballoon",
          text: "Inovação",
        },
        {
          id:2,
          icon: "file-tree-outline",
          text: "Prototipação",
        },
        {
          id:3,
          icon: "fingerprint",
          text: "Identidade visual",
        },

      ],

    };
  },
  components: {
    top__sessao,
    desafio__session,
    index__sessao,
    sessao__cards,
    sobre__will__atualizado,
    sobre__bottom,
    menu_top,
    top__secon__sessao,
    sessao__secon,
    end__session

},
  computed: {
    cssProps() {
      return {
        "--bs-primary": this.$vuetify.theme.themes.light.primary,
      };
    },
    background() {
      return {
        background: this.$vuetify.theme.themes.light.primary,
      };
    },
  },

};
</script>
<style lang="scss">
body {
  font-family: "Montserrat";
  overflow-x: hidden;
}
:root {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #5e5e5e;
  --bs-gray-200: #e9ecef;
  --bs-gray-300: #dee2e6;
  --bs-gray-400: #ced4da;
  --bs-gray-500: #bdbdbd;
  --bs-gray-600: #6c757d;
  --bs-gray-700: #555555;
  --bs-gray-800: #414344;
  --bs-gray-900: #373737;
  --background-fist: #121214;
  --background-secon: #1a1a1a;
  --bs-primary: #1976d2;
  --bs-primary-dark: #2e353b;
  --bs-card: #202020;
}
/* @font-face{
  font-family:"Material Design Icons";
  font-style: normal;
  src: url(https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css);
  font-display:swap !important;
} */
.theme--light {
  .card__index__fist {
    background: #fcfcfc;
  }
  .sessao__fist {
    background: #fcfcfc;
  }
  .card__index__secon {
    background: #fcfcfc;
  }
  .chip__fist{
    .v-application .primary--text{
      color: #fcfcfc;
    }
  }
}
.theme--dark {
  .card__index__secon {
    background: var(--background-secon);
  }
}
.sessao__fist {
  // height: 100vh;
  width: 100%;
  background: rgb(14, 14, 15) none repeat scroll 0% 0%;
}

.card__index__fist {
  padding: 18vh 0;
  background: var(--background-fist);
  /* @media (min-width: 1300px) {
    padding: 18vh 0;

  } */
}
.sessao__margin {
  padding: 10vh 0;
}
.text-xs-center{
  @media (max-width: 600px){
    text-align: center;
  }
}
.mobile--text--h1{
  @media (max-width: 400px){
  font-size: 4rem !important;
  }
  @media  (min-width: 400px)and(max-width: 500px){
  font-size: 5rem !important;
  }
  @media (min-width: 500px)and(max-width: 1000px){
  font-size: 6rem !important;
  line-height:90px;

  }
  @media (min-width: 1000px)and(max-width: 1500px){
  font-size: 6rem !important;
  line-height:90px;
  }
  @media (min-width: 1500px){
  font-size: 6rem !important;
  line-height: 1;
  }
}
.footer {
  background: #fff;
}
</style>
