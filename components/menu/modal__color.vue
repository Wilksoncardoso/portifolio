<template >
  <div>
    <v-dialog transition="dialog-top-transition" max-width="400">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary"   v-bind="attrs" v-on="on" fab x-small aria-label="Escolha de COR">
          <v-icon color="white">mdi-palette</v-icon>
        </v-btn>
      </template>
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar class="justify-end" color="primary" dark>
            Escolha a cor do tema
            <v-spacer></v-spacer>
            <v-btn x-small fab @click="dialog.value = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-sheet class="mx-auto mt-6">
              <v-slide-group multiple show-arrows>
                <v-slide-item v-for="data in cor" :key="data.id" v-slot="{ active, toggle }">
                  <v-btn class="mr-2 " elevation="2" x-small  :value="data.id" :color="data.value" @click="cores($event)"
                    aria-label="mudança de cor">
                  </v-btn>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>

  </div>
</template>
<script>
export default {
  data() {
    return {
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

      ],
    }
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


      }
    },
  },

}
</script>
<style lang="">

</style>
