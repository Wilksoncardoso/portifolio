<template >
  <div>
    <v-container class="position-absolute" >
      <v-card class="mx-xl-16 mx-auto">
        <nav>
          <v-row class="px-7 py-1 mt-4" align="center">
          <v-col class="text-center px-xl-10" cols="2">
            <logo />
          </v-col>
          <v-col cols="8">
            <div class="link__navbar" >
              <v-btn
                v-for="data in button"
                :key="data.id"
                :href="data.link"
                :class="data.status"
                :color="data.color"
                class="mr-2 px-4 py-2"
                rounded
             >
             <div  style="display:ruby">
              <v-icon small>mdi-{{ data.icon }}</v-icon>
              <h6 class="text-small font-weight-regular">{{ data.tooltip }}</h6>
             </div>
              </v-btn>
            </div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col class="text-center" cols="2">
            <p class="text-caption white--text mb-2">Entrar em contato</p>
            <links/>
          </v-col>

        </v-row>
        </nav>
      </v-card>
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
              class="close__icon "
              x-small
              aria-label="Fechar"
            >
              <v-icon x-small>mdi-close</v-icon> Fechar</v-btn
            >

            <v-col cols="12" class="text-center">
              <v-avatar width="80%" height="100%" class="my-3 mx-auto">
                <nuxt-img
                  src="img/will__perfil_aog6zz.webp"
                  alt="Wilkson cardoso, UX / UI"
                  sizes="xs:200px sm:350px md:400px lg:400px xl:500px"
                  width="100"
                  height="100"
                  class="img__end mt-5 "
                  loading="lazy"
                  preload
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
                  <v-btn
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
                  </v-btn>
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
                problemas, aprender com os acertos e principalmente com os
                erros, conferir tendências do mercado, escutar novas ideias,
                debater, me faz crescer diariamente como profissional. Senso de
                curiosidade e determinação, me fez cair neste mundo do
                desenvolvimento.
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
    </v-container>
  </div>
</template>
<script>
import logo from "../../components/logo.vue";
import footer_web from "../../components/footer/index.vue";
import links from '../../components/links/index.vue'
import { LOADIPHLPAPI } from "dns";
export default {
  // name: "DefaultLayout",

  data() {
    return {
      switch1: {},
      drawer: null,

      button: [
        {
          id: 0,
          tooltip: "Ínicio",
          icon: "home",
          link: "/?page=home",
          status:''
        },

        {
          id: 1,
          tooltip: "Freelance",
          icon: "briefcase-arrow-left-right",
          link: "/freelance?page=freelance",
          status:'ativo',
          color:'primary'
        },

        {
          id: 2,
          tooltip: "Perfil",
          icon: "account-details-outline",
          link: "",
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
      contato: [
        {
          id: 0,
          label: "Telefone",
          icon: "phone",
          type: "tel:",
          link: "091993604184",
        },
        {
          id: 1,
          label: "WhatSapp",
          icon: "whatsapp",
          type: "",
          link: "https://api.whatsapp.com/send/?phone=55091993604184&text&type=phone_number&app_absent=0",
        },
        {
          id: 2,
          label: "Linkedin",
          type: "",
          icon: "linkedin",
          link: "https://www.linkedin.com/in/wilksonkardoso/",
        },
        {
          id: 3,
          label: "E-mail",
          type: "mailto:",
          icon: "email-fast",
          link: "eng.wilksoncardoso@gmail.com",
        },
      ],
    };
  },
  components: {
    logo,
    footer_web,
    links
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
    // var url_atual = window.location.href;
    // console.log(url_atual)

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
.v-container {
  overflow-y: hidden !important;
  overflow-x:hidden !important; display: block;
}
.text-small {
  font-size: 0.6rem;
}
.position-absolute{
  position: absolute;
}
nav{
  .link__navbar{
    .v-btn{
      opacity: 0.4;
    }
  }
  .ativo{
    opacity: 1 !important;
  }
}
</style>
