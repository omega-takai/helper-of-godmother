<script src="./index.js"></script>
<style lang="scss" module src="./index.scss"></style>
<template lang="pug">
  BaseLayout
    template(#default)
      transition-group(
        appear
        tag="div"
      )
        div(
          key="title"
          :class="$style.title"
        )
          BaseTypography(
            :level="1"
            text="命名の助"
          )
          BaseTypography(
            :level="4"
            text="Helper of Godmother"
          )
        img(
          key="image"
          src="~/assets/image/temp/button.png"
          :class="$style.image"
        )
</template>
