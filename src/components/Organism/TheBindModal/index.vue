<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
  BaseModal(
    v-show="isVisibleModal"
    @onClickClose="closeModal()"
    title="aaa"
  )
    template(#default)
      section(:class="$style.section")
        BaseTypography(
          :level="3"
          text="素材文字をえらぶ"
        )
        BindAlphabetButtons
      section(:class="$style.section")
        BaseTypography(
          :level="3"
          text="名前の長さをえらぶ"
        )
        BindLengthButtons
      section(:class="$style.section")
        BaseTypography(
          :level="3"
          text="名前の候補をつくる"
        )
        BindGenerateButton
</template>
