<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
  div(:class="$style.wrapper")
    ul(:class="$style.note")
      li(:class="$style.li") 名前候補は9つになります。
      li(:class="$style.li") 組み合わせの計算式： 3² = 9通り
    button(
      :class="$style.button"
    ) 名前をつくる
</template>
