<template lang="html">
  <div>
    <Freelance class="sessao__margin" />
    <semi__end />
  </div>
</template>

<script>
import Freelance from '../components/index/freelance.vue'

// sessão freelance
import semi__end from "../components/end__session/semi__end.vue";

export default {
  name: "FreelancePage",

  loading: false,
  components:{
    Freelance,
    semi__end,
  },
  computed:{
    color(){
    }
  },
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
<style lang="">

</style>
