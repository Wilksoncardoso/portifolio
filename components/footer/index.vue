<template >
  <div :style="background">
    <v-container>
      <v-row class="justify-center" >
        <v-col cols="3" sm="2" md="2" lg="1" xl="1" >
        <logo/>
        </v-col>
        <v-col cols="9" sm="7" md="7" lg="8" xl="8" >
          <p class="mb-0">
            Todos direitos reservados
            <a
              href="https://www.linkedin.com/in/wilksonkardoso/"
              class=""
              target="_blank"
              rel="Linkedin"
              >@WilksonCardoso</a
            >
          </p>
          <p class="text-caption  mb-2"> Fazer o complexo se tornar simples !</p>
          <p class="text-caption  mb-0">
            Desenvolvido Vue3 + NuxtJS + Vuetify
            <v-icon color="primary" dark> mdi-vuetify</v-icon>
          </p>
          <v-divider class="my-3  d-sm-none"></v-divider>
          <p class="text-caption   d-sm-none">Me encontre, através</p>
          <v-btn to="/perfil">teste</v-btn>
          <links class=" d-sm-none" />

        </v-col>
        <v-col
          cols="12"
          md="3"
          sm="3"
          lg="3"
          xl="3"
          class="text-center text-xl-right text-lg-right mb-0 mt-2  d-md-block d-xs-none"
        >
        <p class="text-caption  mb-2">Me encontre, através</p>
          <links  />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import links from "../links/index.vue";
import logo from "./will__logo.vue";
export default {
  layout:'onelayout',
  name:'footer',
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
