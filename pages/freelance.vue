<template >
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

  components:{
    Freelance,
    semi__end,

  }
}
</script>
<style lang="">

</style>
