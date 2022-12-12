<template lang="html">
  <div>
    <menu_web class="menu__web" :links="links"/>
    <menu_mob class="menu__mob" :links="links"/>
  </div>
</template>
<script>
import menu_web from "../menu/formate/web.vue";
import menu_mob from "../menu/formate/mobile.vue";
export default {
components:{menu_web, menu_mob},
data() {
  return {
    links: [
        {
          id: 0,
          tooltip: "Ínicio",
          icon: "home",
          link: "/",
        },

        {
          id: 1,
          tooltip: "Freelance",
          icon: "briefcase-arrow-left-right",
          link: "/freelance",
        },

        {
          id: 2,
          tooltip: "Perfil",
          icon: "account-details-outline",
          link: "/perfil",
        },

      ],
  }
},
}
</script>
<style lang="scss">
.menu__web{
  @media (max-width: 900px) {
    display: none;
  }
}
.menu__mob{
  @media (min-width: 900px) {
    display: none;
  }
}
</style>

