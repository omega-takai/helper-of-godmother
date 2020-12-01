<script src="./index.js"></script>
<template lang="pug">
  transition-group(
    appear
    tag="div"
    :class="$style.wrapper"
  )
    div(
      key="title"
      :class="$style.title"
    )
      BaseTypography(
        :level="1"
        text="命名の助"
      )
      BaseTypography(
        :level="4"
        text="Helper of Godmother"
      )
      P(:class="[$style.element, $style.text]")
        | 子供の名前を響きから考える人向けの、ブラウザで動作するサポートツールです。
        | 50音を組み合わせて名前をつくりましょう。
        br
        | ※当サイトは入力内容を保存しません。
    section(
      :class="$style.section"
      key="list"
    )
      BaseTypography(
        :level="3"
        :text="pageTitle"
        :class="$style.element"
      )
      BindNameList(
        :class="$style.element"
      )
</template>
<style lang="scss" module src="./index.scss"></style>
