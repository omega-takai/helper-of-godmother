<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
  div
    ul(:class="$style.buttonContainer")
      li(
        v-for="(val, i) in alphabetJpHalfFirst"
        :key="i"
        :class="$style.li"
      )
        button(
          :class="$style.button"
          v-text="val"
        )
    ul(:class="$style.buttonContainer")
      li(
        v-for="(val, i) in alphabetJpHalfLast"
        :key="i"
        :class="$style.li"
      )
        button(
          :class="$style.button"
          v-text="val"
        )
      li(
        v-for="num in 4"
        :class="$style[`spacer${num}`]"
        :key="`spacer${num}`"
      )
</template>
