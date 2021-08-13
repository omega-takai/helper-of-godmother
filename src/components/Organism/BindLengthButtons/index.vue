<script src="./index.js"></script>
<template lang="pug">
  ul(:class="$style.buttonContainer")
    li(
      v-for="(val, i) in nameLength"
      :key="i"
      :class="$style.li"
    )
      button(
        :class="[$style.button, {[$style.isActive]: val === generateNameLength}]"
        v-text="`${val}文字`"
        @click="changeLength(val)"
      )
</template>
<style lang="scss" src="./index.scss" module></style>
