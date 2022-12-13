<template lang="html">
    <div class="my-16">

        <v-container>
            <v-row class=" justify-center align-center">
                <v-col cols="12" sm="4" md="12" lg="4" xl="4" >
                    <h1 class="mb-0">
                        <span class="text-h4 primary--text mr-2">#</span> HARD SKILLS
                      </h1>
                      <h5 class="mb-3 ml-7 font-weight-regular grey--text lighten-1">
                        Investir em conhecimento sempre rende os melhores juros.
                      </h5>
                </v-col>
                <v-col cols="12" sm="8" md="12" lg="8" xl="8">
                    <v-row class="justify-center align-center">
                        <v-col cols="12" md="6" sm="6" lg="6" xl="5" v-for="skill in hard__skill" :key="skill.id" >
                            <v-card class="px-6 py-10" elevation="10">
                                <v-row>
                                    <v-col cols="4" style="height: 120px;">
                                        <v-progress-circular :rotate="360" class="progress--circular" :width="2"
                                            :value="skill.value" :style="color" style="width: 100%; height:100%">
                                            <h2>{{ skill.value }}%</h2>
                                        </v-progress-circular>
                                    </v-col>
                                    <v-col cols="8">
                                        <h3 class="primary--text">{{ skill.label }}</h3>
                                        <v-divider class="mb-4"></v-divider>
                                        <ul>
                                            <li v-for="list__skill in  skill.itens" :key="list__skill.id">
                                                <span class="caption">{{ list__skill.valor }}</span>
                                            </li>
                                        </ul>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {

    data() {
        return {
            hard__skill: [
                {
                    id: 0,
                    value: 90,
                    label: 'PO / UI / UX ',
                    description: '',
                    itens: [
                        {
                            id: 0,
                            valor: "Wireframe",
                        },
                        {
                            id: 1,
                            valor: "Prototipagem",
                        },
                        {
                            id: 2,
                            valor: "Análise de concorrentes",
                        },
                        {
                            id: 3,
                            valor: "Usabilidade e design responsivo",
                        },
                        {
                            id: 4,
                            valor: "Análise de mercado",
                        },
                        {
                            id: 5,
                            valor: "Experiência de usuário Web e Mobile",
                        },
                        {
                            id: 6,
                            valor: "Teste A/B",
                        },
                    ]
                },
                {
                    id: 1,
                    value: 98,
                    label: 'Front-End',
                    description: '',
                    itens: [
                        {
                            id: 0,
                            valor: "Vuejs, Nuxtjs, JavaScript ",
                        },
                        {
                            id: 1,
                            valor: "Bootstrap, Vuetifyjs, quasar ",
                        },
                        {
                            id: 2,
                            valor: "Responsive",
                        },
                        {
                            id: 3,
                            valor: "Sass, css, animate css",
                        },
                        {
                            id: 4,
                            valor: "Consumo APIREST",
                        },
                    ]
                },
                {
                    id: 2,
                    value: 80,
                    label: 'Back-End',
                    description: '',
                    itens: [
                        {
                            id: 0,
                            valor: "PHP Data Object (PDO)",
                        },
                        {
                            id: 1,
                            valor: "Laravel ",
                        },
                        {
                            id: 2,
                            valor: "SQL, MySQL, MariaDB",
                        },
                        {
                            id: 3,
                            valor: "Estrutura de dados",
                        },
                    ]


                },
                {
                    id: 3,
                    value: 90,
                    label: 'Gestão de projetos',
                    description: '',
                    itens: [
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
                    ]


                },
            ]
        }
    },
    computed: {
        color() {
            return { color: this.$vuetify.theme.themes.dark.primary }
        }
    }
}
</script>
<style lang="scss">
.progress--circular {
    width: 100%;
    height: 100%;
}
</style>
