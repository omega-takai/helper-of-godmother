<script src="./index.js"></script>
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
          :to="`/detail/${val}`"
          v-text="val"
        )
</template>
<style lang="scss" src="./index.scss" module></style>
