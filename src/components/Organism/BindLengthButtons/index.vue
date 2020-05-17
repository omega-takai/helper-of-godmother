<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
  ul(:class="$style.buttonContainer")
    li(
      v-for="(val, i) in nameLength"
      :key="i"
      :class="$style.li"
    )
      button(
        :class="$style.button"
        v-text="`${val}文字`"
      )
</template>
