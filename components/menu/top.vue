<template v-slot:activator="{ on: tooltip }">
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color=" lighten-3"
      hide-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <logo />
      <v-spacer></v-spacer>

      <v-tooltip bottom v-for="new_button in button" :key="new_button.id">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mr-2 icone__principal v-icon-mobile-none"
            icon
            v-bind="attrs"
            v-on="on"
            :href="new_button.link"
            aria-label="Menubar"
          >

            <v-icon>mdi-{{ new_button.icon }}</v-icon>
          </v-btn>
        </template>
        <span>{{ new_button.tooltip }}</span>
      </v-tooltip>

      <v-switch
        class="mt-5"
        v-model="switch1"
        inset
        v-on:change="theme()"
        aria-label="Mudança de light || Dark"
      ></v-switch>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
            rounded
            elevation="5"
            @click.stop="drawer = !drawer"
            aria-label="Abrir || fechar"
          >
            <v-icon class="mr-2">mdi-account-details-outline</v-icon>
            Perfil
          </v-btn>
        </template>
        <span>Perfil</span>
      </v-tooltip>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-4"
      class="overflow-y-auto"
      style="height: 100vh; overflow-x: hidden; "
    >
      <Nuxt />
    </v-sheet>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
      class="navigation__right"
    >
      <v-list-item>
        <v-row>
          <v-btn
            v-on:click="drawer = false"
            rounded
            elevation="3"
            color="primary"
            class="close__icon"
            x-small
            aria-label="Fechar"
          >
            <v-icon x-small>mdi-close</v-icon> Fechar</v-btn
          >

          <v-col cols="12" class="text-center">
            <v-avatar width="80%" height="100%" class="my-3 mx-auto">
              <!-- src="/img/will__perfil.webp" -->
              <nuxt-img
                alt="Wilkson cardoso, UX / UI"
                src="/1000x1000/c1f2c94ea2/will__perfil.webp"
                sizes="xs:50vw sm:100vw md:50vw lg:400px xl:90vw"
                class="img__end mt-5"
                loading="lazy"
              />
            </v-avatar>
          </v-col>

          <v-col cols="12">
            <h2 class="text-center text-sm-body-2 primary--text">
              Wilkson A. Cardoso
            </h2>
            <h4 class="text-center font-weight-light">
              Engenheiro da computação
            </h4>
            <h5 class="text-center lighten-1 grey--text font-weight-light">
              29 anos, Belém - Pará
            </h5>

            <h5 class="mt-3">Contato</h5>
            <v-divider class="mx-2 my-1"></v-divider>

            <v-row>
              <v-col cols="12">
                <!-- <v-btn
                  elevation="2"
                  color="primary"
                  v-for="new_contato in contato"
                  :key="new_contato.id"
                  fab
                  dark
                  small
                  class="mr-2 mt-2"
                  target="_blank"
                  :href="new_contato.type + new_contato.link"
                  aria-label="Contato"
                >
                  <v-icon>mdi-{{ new_contato.icon }}</v-icon>
                </v-btn> -->
                <links class="mt-2" />
              </v-col>
            </v-row>

            <h5 class="mt-6">Especialidades</h5>
            <v-divider class="mx-2 my-1"></v-divider>

            <v-chip
              class="ma-2"
              outlined
              color="primary"
              v-for="cargo in cargos"
              :key="cargo.id"
            >
              <v-icon class="mr-2"> mdi-{{ cargo.icon }} </v-icon>
              {{ cargo.label }}
            </v-chip>

            <h5 class="mt-6">Breve Resumo</h5>
            <v-divider class="mx-2 my-1"></v-divider>

            <p class="text-justify mx-2 mt-2 text-caption">
              Apaixonado por tecnologia, projetar, desenvolver, resolver
              problemas, aprender com os acertos e principalmente com os erros,
              conferir tendências do mercado, escutar novas ideias, debater, me
              faz crescer diariamente como profissional. Senso de curiosidade e
              determinação, me fez cair neste mundo do desenvolvimento.
            </p>
          </v-col>
          <v-col cols="12" class="text-center">
            <h6 class="text-center">Color Page</h6>
            <v-divider class="mt-2 mb-2"></v-divider>
            <v-btn
              class="ma-1"
              v-for="data in cor"
              :key="data.id"
              elevation="2"
              x-small
              fab
              :value="data.id"
              :color="data.value"
              @click="cores($event)"
              aria-label="mudança de cor"
            >
            </v-btn>
          </v-col>
        </v-row>
      </v-list-item>
    </v-navigation-drawer>
  </v-card>
</template>
<script defer>
import logo from "../logo.vue";
import links from "../links/index.vue";
export default {
  data() {
    return {
      switch1: {},
      drawer: null,

      button: [
        {
          id: 0,
          tooltip: "Início",
          icon: "home",
          link: "/",
        },
        {
          id: 1,
          tooltip: "Resumo profissional",
          icon: "book-open-variant",
          link: "/#Sobre",
        },
        {
          id: 2,
          tooltip: "Freelance & Consultoria",
          icon: "coffee",
          link: "/freelance#consultoria",
        },



      ],

      cor: [
        {
          id: 1,
          value: "#0E58A5",
        },
        {
          id: 2,
          value: "#A40E2C",
        },
        {
          id: 3,
          value: "#009688",
        },
        {
          id: 4,
          value: "#FF9800",
        },
        {
          id: 5,
          value: "#BCD62D",
        },
      ],
      cargos: [
        {
          id: 0,
          icon: "bullseye-arrow",
          label: "Product Owner",
        },
        {
          id: 1,
          icon: "airballoon",
          label: "UX / UI",
        },
        {
          id: 2,
          icon: "coffee",
          label: "Dev",
        },
        {
          id: 3,
          icon: "lightbulb-on ",
          label: "Gestão",
        },
      ],

      // contato: [
      //   {
      //     id: 0,
      //     label: "Telefone",
      //     icon: "phone",
      //     type: "tel:",
      //     link: "091993604184",
      //   },
      //   {
      //     id: 1,
      //     label: "WhatSapp",
      //     icon: "whatsapp",
      //     type: "",
      //     link: "https://api.whatsapp.com/send/?phone=55091993604184&text&type=phone_number&app_absent=0",
      //   },
      //   {
      //     id: 2,
      //     label: "Linkedin",
      //     type: "",
      //     icon: "linkedin",
      //     link: "https://www.linkedin.com/in/wilksonkardoso/",
      //   },
      //   {
      //     id: 3,
      //     label: "E-mail",
      //     type: "mailto:",
      //     icon: "email-fast",
      //     link: "eng.wilksoncardoso@gmail.com",
      //   },
      // ],
    };
  },
  components: {
    logo,links
  },
  methods: {
    cores($event) {
      let click_var = parseInt($event.target.value);

      switch (click_var) {
        case 1:
          this.$vuetify.theme.themes.light.primary = "#0E58A5";
          this.$vuetify.theme.themes.dark.primary = "#0E58A5";
          localStorage.setItem("cor", "#0E58A5");
          break;

        case 2:
          this.$vuetify.theme.themes.dark.primary = "#A40E2C";
          this.$vuetify.theme.themes.light.primary = "#A40E2C";
          localStorage.setItem("cor", "#A40E2C");

          break;

        case 3:
          this.$vuetify.theme.themes.dark.primary = "#009688";
          this.$vuetify.theme.themes.light.primary = "#009688";
          localStorage.setItem("cor", "#009688");

          break;

        case 4:
          this.$vuetify.theme.themes.dark.primary = "#FF9800";
          this.$vuetify.theme.themes.light.primary = "#FF9800";
          localStorage.setItem("cor", "#FF9800");

          break;

        case 5:
          this.$vuetify.theme.themes.dark.primary = "#BCD62D";
          this.$vuetify.theme.themes.light.primary = "#BCD62D";
          localStorage.setItem("cor", "#BCD62D");

          break;
      }
    },
    theme() {
      // console.log(this.switch1)
      if (this.switch1 === true) {
        this.$vuetify.theme.dark = true;
        localStorage.setItem("dark", true);
      } else {
        this.$vuetify.theme.dark = false;
        localStorage.setItem("dark", false);
      }
    },
    cor__primary() {
      setTimeout(() => {
        var color__theme = localStorage.getItem("cor");

        if (color__theme != null) {
          this.$vuetify.theme.themes.dark.primary = color__theme;
          this.$vuetify.theme.themes.light.primary = color__theme;
        }
      }, 500);
    },
    theme__() {
      setTimeout(() => {
        var theme = localStorage.getItem("dark");

        switch (theme) {
          case null:
            this.switch1 = false;
            localStorage.setItem("dark", false);
            break;

          case "true":
            this.switch1 = true;
            this.$vuetify.theme.dark = true;
            break;

          case "false":
            this.switch1 = false;
            this.$vuetify.theme.dark = false;
            break;
        }
      }, 500);
    },
    top() {
      window.scrollTo(0, 1000);
    },
  },
  computed: {
    cssProps() {
      switch (this.$vuetify.theme.dark) {
        case true:
          return { fill: this.$vuetify.theme.themes.dark.primary };

        case false:
          return { fill: this.$vuetify.theme.themes.light.primary };
      }
    },
  },
  mounted() {
    // var dark =  localStorage.setItem("dark", false);

    this.cor__primary();
    this.theme__();

    // if (localStorage.getItem("cor") != "") {
    //   this.cor__primary();
    // }
  },
};
</script>
<style lang="scss">
.v-navigation-drawer {
  width: 400px !important;
}

.v-icon-mobile-none {
  @media (max-width: 600px) {
    display: none !important;
  }
}
.close__icon {
  position: absolute;
  top: 30px;
  left: 20px;
}
body{
  overflow-x: hidden !important;
}
</style>
