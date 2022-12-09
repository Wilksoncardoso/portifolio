<template>
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
          return {
            backgroundColor: this.$vuetify.theme.themes.dark.primary + '40'
          }

        case false:
          return { backgroundColor: this.$vuetify.theme.themes.light.primary + '98' }
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
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='%235F3' stroke-width='1' stroke-opacity='0.2'%3E%3Crect x='-40' y='40' width='75' height='75'/%3E%3Crect x='-35' y='45' width='65' height='65'/%3E%3Crect x='-30' y='50' width='55' height='55'/%3E%3Crect x='-25' y='55' width='45' height='45'/%3E%3Crect x='-20' y='60' width='35' height='35'/%3E%3Crect x='-15' y='65' width='25' height='25'/%3E%3Crect x='-10' y='70' width='15' height='15'/%3E%3Crect x='-5' y='75' width='5' height='5'/%3E%3Crect width='35' height='35'/%3E%3Crect x='5' y='5' width='25' height='25'/%3E%3Crect x='10' y='10' width='15' height='15'/%3E%3Crect x='15' y='15' width='5' height='5'/%3E%3Crect x='40' width='75' height='75'/%3E%3Crect x='45' y='5' width='65' height='65'/%3E%3Crect x='50' y='10' width='55' height='55'/%3E%3Crect x='55' y='15' width='45' height='45'/%3E%3Crect x='60' y='20' width='35' height='35'/%3E%3Crect x='65' y='25' width='25' height='25'/%3E%3Crect x='70' y='30' width='15' height='15'/%3E%3Crect x='75' y='35' width='5' height='5'/%3E%3Crect x='40' y='80' width='35' height='35'/%3E%3Crect x='45' y='85' width='25' height='25'/%3E%3Crect x='50' y='90' width='15' height='15'/%3E%3Crect x='55' y='95' width='5' height='5'/%3E%3Crect x='120' y='-40' width='75' height='75'/%3E%3Crect x='125' y='-35' width='65' height='65'/%3E%3Crect x='130' y='-30' width='55' height='55'/%3E%3Crect x='135' y='-25' width='45' height='45'/%3E%3Crect x='140' y='-20' width='35' height='35'/%3E%3Crect x='145' y='-15' width='25' height='25'/%3E%3Crect x='150' y='-10' width='15' height='15'/%3E%3Crect x='155' y='-5' width='5' height='5'/%3E%3Crect x='120' y='40' width='35' height='35'/%3E%3Crect x='125' y='45' width='25' height='25'/%3E%3Crect x='130' y='50' width='15' height='15'/%3E%3Crect x='135' y='55' width='5' height='5'/%3E%3Crect y='120' width='75' height='75'/%3E%3Crect x='5' y='125' width='65' height='65'/%3E%3Crect x='10' y='130' width='55' height='55'/%3E%3Crect x='15' y='135' width='45' height='45'/%3E%3Crect x='20' y='140' width='35' height='35'/%3E%3Crect x='25' y='145' width='25' height='25'/%3E%3Crect x='30' y='150' width='15' height='15'/%3E%3Crect x='35' y='155' width='5' height='5'/%3E%3Crect x='200' y='120' width='75' height='75'/%3E%3Crect x='40' y='200' width='75' height='75'/%3E%3Crect x='80' y='80' width='75' height='75'/%3E%3Crect x='85' y='85' width='65' height='65'/%3E%3Crect x='90' y='90' width='55' height='55'/%3E%3Crect x='95' y='95' width='45' height='45'/%3E%3Crect x='100' y='100' width='35' height='35'/%3E%3Crect x='105' y='105' width='25' height='25'/%3E%3Crect x='110' y='110' width='15' height='15'/%3E%3Crect x='115' y='115' width='5' height='5'/%3E%3Crect x='80' y='160' width='35' height='35'/%3E%3Crect x='85' y='165' width='25' height='25'/%3E%3Crect x='90' y='170' width='15' height='15'/%3E%3Crect x='95' y='175' width='5' height='5'/%3E%3Crect x='120' y='160' width='75' height='75'/%3E%3Crect x='125' y='165' width='65' height='65'/%3E%3Crect x='130' y='170' width='55' height='55'/%3E%3Crect x='135' y='175' width='45' height='45'/%3E%3Crect x='140' y='180' width='35' height='35'/%3E%3Crect x='145' y='185' width='25' height='25'/%3E%3Crect x='150' y='190' width='15' height='15'/%3E%3Crect x='155' y='195' width='5' height='5'/%3E%3Crect x='160' y='40' width='75' height='75'/%3E%3Crect x='165' y='45' width='65' height='65'/%3E%3Crect x='170' y='50' width='55' height='55'/%3E%3Crect x='175' y='55' width='45' height='45'/%3E%3Crect x='180' y='60' width='35' height='35'/%3E%3Crect x='185' y='65' width='25' height='25'/%3E%3Crect x='190' y='70' width='15' height='15'/%3E%3Crect x='195' y='75' width='5' height='5'/%3E%3Crect x='160' y='120' width='35' height='35'/%3E%3Crect x='165' y='125' width='25' height='25'/%3E%3Crect x='170' y='130' width='15' height='15'/%3E%3Crect x='175' y='135' width='5' height='5'/%3E%3Crect x='200' y='200' width='35' height='35'/%3E%3Crect x='200' width='35' height='35'/%3E%3Crect y='200' width='35' height='35'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: repeat;
}
</style>
