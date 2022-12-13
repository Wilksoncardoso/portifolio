<template lang="html">
  <div class=" mt-16 mt-xl-16 mt-lg-16 ">
    <fist__sessao />
    <sobre__will__atualizado />
    <!-- <div class="card__index__secon  ">
      <sessao__secon  class="sessao__margin"/>
    </div> -->
    <card__hard__skill />
    <sessao__cards />
    <desafio__session class="sessao__margin" />

    <!-- <end__session /> -->
  </div>
</template>
<script>

import fist__sessao from "../components/index/fist/fist__sessao.vue";
// sessao sobre will
import sobre__will__atualizado from "../components/index/sobre/session__sobre.vue";

import card__hard__skill from "../components/index/hard__skill/fist.vue"
import sessao__secon from "../components/index/secon__sessao.vue";
//hard skill
//sesao cards
import sessao__cards from '../components/index/session__cards.vue'


import desafio__session from '../components/index/session__desafio.vue'
// sessão freelance

export default {
  name: "IndexPage",
  components: {
    fist__sessao,
    sobre__will__atualizado,
    card__hard__skill,
    sessao__secon,
    sessao__cards,
    desafio__session,
  },



};
</script>
<style lang="scss">
body {
  font-family: "Montserrat";
  overflow-x: hidden;
}

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

  .chip__fist {
    .v-application .primary--text {
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
  width: 100%;
  background: rgb(14, 14, 15) none repeat scroll 0% 0%;
}

.card__index__fist {
  padding: 2vh 0;
  background: var(--background-fist);

}

.sessao__margin {
  padding: 10vh 0;
}

.text-xs-center {
  @media (max-width: 600px) {
    text-align: center;
  }
}
</style>
