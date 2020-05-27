<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
  BaseModal(
    @onClickClose="closeModal()"
    title="名前をつくる設定"
  )
    template(#default)
      section(:class="$style.section")
        h2(
          :class="$style.sectionTitle"
        ) 素材文字をえらぶ
        BindAlphabetButtons
      section(:class="$style.section")
        BaseTypography(
          :level="4"
          text="名前の長さをえらぶ"
        )
        BindLengthButtons
      section(:class="$style.section")
        BaseTypography(
          :level="4"
          text="名前の候補をつくる"
        )
        BindGenerateButton
</template>
