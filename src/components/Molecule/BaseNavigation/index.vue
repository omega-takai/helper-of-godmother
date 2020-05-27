<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
  nav(:class="$style.wrapper")
    ul(:class="$style.list")
      li(:class="$style.listItem")
        BaseFeatherIcon(
          iconName="HomeIcon"
          :class="$style.icon"
        )
      li(:class="$style.listItem")
        BaseFeatherIcon(
          iconName="ListIcon"
          :class="$style.icon"
        )
      li(
        :class="$style.listItem"
        @click="onClickEdit()"
      )
        BaseFeatherIcon(
          iconName="EditIcon"
          :class="$style.icon"
        )
      li(:class="$style.listItem")
        BaseFeatherIcon(
          iconName="RefreshCwIcon"
          :class="$style.icon"
        )
      li(:class="$style.listItem")
        BaseFeatherIcon(
          iconName="SettingsIcon"
          :class="$style.icon"
        )
</template>
