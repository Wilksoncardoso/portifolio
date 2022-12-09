<template lang="">
  <div class="mb-0">
    <v-btn
                  elevation="2"
                  color="primary"
                  v-for="new_contato in contato"
                  :key="new_contato.id"
                  fab
                  dark
                  x-small
                  class="mr-2 "
                  target="_blank"
                  :href="new_contato.type + new_contato.link"
                  aria-label="Contato"
                >
                  <v-icon>mdi-{{ new_contato.icon }}</v-icon>
                </v-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contato:[
        {
          id: 0,
          label: "Telefone",
          icon: "phone",
          type: "tel:",
          link: "091993604184",
        },
        {
          id: 1,
          label: "WhatSapp",
          icon: "whatsapp",
          type: "",
          link: "https://api.whatsapp.com/send/?phone=55091993604184&text&type=phone_number&app_absent=0",
        },
        {
          id: 2,
          label: "Linkedin",
          type: "",
          icon: "linkedin",
          link: "https://www.linkedin.com/in/wilksonkardoso/",
        },
        {
          id: 3,
          label: "Github",
          type: "",
          icon: "github",
          link: "https://github.com/Wilksoncardoso",
        },
        {
          id: 4,
          label: "E-mail",
          type: "mailto:",
          icon: "email-fast",
          link: "eng.wilksoncardoso@gmail.com",
        },
      ]
    };
  },

  computed:{
    contatos(){
     return this.contato = contato
    }
  }
};
</script>
<style lang="">
</style>
