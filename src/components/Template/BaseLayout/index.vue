<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
  div(:class="$style.layout")

    main(:class="$style.main")
      slot

    TheBindFooter(:class="$style.footer")
</template>
