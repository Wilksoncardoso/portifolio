<template lang="html">
  <div :style="cssProps" class=" py-10">

    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" class="text-center py-4">
          <h1 class="mb-0">
            <span class="text-h4 primary--text mr-2">#</span> SOFT SKILL
          </h1>
          <h5 class="mb-3 ml-7 font-weight-regular ">
            Habilidades adquiridas na profissão
          </h5>
        </v-col>

        <v-col xl="3" v-for="data_ in itens" :key="data_.id">
          <v-card elevation="15" class=" px-3 py-8 ">
            <v-row class="px-5">
              <h2 class="mb-2"><span class="text-h5 primary--text mr-2">#</span>{{ data_.titulo }}</h2>
              <h5 class="mb-2">{{ data_.description }}</h5>
              <v-card elevation="5" class="px-5 my-2" v-for="list in data_.list" :key="list.id" style="width: 100%;">
                <div class="grup-itens">
                  <div class="group-item porcentagem">
                    <span class="px-1 py-1 " :style="win">{{ list.value }}%</span> </div>
                  <div class="group-item conteudo">
                    <h6 class="pt-2 mb-1">{{ list.label }} </h6>
                    <v-divider></v-divider>
                    <v-progress-linear :value="list.value" class="my-3" style="height: 10px;"></v-progress-linear>
                  </div>
                </div>
              </v-card>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>


  </div>
</template>
<script>
export default {
  data() {
    return {
      itens: [
        {
          id: 0,
          titulo: 'Pessoal',
          description: '',
          list: [
            {
              id: 0,
              label: "Adaptação",
              value: 92,
            },
            {
              id: 1,
              label: "Autodidata",
              value: 98,
            },
            {
              id: 2,
              label: "Aprendizado",
              value: 95,
            },
            {
              id: 3,
              label: "Solidário",
              value: 90,
            },
            {
              id: 4,
              label: "Otimista ",
              value: 92,
            },
          ]
        },
        {
          id: 1,
          titulo: 'Equipe',
          description: '',

          list: [
            {
              id: 0,
              label: "Gestão  ",
              value: 98,
            },
            {
              id: 1,
              label: "Trabalhar sobre pressão ",
              value: 97,
            },
            {
              id: 2,
              label: "Comunicação assertiva ",
              value: 97,
            },
            {
              id: 3,
              label: "Colaboração",
              value: 97,
            },
            {
              id: 4,
              label: "Profissional Multidisciplinar ",
              value: 92,
            },

          ]
        },

      ],
    }
  },
  computed: {
    cssProps() {
      switch (this.$vuetify.theme.dark) {
        case true:
          return { background: this.$vuetify.theme.themes.dark.primary + "90" };
        case false:
          return {
            background: this.$vuetify.theme.themes.light.primary + "90",
          };
      }
    },

    win() {
      switch (this.$vuetify.theme.dark) {
        case true:
          return [{
            background: this.$vuetify.theme.themes.dark.primary + '70',
            fontSize:'15px',
            color: 'white',
            boxShadow: "inset 0px 3px 6px #00000029",
            borderRadius: '3px',
            fontWeight: '800',
            border: '1px solid'+this.$vuetify.theme.themes.dark.primary
          }];
        case false:
          return [{
            background: this.$vuetify.theme.themes.light.primary + '40',
            fontSize:'15px',
            boxShadow: "inset 0px 3px 6px #00000029",
            borderRadius: '3px',
            fontWeight: '800',
            border: '1px solid'+this.$vuetify.theme.themes.light.primary

          }];
      }
    },
  },
  components: {},
};
</script>
<style lang="scss">
.ultimo {
  display: none !important;
}

.v-icon--link .accent--text {
  color: #353535 !important;
}

.grup-itens {
  grid-template-columns: 15% auto;
  display: grid;
  align-items: center;
}

</style>
