<script src="./index.js"></script>
<style lang="scss" src="./index.scss" module></style>
<template lang="pug">
  footer(:class="$style.footer")
    dl
      div(:class="$style.rowMobile")
        NuxtLinkTextWithIcon(
          iconName="SmileIcon"
          colorType="white"
          text="このサイトについて"
          url="/about"
        )
      div(:class="$style.rowMobile")
        dt GitHub
        dd
          LinkTextWithIcon(
            iconName="GithubIcon"
            colorType="white"
            :text="repoName"
            :url="repoUrl"
          )
      div(:class="$style.rowMobile")
        dt Author
        dd
          div {{ authorName }} ({{ authorPosition }})
          LinkTextWithIcon(
            iconName="TwitterIcon"
            colorType="white"
            :text="twitterName"
            :url="twitterUrl"
          )

    div(:class="$style.copy") © 2020 {{ authorName }}.
</template>
