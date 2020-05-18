<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
  div(:class="$style.layout")

    main(:class="$style.main")
      slot

    header(:class="$style.header")
      NuxtLink(
        to="/"
        v-text="'助'"
        :class="$style.logo"
      )

    TheBindFooter(:class="$style.footer")
</template>
