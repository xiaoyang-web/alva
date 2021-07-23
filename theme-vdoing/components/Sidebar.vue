<template>
  <aside class="sidebar">
    <div class="blogger" v-if="blogger">
      <!-- 头像 -->
      <img :src="blogger.avatar" />
      <!-- 博客描述 -->
      <div class="blogger-info">
        <h3>{{blogger.name}}</h3>
        <span>{{blogger.slogan}}</span>
      </div>
      <!-- 社交icon -->
      <div class="icons" v-if="social && social.icons && social.icons.length">
        <a
          :href="item.link"
          :title="item.title"
          :class="['iconfont', item.iconClass]"
          v-for="(item, index) in social.icons"
          :key="index"
          target="_blank"></a>
      </div>
    </div>
    
    <!-- 移动端Nav -->
    <NavLinks />

    <slot name="top" />

    <SidebarLinks :depth="0" :items="items" />

    <slot name="bottom" />
  </aside>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Sidebar',
  components: { SidebarLinks, NavLinks },
  props: ['items'],
  computed: {
    blogger () {
      return this.$themeConfig.blogger
    },
    social () {
      return this.$themeConfig.social
    }
  }
}
</script>

<style lang="stylus">
.sidebar
  ul
    margin 0
    padding 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    padding 0.5rem 0
    border-bottom 1px solid var(--borderColor)
    a
      font-weight bold
    .nav-item, .repo-link
      display block
      padding 0.5rem 0 0.5rem 1.5rem
      font-size 1.1em
      line-height 1.25rem
  & > .sidebar-links
    padding 1.5rem 0
    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1.7
      font-weight bold
    & > li:not(:first-child)
      margin-top 0.75rem
  .blogger
    display flex
    justify-content center
    align-items center
    flex-wrap wrap
    padding 1rem
    text-align center
    border-bottom 1px solid var(--borderColor)
    img
      width 4rem
      height 4rem
      margin-right 2rem
    .blogger-info
      h3
        margin 0.2rem 0
        font-size 1.4rem
        font-weight bold
      span
        font-size 0.8rem
    .icons
      display flex
      width 80%
      margin-top 1rem
      .iconfont
        flex 1
        font-size 1.6rem
        color #777
        &:not(:last-child)
          padding-right 0.6rem
  .sidebar-slot
    margin-bottom: -0.5rem;
    font-size: 0.8rem;
    &.sidebar-slot-top
      padding: 1.5rem 1.5rem 0;
    &.sidebar-slot-bottom
      padding: 0 1.5rem 1.5rem;
@media (max-width $MQMobile)
  .sidebar
    .blogger
      display flex
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>
