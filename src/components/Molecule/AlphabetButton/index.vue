<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
  button(
    :class="classNameObject"
  )
    span {{ text }}
</template>
