<template>
  <header class="navbar blur">
    <!-- 侧边栏显示隐藏按钮 -->
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <!-- 头像及网站名称 -->
    <router-link class="home-link" :to="$localePath">
      <img
        class="logo"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle" />
      <span
        class="site-name"
        v-if="$siteTitle"
        ref="siteName"
        :class="{'can-hide': $site.themeConfig.logo}">{{ $siteTitle }}</span>
    </router-link>

    <!-- 头部导航菜单 -->
    <div class="links" :style="linksWrapMaxWidth ? {'max-width': linksWrapMaxWidth + 'px'} : {}">
      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia"/>
      <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />
      <NavLinks class="can-hide" />
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  data () {
    return {
      linksWrapMaxWidth: null
    }
  },
  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  },
  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
.navbar
  display flex
  justify-content space-between
  align-items center
  padding 0.75rem 1.5rem
  transition transform 0.3s
  .home-link
    .logo
      height $navbarHeight - 1.5rem
      min-width $navbarHeight - 1.5rem
      margin-right 0.8rem
      vertical-align top
    .site-name
      font-size 1.25rem
      font-weight bold
      color var(--textColor)
  .links
    display flex
    font-size 0.9rem
    .search-box
      flex 0 0 auto
.hide-navbar
  .navbar
    transform translateY(-100%)

@media (max-width $MQNarrow)
  .navbar
    .site-name
      display none
@media (max-width $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
</style>
