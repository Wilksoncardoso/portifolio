<template lang="html">
  <div :style="cssProps" class=" py-16">

    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" class="text-center py-4">
          <h1 class="mb-0">
            <span class="text-h4 primary--text mr-2">#</span> SOFT SKILL
          </h1>
          <h5 class="mb-3 ml-7 font-weight-regular grey--text lighten-1">
            Habilidades adquiridas na profissão
          </h5>
        </v-col>

        <v-col xl="3" v-for="data_ in itens" :key="data_.id">
          <v-card elevation="10" class=" px-3 py-8 " >
            <v-row class="px-5">
              <h2 class="mb-2">{{data_.titulo}}</h2>
              <v-card elevation="10" class="px-5 my-2"  v-for="list in data_.list" :key="list.id" style="width: 100%;">
                <h6 class="pt-2 mb-1" >{{ list.label }}</h6>
                <v-divider></v-divider>
                <v-progress-linear :value="list.value" class="my-3" style="height: 20px;">
                  <template v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                  </template>
                </v-progress-linear>
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
          list: [
            {
              id: 0,
              label: "Gestão  ",
              value: 97,
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
              value: 97,
            },

          ]
        },

      ],
      hard_data: [




        {
          id: 4,
          label: "Trabalho em equipe",
          value: 97,
        }, {
          id: 4,
          label: "Comunicação assertiva ",
          value: 97,
        }, {
          id: 4,
          label: "Comunicação assertiva ",
          value: 97,
        },
      ],
    };
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
    color() {
      return { color: this.$vuetify.theme.themes.dark.primary }
    },
    win() {
      switch (this.$vuetify.theme.dark) {
        case true:
          return [{
            background: this.$vuetify.theme.themes.dark.primary,
            boxShadow: "inset 0px 3px 6px #00000029",
            borderRadius: '10px'
          }];
        case false:
          return [{
            background: this.$vuetify.theme.themes.light.primary,
            boxShadow: "inset 0px 3px 6px #00000029",
            borderRadius: '10px'

          }];
      }
    },
  },
  components: {},
};
</script>
<style lang="scss">

</style>
