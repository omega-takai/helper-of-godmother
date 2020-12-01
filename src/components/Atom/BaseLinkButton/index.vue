<script src="./index.js"></script>
<template lang="pug">
  a(
    target="_blank"
    :title="text"
    :href="url"
    :class="className"
  )
    slot(name="left")
    span(v-text="text")
    slot
</template>
<style lang="scss" src="./index.scss" scoped></style>
