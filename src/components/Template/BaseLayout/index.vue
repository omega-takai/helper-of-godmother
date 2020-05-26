<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
  div(:class="$style.layout")

    header(:class="$style.header")
      NuxtLink(
        to="/"
        v-text="'助'"
        :class="$style.logo"
      )

    main(:class="$style.main")
      button(
        @click="showModal()"
        :class="$style.button"
      ) モーダルを表示する
      slot
      button(
        @click="showModal()"
        :class="$style.button"
      ) モーダルを表示する

    TheBindFooter(:class="$style.footer")
    TheBindModal
</template>
