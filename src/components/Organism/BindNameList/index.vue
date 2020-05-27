<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
  div(:class="$style.wrapper")
    ul(:class="className")
      li(
        v-for="(val, i) in generatedList"
        :key="i"
        :class="$style.li"
      )
        NuxtLink(
          :class="$style.button"
          :to="`/detail?name=${val}`"
          v-text="val"
        )
</template>
