<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
  div(
    :class="$style.baseLayer"
    @click.self.stop="closeModal()"
  )
    div(
      :class="$style.scrollArea"
      @click.self.stop="closeModal()"
    )
      section(:class="$style.container")
        div(:class="$style.header")
          h1 {{ title }}
          button(
            @click.stop="closeModal()"
          )
            BaseFeatherIcon(
              iconName="XIcon"
              iconSize="24"
            )
        div(:class="$style.body")
          slot
</template>
