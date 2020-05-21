<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
  div
    template(v-if="isEmptySelection")
      p(:class="$style.notice") ※1文字以上えらんでください
    ul(:class="$style.multipleSelectWrapper")
      li(:class="$style.li")
        AlphabetButton(
          :enabled="isEmptySelection"
          text="選択しない"
          @click.native="unselectAll()"
        )
      li(:class="$style.li")
        AlphabetButton(
          :enabled="isSelectedAll"
          text="全選択"
          @click.native="selectAll()"
        )
    ul(:class="$style.buttonContainer")
      li(
        v-for="(val, i) in alphabetListFirst"
        :key="i"
        :class="$style.li"
      )
        AlphabetButton(
          :enabled="val.enabled"
          :text="val.key"
          @click.native="toggleChar(val.key)"
        )
    ul(:class="$style.buttonContainer")
      li(
        v-for="(val, i) in alphabetListLast"
        :key="i"
        :class="$style.li"
      )
        AlphabetButton(
          :enabled="val.enabled"
          :text="val.key"
          @click.native="toggleChar(val.key)"
        )
      li(
        v-for="num in 4"
        :class="$style[`spacer${num}`]"
        :key="`spacer${num}`"
      )
</template>
