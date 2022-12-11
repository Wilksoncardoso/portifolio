<template >
  <div>
    <div class="card__menu">
      <v-card class=" mx-auto">
        <nav>
          <v-row class="px-10 py-1 mt-4" align="center">
            <v-col class="text-center px-xl-10" cols="3">
              <logo />
            </v-col>
            <v-col cols="9" class="text-right">
              <div class="link__navbar ">
                <ul>
                  <li class="mb-0" v-for="data in links">
                    <v-btn color="primary" :key="data.id" :to="data.link" :class="[data.status, ]"
                      class="nav__button mr-2 px-4 py-2" rounded>
                        <v-icon small color="white">mdi-{{ data.icon }}</v-icon>
                        <h6 class="text-small font-weight-regular text--white" >{{ data.tooltip }}</h6>
                    </v-btn>
                  </li>
                  <li class="mb-0">
                    <v-switch class="my-0 ml-3"  v-model="switch1" inset v-on:change="theme()"
                      aria-label="Mudança de light || Dark"></v-switch>
                  </li>
                  <li>
                    <modal__color />
                  </li>
                </ul>
              </div>
            </v-col>
          </v-row>
        </nav>
      </v-card>

    </div>
  </div>
</template>
<script>
import logo from "../../../components/logo.vue";
import footer_web from "../../footer/index.vue";
import modal__color from '../modal__color.vue';
export default {
  // name: "DefaultLayout",
  props:{
    links:{
      type: Array,
      required: true
    }
  },
  data() {
    return {
      switch1: true,
      drawer: null,
      color_menu: {
        color: ''
      },

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
    modal__color
  },
  methods: {

    theme() {
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
            this.switch1 = true;
            localStorage.setItem("dark", true);
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
    this.cor__primary();
    this.theme__();

  },
};
</script>
<style lang="scss">


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
  overflow-x: hidden !important;
  display: block;
}

.text-small {
  font-size: 0.6rem;
  color: #ffffff;
}


.card__menu {
  position: absolute;
  left: 0;
  right: 0;
  margin-left: 10% !important;
  margin-right: 10% !important;
  max-width: 1050px;
  min-width: 900px;
  margin: 0 auto !important;

  .v-card {


    nav {
      .link__navbar {
        align-items: flex-end;

        ul {
          display:-webkit-inline-box;
          list-style: none;
          height: 40px;

          li {
            margin-bottom: 0 !important;
          }
        }

        .nav__button {
          opacity: 0.4;

        }
        .v-btn--active  .nav__button {
          opacity: 1 !important;
        }
      }

      .v-btn--active {
        opacity: 1 !important;
      }
    }
  }

}

.theme--light {
  .card__menu {
    .v-card {
      mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 5%, #ffffff 95%, rgba(255, 255, 255, 0) 100%) !important;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(44, 44, 44, 0.2) 25%, rgba(44, 44, 44, 0.2) 75%, rgba(255, 255, 255, 0) 100%) !important;
    }
  }
}

.theme--dark {
  .card__menu {
    .v-card {
      mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 2%, #ffffff 98%, rgba(255, 255, 255, 0) 100%) !important;
      background: linear-gradient(90deg, rgba(14, 14, 14, 0.0) 0%, rgba(14, 14, 14, 0.2) 10%, rgba(14, 14, 14, 0.2) 70%, rgbargba(14, 14, 14, 0.0) 100%) !important;
    }
  }
}
</style>
