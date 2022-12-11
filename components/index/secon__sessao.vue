<template>
  <div>
    <v-container class="sessao__margin sessao__hard__skill">
      <v-row class="justify-center">
        <v-col cols="12">
          <h1 class="mb-0">
            <span class="text-h4 primary--text mr-2">#</span> HARD SKILLS
          </h1>
          <h5 class="mb-3 ml-7 font-weight-regular grey--text lighten-1">
            Investir em conhecimento sempre rende os melhores juros.
          </h5>
        </v-col>
        <v-col
          cols="12"
          sm="9"
          md="6"
          lg="4"
          xl="3"
          v-for="new__data in data"
          :key="new__data.id"
        >
          <v-card class="elevation-2 px-5 py-2" elevation="5">
            <v-row>
              <v-card-title class="text-h5 primary--text">
                {{ new__data.titulo }}
              </v-card-title>
              <v-spacer></v-spacer>

              <illustrator v-if="new__data.selecao === 'ux'" />
            </v-row>
            <v-divider class="mt-1"></v-divider>

            <v-card-text>
              <p class="text-justify">
                {{ new__data.conteudo }}
              </p>

              <ul >
                <li v-for="list in new__data.item_list" :key="list.id_item">{{ list.valor }}</li>
              </ul>

              <div v-if="new__data.selecao === 'dev'">
                <h3 class="mb-0">
                  <span class="text-h5 primary--text mr-2">#</span>Front-End
                </h3>

                <ul  >
                  <li v-for="list_ in new__data.list__front" :key=" 'A'+list_.id_item" >{{ list_.valor }}</li>
                </ul>
                <h3 class="mb-0">
                  <span class="text-h5 primary--text mr-2">#</span>Back-End
                </h3>
                <ul  >
                  <li v-for="list in new__data.list__back" :key="'B'+ list.id_item" color="primary">{{ list.valor }}</li>
                </ul>
              </div>

              <div v-if="new__data.selecao === 'management'">
                <h3 class="mb-0">
                  <span class="text-h5 primary--text mr-2">#</span>Equipe
                </h3>

                <ul >
                  <li v-for="list_ in new__data.list__management" :key="list_.id" >{{ list_.valor }}</li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>
<script defer>
import illustrator from "../item__list/ux.ui/illustrator.vue";

export default {
  components: { illustrator },
  data() {
    return {
      data: [
        {
          id: 0,
          titulo: " PO / UI / UX ",
          conteudo:
            "",
          item_list: [
            {
              id_item: 0,
              valor: "Wireframe",
            },
            {
              id_item: 1,
              valor: "Prototipagem",
            },
            {
              id_item: 2,
              valor: "Análise de concorrentes",
            },
            {
              id_item: 3,
              valor: "Usabilidade e design responsivo",
            },
            {
              id_item: 4,
              valor: "Análise de mercado",
            },
            {
              id_item: 5,
              valor: "Experiência de usuário Web e Mobile",
            },
            {
              id_item: 6,
              valor: "Teste A/B",
            },
          ],
          selecao: "ux",
        },
        {
          id: 1,
          titulo: "Dev",
          conteudo:
            "",
          list__front: [
            {
              id_item: 0,
              valor: "Vuejs, Nuxtjs, JavaScript ",
            },
            {
              id_item: 1,
              valor: "Bootstrap, Vuetifyjs, quasar ",
            },
            {
              id_item: 2,
              valor: "Responsive",
            },
            {
              id_item: 3,
              valor: "Sass, css, animate css",
            },
            {
              id_item: 4,
              valor: "Consumo APIREST",
            },
          ],
          list__back: [
            {
              id_item: 0,
              valor: "PHP Data Object (PDO)",
            },
            {
              id_item: 1,
              valor: "Laravel ",
            },
            {
              id_item: 2,
              valor: "SQL, MySQL, MariaDB",
            },
            {
              id_item: 3,
              valor: "Estrutura de dados",
            },
          ],

          selecao: "dev",
        },
        {
          id: 2,
          titulo: "Gestão de projetos",
          conteudo:
            "",
          list__management: [
            {
              id: 0,
              valor: "Metodologia Ágil, Scrum, kanban",
            },
            {
              id: 1,
              valor: "PDCA",
            },
            {
              id: 2,
              valor: "Engenharia de software",
            },
            {
              id: 3,
              valor: "Trello, draw IO, Asana, Jira",
            },
          ],

          selecao: "management",
        },
      ],
    };
  },
  computed:{

  }
};
</script>
<style lang="scss">

</style>
