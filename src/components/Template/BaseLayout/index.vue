<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
  div(:class="$style.layout")

    main(:class="$style.main")
      slot

    transition(name="fade")
      BaseNavigation(
        v-if="!isVisibleModal"
        :class="$style.navigation"
        @onClickHome="goToHome()"
        @onClickList="goToList()"
        @onClickEdit="generateNames()"
        @onClickReset="restoreAll()"
        @onClickSettings="showSettings()"
      )

    TheBindFooter(:class="$style.footer")
    transition(name="fade")
      TheBindModal(
        v-if="isVisibleModal"
        :class="$style.modal"
      )
</template>
