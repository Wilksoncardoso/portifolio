<template >
  <div :style="background">
    <v-container>
      <v-row class="justify-center" >
        <v-col cols="3" sm="3" md="3" lg="1" xl="1" >
        <logo/>
        </v-col>
        <v-col cols="9" sm="9" md="9" lg="8" xl="8" >
          <p class="mb-0">
            Todos direitos reservados
            <a
              href="https://www.linkedin.com/in/wilksonkardoso/"
              class="white--text"
              target="_blank"
              rel="Linkedin"
              >@WilksonCardoso</a
            >
          </p>
          <p class="text-caption white--text mb-2"> Fazer o complexo se tornar simples !</p>
          <p class="text-caption white--text mb-0">
            Desenvolvido em Vue3 + NuxtJS + Vuetify
            <v-icon color="primary" dark> mdi-vuetify</v-icon>
          </p>
          <links class=" d-sm-none " />

        </v-col>
        <v-col
          cols="12"
          lg="3"
          xl="3"
          class="text-center text-xl-right text-lg-right mb-0 mt-2"
        >
          <links class=" d-sm-none d-md-block " />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import links from "../links/index.vue";
import logo from "./will__logo.vue";
export default {
  components: {
    links,logo
  },
  computed: {
    background() {
      return {
        background: this.$vuetify.theme.themes.light.primary + "40",
      };
    },
  },
};
</script>
<style lang="scss">
.d-xs-none{
  @media  (max-width: 600px) {
    display:none;
  }
}
</style>
