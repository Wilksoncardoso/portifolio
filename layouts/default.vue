<template >
  <v-app dark id="app" style="overflow-x:hidden !important">
    <menu__slin />
    <Nuxt />
    <footer__ />
  </v-app>
</template>
<script>
import menu__slin from '../components/menu/menu__slin.vue';
import footer__ from '../components/footer/index.vue'
export default {
  name: "DefaultLayout",

  components: {
    menu__slin,
    footer__
  },
};
</script>




