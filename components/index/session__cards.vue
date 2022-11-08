<template >
  <div :style="cssProps" class="text-center py-5">
    <v-progress-circular
      v-for="skill in hard_skill"
      :rotate="360"
      :size="120"
      :width="5"
      :value="skill.value"
      :color="skill.color"
      :key="skill.id"
      class="ma-4"
      :aria-labelledby="skill.label"
      :area-alt="skill.label"
    >
      <h5 >
        {{ skill.label }} <br />
        <v-divider class="mt-1 white"></v-divider>

        <h1 class="display-1 font-weight-black">{{ skill.value }}%</h1>
      </h5>
    </v-progress-circular>
    <v-divider></v-divider>
    <v-row class="justify-center">
      <v-col cols="10" lg="4" xl="3" md="5" class="mt-7 mb-3" :style="win">
        <h1 class="white--text"># SOFT SKILL</h1>
        <h5 class="font-weight-regular white--text">
          Habilidades adquiridas na profissão
        </h5>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hard_skill: [
        {
          id: 0,
          label: "Adaptação",
          value: 92,
          color: "white",
        },
        {
          id: 1,
          label: "Autodidata",
          value: 98,
          color: "white",
        },
        {
          id: 2,
          label: "Aprendizado",
          value: 95,
          color: "white",
        },
        {
          id: 3,
          label: "Colaboração",
          value: 90,
          color: "white",
        },
        {
          id: 4,
          label: "Comunicação",
          value: 89,
          color: "white",
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
    win() {
      switch (this.$vuetify.theme.dark) {
        case true:
          return [{
            background: this.$vuetify.theme.themes.dark.primary,
            boxShadow: "inset 0px 3px 6px #00000029",
            borderRadius:'10px'
          }];
        case false:
          return [{
            background: this.$vuetify.theme.themes.light.primary,
            boxShadow: "inset 0px 3px 6px #00000029",
            borderRadius:'10px'

          }];
      }
    },
  },
  components: {},
};
</script>
<style lang="scss">
</style>
