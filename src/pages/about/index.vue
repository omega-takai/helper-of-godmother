<script src="./index.js"></script>
<style lang="scss" module src="./index.scss"></style>
<template lang="pug">
  transition-group(
    appear
    tag="div"
    :class="$style.wrapper"
  )
    section(
      :class="$style.section"
      key="list"
    )
      BaseTypography(
        :level="3"
        text="このサイトについて"
        :class="$style.element"
      )
      P(:class="[$style.element, $style.text]")
        | 当サイト“命名の助（メイメイノスケ）”
        | は子供の名前を響きから考える人向けの、ブラウザで動作するサポートツールです。
        | 50音を組み合わせて名前をつくりましょう。
        br
        | ※当サイトは入力内容を保存しません。

      ul(:class="$style.linkList")
        li(:class="$style.li")
          LinkButtonWithIcon(
            iconName="ExternalLinkIcon"
            text="法務省 子の名に使える漢字"
            url="http://www.moj.go.jp/MINJI/minji86.html"
            :class="$style.button"
          )
        li(:class="$style.li")
          LinkButtonWithIcon(
            iconName="ExternalLinkIcon"
            text="法務省 戸籍統一文字情報 検索"
            url="http://houmukyoku.moj.go.jp/KOSEKIMOJIDB/M01.html"
            :class="$style.button"
          )
</template>
