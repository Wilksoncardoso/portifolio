<template >
  <div :style="background">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" sm="9" md="9" lg="9" xl="9">
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
          <p class="text-caption white--text mb-0">
            Desenvolvido em Vue3 + NuxtJS + Vuetify
            <v-icon color="primary" dark> mdi-vuetify</v-icon>
          </p>
        </v-col>
        <v-col
          cols="12"
          sm="3"
          md="3"
          lg="3"
          xl="3"
          class="text-center text-xl-right text-lg-right text-sm-right mb-0 mt-2"
        >
          <links />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import links from "../links/index.vue";

export default {
  components: {
    links,
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
.footer {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  a {
    font-weight: 800;
    text-decoration: none;
  }
}
</style>
