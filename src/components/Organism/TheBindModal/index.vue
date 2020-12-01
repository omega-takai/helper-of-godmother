<script src="./index.js"></script>
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
        h2(
          :class="$style.sectionTitle"
        ) 名前の長さをえらぶ
        BindLengthButtons
      section(:class="$style.section")
        h2(
          :class="$style.sectionTitle"
        ) 名前の候補をつくる
        BindGenerateButton
</template>
<style lang="scss" src="./index.scss" module></style>
