<template >
  <div class="divider__on ">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
    </svg>
</div>

</template>
<script>
export default {
  computed: {
    cssProps() {
      switch (this.$vuetify.theme.dark) {
        case true:
          return { background: this.$vuetify.theme.themes.dark.primary};
        case false:
          return { background: this.$vuetify.theme.themes.light.primary };
      }
    },
  },
};
</script>
<style lang="scss" >
.divider__on {
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.divider__on svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 106px;
    transform: rotateY(180deg);
}


.theme--light{
  .divider__on .shape-fill {
    fill: #FFFFFF;
}
}
.theme--dark{
  .divider__on .shape-fill {
    fill: var(--background-fist);
  }

}

</style>>


