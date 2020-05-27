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
      slot
      //- button(
      //-   @click="showModal()"
      //-   :class="$style.button"
      //- ) モーダルを表示する

    BaseNavigation(:class="$style.navigation")

    TheBindFooter(:class="$style.footer")
    transition(name="fade")
      TheBindModal(v-if="isVisibleModal")
</template>
