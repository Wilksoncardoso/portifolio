<template lang="html">
  <v-row class="justify-center" align="center">
      <v-item-group v-model="window" class="shrink ml-5" mandatory>
        <v-item v-for="n in length" :key="n" v-slot="{ active, toggle }">
          <div>
            <v-btn :input-value="active" color="primary" icon @click="toggle">
              <v-icon>mdi-record</v-icon>
            </v-btn>
          </div>
        </v-item>
      </v-item-group>
    <v-col cols="12" lg="6" xl="5">
      <v-window v-model="window" class="elevation-1" vertical>
        <v-window-item v-for="n in array" :key="n.id">
          <v-card flat class="pa-10">
            <h1 class="mb-0">
              <span class="text-h4 primary--text mr-2">#</span>{{ n.titulo }}
            </h1>
            <h5 class="mb-3 ml-8 font-weight-regular grey--text lighten-1">
              {{ n.subtitulo }}
              <span v-show="window === 1">- ( Entrada 04/2020 - 09/2022 )</span>
            </h5>

            <v-divider class="mb-5"></v-divider>
            <v-row v-show="window === 1">
              <h4 class="mt-5 mb-5 ml-3">Gerente de desenvolvimento</h4>
            </v-row>
            <p class="text-justify" v-for="text in n.texto" :key="text.id">
              {{ text.item }}
            </p>
          </v-card>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>
<script >
export default {
  data: () => ({
    length: 2,
    window: 0,
    array: [
      {
        id: 0,
        titulo: "Breve Resumo",
        subtitulo: "Conhecendo um pouco.",
        texto: [
          {
            id: 0,
            item: "Apaixonado por tecnologia, projetar, desenvolver, resolver problemas, aprender com os acertos e principalmente com os erros, conferir tendências do mercado, escutar novas ideias debater possíveis soluções, me faz crescer diariamente como profissional. Minhas curiosidades diárias e determinação, me fez cair neste mundo do desenvolvimento e criação.",
          },
          {
            id: 1,
            item: "Sou uma pessoa extremamente positiva com sede de aprendizado que pensa fora da caixa, com fácil poder de aprendizado e adaptação a qualquer seguimento do mercado, meus produtos sempre são feitos com maior carinho e dedicação, para surpreender meu cliente final. ",
          },
        ],
      },
      {
        id: 1,
        titulo: "Experiência de Trabalho",
        subtitulo: "Aqbank Instituicao de Pagamento Ltda",
        texto: [
          {
            id: 0,
            item: "É uma fintech de pagamentos online e serviços, tendo em vista maquinas de cartão, loja virtual, link de pagamento e tag de pedágio, modelo de negócio B2B2C — Business to Business to Consumer, em um formato de marketplace de venda. ",
          },
          {
            id: 1,
            item: "Trabalhei muito nesse período junto ao grupo AQBank, onde tive grandes êxitos em meus planejamentos e projetos, comecei como web master e aos poucos fui conquistando novos cargos e responsabilidade de desenvolver um produto de qualidade.",
          },
          {
            id: 2,
            item: "Sempre muito curioso e detalhista, consegui expressar minhas ideias e atingir nosso público-alvo, varejistas de todo Brasil. Trabalhei gerenciando uma equipe multiprofissional, com metas e prazos.  ",
          },
        ],
      },
      {
        id: 2,
        titulo: "Projetos Realizados",
        subtitulo: "Conhecendo um pouco.",
      },
    ],
  }),
};
</script>
<style lang="scss">
.theme--dark {
  .card__itens {
    width: 100%;
    .v-card {
      background: var(--bs-gray-800);
    }
  }
}
.theme--light {
  .card__itens {
    width: 100%;
  }
}
</style>
