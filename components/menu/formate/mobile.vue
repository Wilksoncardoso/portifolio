<template >
  <div>
    <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    height="100%"
    max-width="100%"
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group
        v-model="group"
        active-class="primary"
      >
          <v-btn icon small  @click="(drawer = false)" absolute class="close__button">
            <v-icon>mdi-close</v-icon>
          </v-btn>

        <div class="text-center my-5">
          <logo___ />

        </div>
        <v-divider class="mb-5"></v-divider>

        <v-list-item v-for="data in links" :key="data.id" :to="data.link">
          <v-list-item-icon >
            <v-icon>mdi-{{data.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{data.tooltip}}</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <div class="text-center">
          <links class="mt-5"/>
        </div>


      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
    <v-app-bar
    class="menu__mob px-2"
    height="70"
  >

  <v-toolbar-title>
    <logo___ />
  </v-toolbar-title>

  <v-spacer></v-spacer>
  <v-switch class="mt-5 ml-3"  v-model="switch1" inset v-on:change="theme()"
                      aria-label="Mudança de light || Dark"></v-switch>
                      <modal__color  />
  <v-app-bar-nav-icon @click="drawer = true"  aria-label="Menu item"></v-app-bar-nav-icon>



 </v-app-bar>
  </div>
</template>
<script>
import logo___ from "./../../logo.vue";
import links from "./../../links/index.vue";
import modal__color from "./../../menu/modal__color.vue"

export default {
  props:{
    links:{
      type: Array,
      required: true
    }
  },
  data() {
    return {
      drawer: false,
      group: null,
    }
  },
  methods:{
    theme() {
      if (this.switch1 === true) {
        this.$vuetify.theme.dark = true;
        localStorage.setItem("dark", true);
      } else {
        this.$vuetify.theme.dark = false;
        localStorage.setItem("dark", false);
      }
    },
  },
components:{logo___, links, modal__color}
}
</script>
<style lang="scss">
.logo__{
  @media (max-width: 900px) {

    width: 18vh!important;
  }
}
.close__button{
  top: 0;
  right: 2vh;
}

.v-list-item--active{
  .v-list-item__icon, .v-list-item__title{
    color: white !important;
  }
opacity: 1 !important;

}
</style>
