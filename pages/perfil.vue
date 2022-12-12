<template lang="html">
  <div>
      <Fist__session />
  </div>
</template>
<script>
import Fist__session from "../components/perfil__page/index.vue";
export default {
  name: "PerfilPage",
  loading: false,
  components:{Fist__session},
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish()
      , 500)
      console.log(this.$nuxt.$loading)
    })
  },
}
</script>
<style lang="scss">

</style>
