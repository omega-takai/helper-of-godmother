<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
  div
    ul(:class="$style.buttonContainer")
      li(
        v-for="(val, i) in alphabetListFirst"
        :key="i"
        :class="$style.li"
      )
        button(
          :class="[$style.button, {[$style.active]: val.enabled}]"
          v-text="val.key"
          @click="toggleChar(val.key)"
        )
    ul(:class="$style.buttonContainer")
      li(
        v-for="(val, i) in alphabetListLast"
        :key="i"
        :class="$style.li"
      )
        button(
          :class="[$style.button, {[$style.active]: val.enabled}]"
          v-text="val.key"
        )
      li(
        v-for="num in 4"
        :class="$style[`spacer${num}`]"
        :key="`spacer${num}`"
      )
</template>
