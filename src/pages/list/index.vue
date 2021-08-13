<script src="./index.js"></script>
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
        :text="pageTitle"
        :class="$style.element"
      )
      BindNameList(
        :class="$style.element"
      )
</template>
<style lang="scss" module src="./index.scss"></style>
