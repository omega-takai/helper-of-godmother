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
        div(
          v-text="theName"
          key="name"
          :class="$style.theName"
        )
        section(
          :class="$style.section"
          key="list"
        )
          BaseTypography(
            :level="3"
            text="人名漢字を探す（外部リンク）"
            :class="[$style.element, $style.sectionTitle]"
          )
          ul(:class="$style.element")
            li(
              :class="$style.li"
              v-for="(val, index) in nameList"
              :key="index"
            )
              LinkButtonWithIcon(
                iconName="ExternalLinkIcon"
                :text="val"
                :url="`${kanjiLink}${val}`"
              )
        div(
          key="back"
          :class="$style.wrapperBackButton"
        )
          ul
            li
              NuxtLinkTextWithIcon(
                iconName="ArrowLeftIcon"
                text="作られた名前リスト"
                url="/list"
                :class="$style.backButton"
              )
            li
              NuxtLinkTextWithIcon(
                iconName="ArrowLeftIcon"
                text="設定画面"
                url="/"
                :class="$style.backButton"
              )
</template>
