<script src="./index.js"></script>
<style lang="scss" module src="./index.scss"></style>
<template lang="pug">
  BaseLayout
    template(#default)
      transition-group(
        appear
        tag="div"
      )
        TheNuxtLogo(
          key="logo"
          :class="$style.logo"
        )
        BaseTypography(
          :level="1"
          text="Helper of Godmother"
          key="title"
        )
</template>
