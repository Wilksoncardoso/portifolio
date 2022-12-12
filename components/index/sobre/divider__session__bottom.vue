<template lang="html">
  <div >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 87" :style="cssProps" style="background: transparent; transform: scaley(-1);">
      <g id="Layer_2" data-name="Layer 2">
        <polygon class="cls-1" points="500 69 500 0 250 31 0 0 0 69 500 69" />
      </g>
      <g id="Layer_1" data-name="Layer 1">
        <polygon class="cls-2" points="500 69 500 87 0 87 0 69 250 31 500 69" />
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  computed: {
    cssProps() {
      switch (this.$vuetify.theme.dark) {
        case true:
          return { fill: this.$vuetify.theme.themes.dark.primary };
        case false:
          return { fill: this.$vuetify.theme.themes.light.primary };
      }
    },
  },
};
</script>
<style lang="scss" >

</style>>
