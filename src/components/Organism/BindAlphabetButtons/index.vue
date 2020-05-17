<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
  div
    ul(:class="$style.buttonContainer")
      li(
        v-for="(val, i) in arrayHalfFirst"
        :key="i"
        :class="$style.li"
      )
        button(
          :class="$style.button"
          v-text="val"
        )
    ul(:class="$style.buttonContainer")
      li(
        v-for="(val, i) in arrayHalfLast"
        :key="i"
        :class="$style.li"
      )
        button(
          :class="$style.button"
          v-text="val"
        )
</template>
