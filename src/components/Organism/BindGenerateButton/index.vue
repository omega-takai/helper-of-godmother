<script src="./index.js"></script>
<template lang="pug">
  div(:class="$style.wrapper")
    ul(:class="$style.note")
      li(:class="$style.li") 名前候補は{{ countGenerateNames }}つになります。
      li(:class="$style.li") 素材文字：{{ countAlphabetEnabled }}つ
      li(:class="$style.li") 名前の長さ：{{ generateNameLength }}文字
      li(:class="$style.li")
        | 組み合わせの計算式：
        | {{ countAlphabetEnabled }}の{{ generateNameLength }}乗
        | = {{ countGenerateNames }}通り
    button(
      :class="$style.button"
      @click="generateNameList"
    ) 名前をつくる
</template>
<style lang="scss" src="./index.scss" module></style>
