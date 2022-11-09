<template>
  <div id="consultoria" >
    <v-container>
      <v-row class="justify-space-around" align="center">
        <v-col class="text-center" cols="12">
          <h1 class="mb-0 white--text" >
            <span class="text-h4  mr-2">#</span> FREELANCE
            <span class="text-h2">&</span> CONSULTORIA
          </h1>
          <h5 class="mb-3 ml-7 font-weight-regular white--text">
            Estou aberto a qualquer seguimento, conte comigo para realizar seus
            projetos.
            <span
              class="
                ml-3
                primary
                font-weight-regular
                white--text
                rounded
                px-2
                py-1
                badge__up
              "
              >UP PROJECTS</span
            >
          </h5>
        </v-col>
        <v-col cols="10" sm="5" lg="5" xl="4" md="6">
          <simplicidade />
        </v-col>
        <v-col cols="12" sm="10" lg="6" xl="4" md="6">
          <v-card class="px-4 px-lg-12 py-7 " elevation="15"  light>
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
            <v-chip
              class="mx-1 mt-4 py-3 "
              color="primary"
              small
              outlined
              v-for="new__ in data"
              :key="new__.id"
            >
              <v-icon left> mdi-{{ new__.icon }} </v-icon>
              {{ new__.label }}
            </v-chip>
            <v-divider class="my-4"></v-divider>
            <h5 class="mb-4">Entrar em contato</h5>
            <v-row>
              <v-col cols="6">
                <v-btn
                  block
                  color="primary"
                  class="py-6"
                  target="_blank"
                  href="https://api.whatsapp.com/send/?phone=55091983958559&text&type=phone_number&app_absent=0"
                  aria-label="Entre em contato por whatsapp"
                >
                  <v-icon class="mr-3">mdi-whatsapp</v-icon> Whatsapp</v-btn
                >
              </v-col>
              <v-col cols="6">
                <v-btn
                  block
                  color="primary"
                  class="py-6 mb-3"
                  target="_blank"
                  href="mailto:eng.wilksoncardoso@gmail.com"
                  aria-label="Entre em contato por E-mail"
                >
                  <v-icon class="mr-3">mdi-email</v-icon> E-mail</v-btn
                >
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

export default {
  components: { simplicidade, background },
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

};
</script>
<style lang="scss">
.badge__up {
  display: inline-block;
}
#consultoria{
  background-color: #FFB863;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ff6931'/%3E%3Cstop offset='1' stop-color='%23ff6931' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%234cff31'/%3E%3Cstop offset='1' stop-color='%234cff31' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%239900ff'/%3E%3Cstop offset='1' stop-color='%239900ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FFB863'/%3E%3Cstop offset='1' stop-color='%23FFB863' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FF0000'/%3E%3Cstop offset='1' stop-color='%23FF0000' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230CF'/%3E%3Cstop offset='1' stop-color='%230CF' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}


</style>
