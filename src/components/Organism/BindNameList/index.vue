<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
  div
    ul
      li(
        v-for="(val, i) in generatedList"
        :key="i"
        :class="$style.li"
      )
        button(
          :class="$style.button"
          v-text="val"
        )
</template>
