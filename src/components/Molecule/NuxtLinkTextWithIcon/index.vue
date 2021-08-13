<script src="./index.js"></script>
<template lang="pug">
  BaseNuxtLink(
    :url="url"
    :colorType="colorType"
    :text="text"
  )
    BaseFeatherIcon(
      :iconName="iconName"
      :iconSize="iconSize"
      class="icon"
    )
</template>
<style lang="scss" src="./index.scss" scoped></style>
