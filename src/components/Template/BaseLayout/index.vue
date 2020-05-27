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

    BaseNavigation(
      :class="$style.navigation"
      @onClickEdit="showModal()"
    )

    TheBindFooter(:class="$style.footer")
    transition(name="fade")
      TheBindModal(v-if="isVisibleModal")
</template>
