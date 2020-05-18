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
          key="back"
          :class="$style.wrapperBackButton"
        )
          NuxtLinkTextWithIcon(
            iconName="ArrowLeftIcon"
            text="もどる"
            url="/"
            :class="$style.backButton"
          )
        section(
          :class="$style.section"
          key="list"
        )
          BaseTypography(
            :level="3"
            text="作られた名前リスト"
            :class="$style.element"
          )
          BindNameList(
            :class="$style.element"
          )
</template>
