<template>
  <router-link
    class="nav-link"
    :class="{ active }"
    :to="link"
    @focusout.native="focusoutAction"
    v-if="!isExternal(link)"
    :exact="exact"
  >
    <i v-if="item.icon" :class="`iconfont ${item.icon}`" />
    {{ item.text }}
  </router-link>
  <a
    v-else
    :href="link"
    @focusout="focusoutAction"
    class="nav-link external"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    {{ item.text }}
    <OutboundLink />
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '../util'

export default {
  props: {
    item: {
      required: true
    }
  },

  computed: {
    link () {
      return ensureExt(this.item.link)
    },

    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    },

    active () {
      if ((this.$site.locales &&
          Object.keys(this.$site.locales).some((rootLink) => rootLink === this.link)) ||
          this.link === "/")
          return this.$route.path === this.link;
      return this.$route.path.startsWith(this.link);
    }
  },

  methods: {
    isExternal,
    isMailto,
    isTel,
    focusoutAction () {
      this.$emit('focusout')
    }
  }
}
</script>

<style lang="stylus">

</style>