<script src="./index.js"></script>
<template lang="pug">
  BaseLinkButton(
    :url="url"
    :colorType="colorType"
    :text="text"
    :class="[$style.wrapper, { [$style.isRight]: iconPosition === 'right'}]"
  )
    template(#left)
      BaseFeatherIcon(
        v-if="iconPosition === 'left'"
        :iconName="iconName"
        :iconSize="iconSize"
        :class="$style.iconLeft"
      )
    template(#default)
      BaseFeatherIcon(
        v-if="iconPosition === 'right'"
        :iconName="iconName"
        :iconSize="iconSize"
        :class="$style.iconRight"
      )
</template>
<style lang="scss" src="./index.scss" module></style>
