<template >
  <div class="py-15" id="Marketing">
    <v-container>
      <v-row class="justify-space-around align-center">
        <v-col cols="12" lg="6" md="7" xl="5">
          <h1 class="mb-0">
            <span class="text-h4 primary--text mr-2">#</span> Estratégia em
            Marketing
          </h1>
          <h5 class="mb-3 ml-7 font-weight-regular grey--text lighten-1">
            O sucesso do seu négocio/Empresa, está em
            <b class="primary--text">Marketing Digital</b>.
          </h5>
          <p class="text-justify mt-xl-10">
            Estratégia de marketing é um conjunto de ações colocadas em prática
            para atingir os objetivos de comunicação, vendas e a construção de
            imagem de uma marca. Todos os seus esforços para tornar seu negócio
            visível, atrair clientes e estabelecer sua autoridade no campo em
            que você trabalha.
          </p>

          <v-row class="align-center">
            <v-col cols="6" md="4" xl="4" v-for="data in card__box" :key="data.id">
              <v-card elevation="4" class="pa-5 rounded-3">
                <div class="card__row mb-2" :style="cssProps">
                  <v-icon color="primary"    icon> mdi-{{ data.icon }}</v-icon>
                </div>
                <h5 class="primary--text">{{ data.titulo }}</h5>

              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="10" lg="5" xl="4" md="5">
          <nuxt-img
            format="webp"
            src="/972x922/1feeaa20de/wilkson__business.webp"
            alt="Estrategia em todos seguimentos, pratico e rápido !"
            width="100%"
            height="100%"
            sizes="xs:50vw sm:100vw md:50vw lg:100vw "
            class="img__end mt-5"
            loading="lazy"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      card__box: [
        {
          id: 0,
          icon: "chart-timeline-variant-shimmer",
          titulo: "Análise de mercado",
        },
        {
          id: 1,
          icon: "bullseye-arrow",
          titulo: "Direto ao ponto",
        },
        {
          id: 2,
          icon: "briefcase-arrow-left-right",
          titulo: "Análise de concorrentes",
        },
        {
          id: 3,
          icon: "bullhorn",
          titulo: "Marketing digital",
        },
        {
          id: 4,
          icon: "cash-sync",
          titulo: "Taxa de conversão",
        },
        {
          id: 5,
          icon: "dice-6",
          titulo: "Transparência",
        },
      ],
    };
  },
  computed: {
    cssProps() {
      switch (this.$vuetify.theme.dark) {
        case true:
          return {
            border: "1px solid" + this.$vuetify.theme.themes.dark.primary,
            background: this.$vuetify.theme.themes.dark.primary + "15",
            BorderRadius: "10px",
          };

        case false:
          return {
            border: "1px solid" + this.$vuetify.theme.themes.light.primary,
            background: this.$vuetify.theme.themes.light.primary + "15",
            BorderRadius: "10px",
          };
      }
    },
  },
};
</script>
<style lang="scss">
.img__end {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.card__row {
  padding: 5px 10px;
  display: inline-block;
}

</style>
