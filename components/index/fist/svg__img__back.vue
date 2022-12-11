<template>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svg__background" viewBox="0 0 751.03 585.072" >
            <defs>
              <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <stop offset="0"  stop-opacity="0.2" :style="color"/>
                <stop offset="1"  stop-opacity="0.1" :style="color"/>
              </linearGradient>
            </defs>
            <path id="Caminho_1" data-name="Caminho 1" d="M439.836,481.314c99.374-34.565,144.308-167.639,125.3-214.3S706.849,91.6,890.042,287.751s254.051,324.909,98.51,347.376-11.234,86.412,29.38,99.374,20.739,32.837,20.739,32.837H364.658S232.182,601.2,439.836,481.314Z" transform="translate(-323.022 -182.265)" fill="url(#linear-gradient)"/>
          </svg>
    </div>
</template>
<script>
export default {
computed:{
  color(){
    switch (this.$vuetify.theme.dark) {
        case true:
          return { stopColor: this.$vuetify.theme.themes.dark.primary};
        case false:
          return { stopColor: this.$vuetify.theme.themes.dark.primary };
      }
  }
}
}
</script>
<style lang="scss">
.svg__background{
    width: 100vh;
    height: auto;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    margin: auto;
    @media  (max-width: 1000px) {
      width: 50vh;
      opacity: 0.3;
    }
}
</style>
