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
        section(
          :class="$style.section"
          key="one"
        )
          BaseTypography(
            :level="3"
            text="素材文字をえらぶ"
          )
        section(
          :class="$style.section"
          key="two"
        )
          BaseTypography(
            :level="3"
            text="名前の長さをえらぶ"
          )
        section(
          :class="$style.section"
          key="three"
        )
          BaseTypography(
            :level="3"
            text="名前の候補をつくる"
          )

        img(
          key="image"
          src="~/assets/image/temp/button.png"
          :class="$style.image"
        )
</template>
