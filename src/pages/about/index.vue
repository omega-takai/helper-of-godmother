<script src="./index.js"></script>
<style lang="scss" module src="./index.scss"></style>
<template lang="pug">
  BaseLayout
    template(#default)
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
          P(
            :class="[$style.element, $style.text]"
          ) 子供の名前を響きから考える人向けの、ブラウザで動作するサポートツールです。

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
        div(
          key="back"
          :class="$style.wrapperBackButton"
        )
          NuxtLinkTextWithIcon(
            iconName="ArrowLeftIcon"
            text="設定画面"
            url="/"
            :class="$style.backButton"
          )
</template>
