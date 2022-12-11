<template >
  <div :style="cssProps" id="Sobre">
    <v-container>
      <v-row class="py-10 row justify-space-around align-center">
        <v-col cols="12" xl="4" lg="5" sm="6">
          <v-card elevation="10" class="pa-10">
            <h1 class="mb-0"><span class="primary--text">#</span> Sobre</h1>
            <h5 class="mb-3 ml-7 font-weight-regular grey--text lighten-1">
              Conhecendo um pouco.
            </h5>
            <v-divider class="my-4"></v-divider>

            <p class="text-justify">
              Apaixonado por tecnologia, projetar, desenvolver, resolver
              problemas,
              <span class="primary--text">
                <b>aprender</b> com os acertos e principalmente com os
                erros</span
              >, conferir tendências do mercado, escutar novas ideias debater
              possíveis soluções, me faz crescer diariamente como profissional.
              Minhas curiosidades diárias e determinação, me fez cair neste
              mundo do desenvolvimento e criação.
            </p>
          </v-card>
        </v-col>
        <v-col class="text" cols="8" xl="4" lg="5"  sm="5">
          <vetor__sessao    />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import sobre__top from "../sobre/divider__session__top.vue";
import  vetor__sessao  from "./vetor__sobre.vue";
export default {
  components: {
    sobre__top,
    vetor__sessao
  },
  computed: {
    cssProps() {
      switch (this.$vuetify.theme.dark) {
        case true:
          return { background: this.$vuetify.theme.themes.dark.primary+'10' };
        case false:
          return { background: this.$vuetify.theme.themes.light.primary+'10' };
      }
    },
  },
};
</script>

