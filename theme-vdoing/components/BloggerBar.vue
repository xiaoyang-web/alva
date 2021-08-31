<template>
  <aside class="blogger-wrapper card-box">
    <!-- 右侧头像部分 -->
    <div class="avatar">
      <img :src="blogger.avatar" alt="头像" title="我好看吗" />
    </div>

    <!-- 作者名字及简介 -->
    <div class="blogger">
      <span class="name">{{ blogger.name }}</span>
      <span class="slogan">{{ blogger.slogan }}</span>
    </div>

    <!-- 文章分类、标签 -->
    <div class="num-wrapper">
      <div class="item">
        <router-link to="/archives/">
          <span class="num">{{ this.$filterPosts.length }}</span>
          <span>文章</span>
        </router-link>
      </div>
      <div class="item">
        <router-link to="/categories/">
          <span class="num">{{ this.$categoriesAndTags.categories.length }}</span>
          <span>分类</span>
        </router-link>
      </div>
      <div class="item">
        <router-link to="/tags/">
          <span class="num">{{ this.$categoriesAndTags.tags.length }}</span>
          <span>标签</span>
        </router-link>
      </div>

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
    }
  }
}
</script>

<style lang='stylus'>
.blogger-wrapper
  display flex
  flex-direction column
  padding-top 0 !important
  overflow hidden
  // 右侧头像部分
  .avatar
    width 100%
    overflow hidden
    img
      display block
      width 50%
      height 50%
      margin 2rem auto 0;
  // 作者名字及简介
  .blogger
    padding 1rem
    text-align center
    border-bottom 1px solid var(--borderColor)
    .name
      display block
      font-size 1.6rem
      font-weight bold
    .slogan
      font-size 0.8rem
      color var(--textColor)
  // 文章分类、标签
  .num-wrapper
    display flex
    width 100%
    margin 1rem auto
    .item
      flex 1
      text-align center
      a
        color var(--textColor)
        .num
          display block
          font-size 1rem
          font-weight bold
        &:hover
          color $accentColor
</style>
