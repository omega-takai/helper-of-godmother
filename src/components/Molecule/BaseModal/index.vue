<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
  div(
    :class="$style.baseLayer"
    @click.self.stop="closeModal()"
  )
    section(:class="$style.container")
      div
        h1 {{ title }}
        button(
          @click.self.stop="closeModal()"
        ) ×
      div
        slot
</template>
