<template>
  <aside class="blogger-wrapper card-box">
    <div class="avatar">
      <div class="avatar-top" :style="{background: bg}"></div>
      <img :src="blogger.avatar" alt="头像" title="我好看吗" />
    </div>
    <div class="blogger">
      <span class="name">{{ blogger.name }}</span>
      <span class="slogan">{{ blogger.slogan }}</span>
    </div>
    <div class="icons" v-if="social && social.icons && social.icons.length">
      <a
        v-for="(item, index) in social.icons"
        :key="index"
        :href="item.link"
        :title="item.title"
        :class="['iconfont', item.iconClass]"
        :style="{ width: 100 / social.icons.length + '%' }"
        target="_blank"
      />
    </div>
  </aside>
</template>

<script>
export default {
  computed: {
    blogger () {
      return this.$themeConfig.blogger
    },
    social () {
      return this.$themeConfig.social
    },
    bg () {
      if (!this.$themeConfig.blogger.avatar_top) {
        return '#718971'
      } else {
        return `url(${this.$themeConfig.blogger.avatar_top})`
      }
    }
  }
}
</script>

<style lang='stylus'>
.blogger-wrapper
  height auto
  display inline-table
  padding-top 0 !important
  overflow hidden
  .avatar
    width 100%
    // height 235px
    overflow hidden
    @media (max-width 900px)
      // width 205px
      // height 205px
    .avatar-top
      width 100%
      height 7rem
      background-repeat no-repeat
      background-size 100% 100%
    img
      display block
      width 50%
      height 50%
      margin -4rem auto 0;
  .icons
    // border 1px solid var(--borderColor)
    border-top none
    height 35px
    line-height 35px
    a
      font-size 20px
      width 33%
      color var(--textColor)
      display block
      float left
      text-align center
      opacity 0.8
      &:hover
        color $accentColor
  .blogger
    padding 1rem 0.95rem
    text-align center
    .name
      font-size 1.3rem
      display block
      margin-bottom 6px
    .slogan
      color var(--textColor)
</style>
