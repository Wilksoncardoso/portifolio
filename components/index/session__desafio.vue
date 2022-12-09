<template >
  <div class="grandes__desafios">
    <v-container class="sessao__margin sessao__hard__skill">
      <v-row class="justify-space-around">
        <v-col cols="12">
          <h1 class="mb-0">
            <span class="text-h4 primary--text mr-2">#</span> GRANDES DESAFIOS
          </h1>
          <h5 class="mb-3 ml-7 font-weight-regular grey--text lighten-1">
            Sempre com muita determinação e peserverança, nas realizações das
            <b class="primary--text">Missões</b>.
          </h5>
        </v-col>
        <v-col cols="12" xl="4" lg="5" md="5" sm="8">
          <v-card class="px-5 py-7" elevation="10">
            <h3 class="mb-0 primary--text font-weight-regular">
              CARREIRA PROFISSIONAL
            </h3>
            <h5 class="mb-3 font-weight-regular grey--text lighten-1">
              Quando se faz algo que é apaixonado, não cansa.
            </h5>
            <v-divider></v-divider>
            <h4 class="mt-5 text-center">
              <v-icon color="primary">mdi-bag-checked</v-icon> AQBANK
              INSTITUICAO DE PAGAMENTO LTDA
            </h4>
            <h6
              class="font-weight-regular mb-5 text-center grey--text lighten-1"
            >
              Inicio 04/2020 - Termino 09/2022
            </h6>

            <v-divider></v-divider>

            <v-timeline dense>
              <v-timeline-item
                color="primary"
                x-small
                icon="mdi-briefcase-check"
              >
                <v-row class="pt-1">
                  <v-col>
                    <strong>Gerente de Desenvolvimento</strong>
                    <div class="text-caption">
                      PO | UX | UI | Estrategia de Marketing
                    </div>
                    <h6 class="font-weight-regular mb-5 grey--text lighten-1">
                      Ultima função
                    </h6>
                  </v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item color="primary" small icon="mdi-arrow-up-thick">
                <v-row class="pt-1">
                  <v-col>
                    <h5 class="font-weight-regular">UX | UI | DESENVOLVEDOR</h5>
                  </v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item color="primary" small icon="mdi-arrow-up-thick">
                <v-row class="pt-1">
                  <v-col>
                    <h5 class="font-weight-regular">DESENVOLVEDOR</h5>
                    <div class="text-caption">
                      Javascript, Php, Vue.js, laravel, jquery, sql, sass, css,
                      bootstrap
                    </div>
                  </v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item color="primary" small icon="mdi-arrow-up-thick">
                <v-row class="pt-1">
                  <v-col>
                    <h5 class="font-weight-regular">Web Master</h5>
                    <div class="text-caption">
                      Photoshop, Illustrator, css, responsive.
                    </div>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>

            <v-divider></v-divider>
            <h5 class="mt-5 text-center grey--text text--lighten-1">
              <v-icon color="primary">mdi-bag-checked</v-icon> SECRETARIA DE
              SAÚDE - VIGILÂNCIA SANITÁRIA
            </h5>
            <h6
              class="font-weight-regular mb-5 text-center grey--text lighten-1"
            >
              Inicio 06/2016 - Termino 04/2020
            </h6>

            <v-divider></v-divider>
            <v-timeline dense>
              <v-timeline-item color="primary" x-small>
                <v-row class="pt-1">
                  <v-col>
                    <strong>Agente administrativo</strong>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>
          </v-card>
          <!-- <v-card class="mt-10 px-5 py-7">
            <v-row>
              <h1>text</h1>
            </v-row>
          </v-card> -->
        </v-col>
          <v-divider class="text-center item__apenas__web" vertical></v-divider>
        <v-col cols="12" xl="7" lg="7" md="7" sm="12">
          <v-card class="px-5 py-10" elevation="10">
            <v-row class="mb-0">
              <v-col cols="7" class="mb-0">
                <h1 class="mb-0 primary--text font-weight-regular">PROJETOS</h1>
                <h5 class="mb-0 font-weight-regular grey--text lighten-1">
                  "Hoje melhor doque ontem, amanhã melhor do que hoje." - Kaisen
                </h5>
              </v-col>
              <v-col cols="5" class="mb-0">
                <v-select
                  v-model="seletor"
                  :items="items"
                  item-text="option"
                  item-value="value"
                  class="section__ mb-0"
                  outlined
                  @change="selecao__value($event)"
                  aria-labelledby="Selecao de projetos"
                  aria-label="Selecao de projetos"
                  placeholder="Selecao de projetos"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <!-- cards quantidades projetos -->
                <div class="row  align-center">
                  <!-- todos card -->
                  <v-col
                    cols="3"
                    xl="2"
                    v-for="data_one in list__qt__projetos"
                    :key="data_one.id"
                    class="cards__"
                  >
                    <v-card class="py-3 px-4 " :class="data_one.class" >
                      <h1 >
                        <span v-if="data_one.id === 0">
                          {{ projetos.length }}</span
                        >
                        <span v-if="data_one.id === 1">
                          {{ filter__publicados.length }}</span
                        >
                        <span v-if="data_one.id === 2">
                          {{ filter__mockup.length }}</span
                        >
                        <span v-if="data_one.id === 3">
                          {{ filter__encubados.length }}</span
                        >
                      </h1>
                      <h6 class="font-weight-regular font-mobile">
                        {{ data_one.label }}
                      </h6>
                    </v-card>
                  </v-col>
                </div>
              </v-col>
            </v-row>
            <v-divider class="mb-8"></v-divider>
            <div class="scroll-y">
              <v-card
                class="mx-xl-4 mx-2 my-8 pa-2"
                elevation="3"
                v-for="data in filteredAndSorted"
                :key="data.id"
              >
                <v-row class="justify-center" align="center">
                  <v-col class="text-lg-center text-sm-center text-xl-center border--right" lg="2" cols="12" xl="2">
                    <v-btn fab  aria-label="mudança de cor">
                      <v-icon large fab :color="data.color__icon">
                        mdi-{{ data.icon }}
                      </v-icon>
                    </v-btn>
                  </v-col>
                  <v-col  cols="12" xl="10" lg="10">
                    <v-row>
                      <v-col  cols="8">
                        <h3>{{ data.projetos }}</h3>
                        <h6 class="grey--text lighten-1 font-weight-regular">
                          EMPRESA - {{ data.empresa }} /
                          {{ data.tipo__projeto }}
                        </h6>
                      </v-col>
                      <v-col class="text-right" cols="4">
                        <v-btn
                          class="ml-2 ma-1"
                          fab
                          small
                          color="primary"
                          v-for="link in data.links"
                          :key="link.id"
                          :href="link.link"
                          target="_blank"
                          aria-label="Projetos"
                        >
                          <v-icon>mdi-{{ link.icon }}</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                    <v-divider class="my-2 line__mobile"></v-divider>

                    <h6 class="font-weight-regular">Resumo do projeto</h6>
                    <p class="text-caption">{{ data.breve__resumo }}</p>
                    <h6 class="font-weight-regular">Skil's de execução</h6>

                    <v-chip
                      small
                      class="ma-2 py-4"
                      :color="novo.color"
                      outlined
                      v-for="novo in data.tag"
                      :key="novo.id"
                    >
                      <v-icon left> mdi-{{ novo.icon }} </v-icon>
                      {{ novo.label }}
                    </v-chip>
                  </v-col>
                </v-row>
              </v-card>
            </div>
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
      seletor: "",
      card__active:{
        color:'red'
      },
      projetos: [
        {
          id: 0,
          icon: "wifi",
          color__icon: "primary",
          projetos: "LINK DE PAGAMENTO",
          empresa: "AQPago",
          tipo__projeto: "Aplicação WEB, Responviso",
          breve__resumo:
            "O novo link de pagamento, veio para facilitar compra dos bayer’s (cliente final), com novos métodos de pagamentos e de duas formas, praticidade no pagamento de futuras cobranças.",
          tag: [
            {
              id: 0,
              icon: "briefcase-arrow-left-right",
              color: "primary",
              label: "Gestão de projetos",
            },
            {
              id: 1,
              icon: "white-balance-incandescent",
              color: "primary",
              label: "Inovação",
            },
            { id: 2, icon: "airballoon", color: "primary", label: "UX / UI" },
            {
              id: 3,
              icon: "file-tree-outline",
              color: "primary",
              label: "Prototipagem",
            },
          ],
          tp: "p",
        },
        {
          id: 1,
          icon: "wifi",
          color__icon: "primary",
          projetos: "LOJA VIRTUAL",
          empresa: "AQPago",
          tipo__projeto: "E-commerce",
          breve__resumo:
            "Foi desenvolvido novo checkout transparente de pagamento e credencimento.",
          tag: [
            {
              id: 0,
              icon: "briefcase-arrow-left-right",
              color: "primary",
              label: "Gestão de projetos",
            },
            {
              id: 1,
              icon: "white-balance-incandescent",
              color: "primary",
              label: "Inovação",
            },
            { id: 2, icon: "airballoon", color: "primary", label: "UX / UI" },
            {
              id: 3,
              icon: "file-tree-outline",
              color: "primary",
              label: "Prototipagem",
            },
          ],
          links: [
            {
              link: "https://lojademo.shopaqpago.com.br/bigmarket",
              icon: "cart",
            },
          ],
          tp: "p",
        },
        {
          id: 2,
          icon: "wifi",
          color__icon: "primary",
          projetos: "WEB SITE AQPAGO",
          empresa: "AQPago",
          tipo__projeto: "Responviso, Web site",
          breve__resumo:
            "Novo web site tem como principal função a exposição de produto (link de pagamento, ecommerce e maquininha), taxas e simulação de vendas.",
          tag: [
            {
              id: 0,
              icon: "white-balance-incandescent",
              color: "primary",
              label: "Inovação",
            },
            { id: 1, icon: "airballoon", color: "primary", label: "UX / UI" },
            {
              id: 2,
              icon: "file-tree-outline",
              color: "primary",
              label: "Prototipagem",
            },
            {
              id: 3,
              icon: "coffee",
              color: "primary",
              label: "Dev",
            },
          ],
          links: [{ link: "https://aqpago.com.br", icon: "web" }],
          tp: "m",
        },
        {
          id: 3,
          icon: "wifi",
          color__icon: "primary",
          projetos: "APLICATIVO AQPAGO GESTOR",
          empresa: "AQPago",
          tipo__projeto: "Aplicativo",
          breve__resumo:
            "Desenvolvido para praticidade dos clientes, podendo conferir tarifa, simulação de venda, acompanhar vendas, liquidação de pagamentos, extrato de recebimento, perfil etc.",
          tag: [
            {
              id: 0,
              icon: "briefcase-arrow-left-right",
              color: "primary",
              label: "Gestão de projetos",
            },
            {
              id: 1,
              icon: "white-balance-incandescent",
              color: "primary",
              label: "Inovação",
            },
            { id: 2, icon: "airballoon", color: "primary", label: "UX / UI" },
            {
              id: 3,
              icon: "file-tree-outline",
              color: "primary",
              label: "Prototipagem",
            },
          ],
          links: [
            {
              link: "https://play.google.com/store/apps/details?id=com.aqpagoapp",
              icon: "google-play",
            },
            {
              link: "https://apps.apple.com/br/app/aqpago-gestor/id1592360230",
              icon: "apple",
            },
          ],
          tp: "m",
        },

        {
          id: 5,
          icon: "wifi",
          color__icon: "primary",
          projetos: "LINK DE PAGAMENTO",
          empresa: "AQPago",
          tipo__projeto: "Aplicação WEB, Responviso",
          breve__resumo:
            "O novo link de pagamento, veio para facilitar compra dos bayer’s (cliente final), com novos métodos de pagamentos e de duas formas, praticidade no pagamento de futuras cobranças.",
          tag: [
            {
              id: 0,
              icon: "briefcase-arrow-left-right",
              color: "primary",
              label: "Gestão de projetos",
            },
            {
              id: 1,
              icon: "white-balance-incandescent",
              color: "primary",
              label: "Inovação",
            },
            { id: 2, icon: "airballoon", color: "primary", label: "UX / UI" },
            {
              id: 3,
              icon: "file-tree-outline",
              color: "primary",
              label: "Prototipagem",
            },
          ],
          tp: "p",
        },
      ],
      list__qt__projetos: [
        {
          id: 0,
          label: "Todos",
          class: "card__active",
        },
        {
          id: 1,
          label: "Públicados",
          class: "",
        },
        {
          id: 2,
          label: "Mockup",
          class: "",
        },
        {
          id: 3,
          label: "Encubados",
          class: "",
        },
      ],
      items: [
        { value: "", option: "Todos" },
        { value: "p", option: "Públicado" },
        { value: "m", option: "Mockup" },
        { value: "e", option: "Encubado" },
      ],
    };
  },
  computed: {
    cssProps() {
      switch (this.$vuetify.theme.dark) {
        case true:
          return {
            color: this.$vuetify.theme.themes.dark.primary,
          };
        case false:
          return {
            color: this.$vuetify.theme.themes.light.primary,
          };
      }
    },
    color() {
      return {
        '--bs-primary' : this.$vuetify.theme.themes.dark.primary
      };
    },
    filteredAndSorted() {
      // function to compare names
      function compare(a, b) {
        if (a.tp < b.tp) return -1;
        if (a.tp > b.tp) return 1;
        return 0;
      }

      return this.projetos
        .filter((user) => {
          return user.tp.toLowerCase().includes(this.seletor.toLowerCase());
        })
        .sort(compare);
    },
    filter__publicados() {
      // function to compare names

      function compare(a, b) {
        if (a.tp < b.tp) return -1;
        if (a.tp > b.tp) return 1;
        return 0;
      }
      return this.projetos
        .filter((user) => {
          return user.tp.toLowerCase().includes("p".toLowerCase());
        })
        .sort(compare);
    },
    filter__mockup() {
      // function to compare names
      function compare(a, b) {
        if (a.tp < b.tp) return -1;
        if (a.tp > b.tp) return 1;
        return 0;
      }
      return this.projetos
        .filter((user) => {
          return user.tp.toLowerCase().includes("m".toLowerCase());
        })
        .sort(compare);
    },
    filter__encubados() {
      // function to compare names
      function compare(a, b) {
        if (a.tp < b.tp) return -1;
        if (a.tp > b.tp) return 1;
        return 0;
      }
      return this.projetos
        .filter((user) => {
          return user.tp.toLowerCase().includes("e".toLowerCase());
        })
        .sort(compare);
    },
  },

  methods: {
    clean() {
      this.list__qt__projetos[0].class = "";
      this.list__qt__projetos[1].class = "";
      this.list__qt__projetos[2].class = "";
      this.list__qt__projetos[3].class = "";
    },

    selecao__value($event) {
      var event = $event;
      switch (event) {
        case "":
          this.clean();
          this.list__qt__projetos[0].class = "card__active";

          break;

        case "p":
          this.clean();
          this.list__qt__projetos[1].class = "card__active";

          break;

        case "m":
          this.clean();

          this.list__qt__projetos[2].class = "card__active";

          break;

        case "e":
          this.clean();

          this.list__qt__projetos[3].class = "card__active";
          break;

        default:
          break;
      }
    },
  },
};
</script>
<style lang="scss">


.border--right {
  border-right: 1px solid rgba(255, 255, 255, 0.12);
}
.scroll-y {
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 500px;
}
.section__ {
  .v-text-field__details {
    display: none !important;
  }
}
.font-mobile {
  @media (max-width: 600px) {
    font-size: 8px;
  }
}
.line__mobile {
  @media (max-width: 600px) {
    display: none !important;
  }
}
.cards__{
  .v-card{
    opacity: 0.6;
  }
  .card__active {
    opacity: 1 !important;

    h1 {
      font-size: 3rem;
    }
    h6 {
      font-weight: 800 !important;
    }
    transition: 1s;
  }
}

.item__apenas__web {
  @media (max-width: 1000px) {
    display: none;
  }
}

</style>
