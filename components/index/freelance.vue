<template lang="html">
  <div id="consultoria" :style="cssProps">

    <v-container class="">
      <v-row class="justify-space-around " align="center">
        <v-col class="text-center" cols="12">
          <h1 class="mb-0 white--text mt-xl-10 mt-lg-10">
            <span class="text-h4  mr-2">#</span> FREELANCE
            <span class="text-h2">&</span> CONSULTORIA
          </h1>
          <h5 class="mb-3 ml-7 font-weight-regular white--text">
            Estou aberto a qualquer seguimento, conte comigo para realizar seus
            projetos.
            <span class="
                ml-3
                primary
                font-weight-regular
                white--text
                rounded
                px-2
                py-1
                badge__up
              ">UP PROJECTS</span>
          </h5>
        </v-col>
        <v-col cols="10" sm="5" lg="5" xl="4" md="6">
          <simplicidade />
        </v-col>
        <v-col cols="12" sm="10" lg="6" xl="4" md="6">
          <v-card class="px-4 px-lg-12 py-7 " elevation="15" >
            <h1 class="display-2 mb-3">
              Para quem deseja
              <span class="primary--text">tirar uma ideia do papel.</span>
            </h1>

            <p class="text-justify">
              O meu objetivo é ajudar empreendedores a desenvolver seus projetos
              digitais com segurança, qualidade e escalabilidade. Com
              Compromisso total para garantir que seu projeto incorpore as
              melhores tecnologias e tendências, para que você possa alavancar
              seu processo, e aumentar seu negócios.
            </p>
            <h5>Prestagem de serviço</h5>
            <v-chip class="mx-1 mt-4 py-3 " color="primary" small outlined v-for="new__ in data" :key="new__.id">
              <v-icon left> mdi-{{ new__.icon }} </v-icon>
              {{ new__.label }}
            </v-chip>
            <v-divider class="my-4"></v-divider>
            <h5 class="mb-4">Entrar em contato</h5>
            <v-row>
              <v-col cols="6">
                <v-btn block color="primary" class="py-6" target="_blank"
                  href="https://api.whatsapp.com/send/?phone=55091983958559&text&type=phone_number&app_absent=0"
                  aria-label="Entre em contato por whatsapp">
                  <v-icon class="mr-3">mdi-whatsapp</v-icon> Whatsapp</v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn block color="primary" class="py-6 mb-3" target="_blank"
                  href="mailto:eng.wilksoncardoso@gmail.com" aria-label="Entre em contato por E-mail">
                  <v-icon class="mr-3">mdi-email</v-icon> E-mail</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script >
import simplicidade from "../freelance__session/simplicidade__.vue";
import background from "../background/freelance.vue";
import menu__slin from '../menu/menu__slin.vue'

export default {
  components: { simplicidade, background, menu__slin },
  data() {
    return {
      data: [
        { id: 0, label: "Produtos digitais", icon: "label" },
        { id: 1, label: "Processo", icon: "auto-fix" },
        { id: 2, label: "E-commerce", icon: "cart" },
        { id: 3, label: "Aplicativo", icon: "cellphone-cog" },
        { id: 4, label: "Landing page", icon: "web-box" },
        { id: 5, label: "SEO", icon: "search-web" },
        { id: 6, label: "Responsivo", icon: "responsive" },
      ],
    };
  },
  computed: {
    cssProps() {
      switch (this.$vuetify.theme.dark) {
        case true:
          return { backgroundColor: this.$vuetify.theme.themes.dark.primary + '50'  }

        case false:
          return { backgroundColor: this.$vuetify.theme.themes.light.primary + '30' }
      }
    },
  }
};
</script>
<style lang="scss">
.badge__up {
  display: inline-block;
}

#consultoria {
  background-repeat: repeat;

  background-color: #fdfdfd;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='262' height='131'%3E%3Cpath fill='%239C92AC15' fill-opacity='0.4' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");

}
</style>
