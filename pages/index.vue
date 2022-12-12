<template lang="html">
  <div class=" mt-16 mt-xl-16 mt-lg-16 " >
    <fist__sessao />
    <sobre__will__atualizado />
    <div class="card__index__secon  ">
      <sessao__secon  class="sessao__margin"/>
    </div>
    <sessao__cards/>
    <desafio__session class="sessao__margin" />

    <!-- <end__session /> -->
  </div>
</template>
<script>
import fist__sessao from "../components/index/fist/fist__sessao.vue";
import sessao__secon from "../components/index/secon__sessao.vue";
//hard skill
//sesao cards
import sessao__cards from '../components/index/session__cards.vue'

// sessao sobre will
import sobre__will__atualizado from "../components/index/sobre/session__sobre.vue";

import desafio__session from '../components/index/session__desafio.vue'
// sessão freelance

export default {
  name: "IndexPage",
  loading: false,

  data: () => ({
      loading: false
    }),
  components: {
    fist__sessao,
    sobre__will__atualizado,
    sessao__secon,
    sessao__cards,
    desafio__session,
},

mounted() {
    this.$nextTick(() => {
      console.log(this.$nuxt.$loading)
      this.$nuxt.$loading.start()

       setTimeout(() => this.$nuxt.$loading.finish()
      , 500)
    })
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
  padding: 2vh 0;
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

</style>
