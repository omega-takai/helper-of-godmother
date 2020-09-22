<script src="./index.js"></script>
<style lang="scss" src="./index.scss" scoped></style>
<template lang="pug">
  button(
    :title="text"
    :class="className"
  )
    slot(name="left")
    span(v-text="text")
    slot
</template>
