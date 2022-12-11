<template >
  <div >
    <v-container>
      <v-row class="justify-center perfil" align="center">
        <v-col cols="12" lg="4" xl="3" class="text-center">
          <v-avatar width="100%" height="100%" class="my-3 mx-auto" elevation="10">
            <nuxt-img src="img/will__perfil_aog6zz.webp" alt="Wilkson cardoso, UX / UI"
              sizes=" sm:384px md:400px lg:400px xl:110vw" class=" mt-5 " loading="lazy" preload />
          </v-avatar>
        </v-col>
        <v-col class="mb-10 mt-xl-16 mt-lg-16 " cols="12" lg="6" xl="5">
          <v-card class="px-5 py-5 px-xl-10 py-xl-8" elevation="10">
            <h1 class=" primary--text">
              Wilkson A. Cardoso
            </h1>
            <h4 class=" font-weight-light">
              Engenheiro da computação
            </h4>
            <h5 class=" lighten-1 grey--text font-weight-light">
              29 anos, Belém - Pará
            </h5>

            <h5 class="mt-6">Entre em contato</h5>
            <v-divider class="mx-2 my-1"></v-divider>
            <links />

            <h5 class="mt-6">Especialidades</h5>
            <v-divider class="mx-2 my-1"></v-divider>

            <v-chip class="ma-1 px-2 py-4" small outlined color="primary" v-for="cargo in cargos" :key="cargo.id">
              <v-icon class="mr-2 "> mdi-{{ cargo.icon }} </v-icon>
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
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>
<script>
import links from '../links/index.vue'
export default {

  data() {
    return {
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
    }
  },
  components: {
    links
  }
}
</script>
<style lang="scss">
.perfil{
  @media (min-width: 1200px){
    height: 100vh;
  }

}
</style>
