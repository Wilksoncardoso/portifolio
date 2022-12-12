<template lang="html">
  <div class="mt-10">
    <v-row align-content="center" justify="center">
      <v-col cols="12" lg="6" xl="5" style="background:blue">

      </v-col>
      <v-col cols="12" lg="6" xl="3" style="background:red">
        <nuxt-img
          src="/1585x2243/87c5f8d3fc/will__persona.webp"
          alt="Wilkson cardoso, UX / UI"
          width="100%"
          height="100%"
          sizes="xs:50vw sm:100vw md:50vw lg:400px"
          class="img__end"
          loading="lazy"
          format="webp"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.img__end{

  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
