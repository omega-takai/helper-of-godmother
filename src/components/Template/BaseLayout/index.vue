<script src="./index.js"></script>
<template lang="pug">
  div(:class="$style.layout")

    main(:class="$style.main")
      slot

    transition(name="fade")
      BaseNavigation(
        v-if="!isVisibleModal"
        :class="$style.navigation"
        @on-click-home="goToHome()"
        @on-click-list="goToList()"
        @on-click-edit="generateNames()"
        @on-click-reset="restoreAll()"
        @on-click-settings="showSettings()"
      )

    TheBindFooter(:class="$style.footer")
    transition(name="fade")
      TheBindModal(
        v-if="isVisibleModal"
        :class="$style.modal"
      )
</template>
<style lang="scss" src="./index.scss" module></style>
