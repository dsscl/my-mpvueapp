<template>
  <div>
    <header class="fixed top0 width100 bgcolor-bg" style="height: 100rpx">
      <search placeholder="请输入片名" @goSearch="goSearch"></search>
    </header>
    <main class="fixed width100 bgcolor-white" style="top: 100rpx;height: calc(100% - 100rpx)">
      <scroll-view scroll-y style="height: 100%;" @scrolltolower="loadMore">
        <film-list :mainList="mainList" :nodata="nodata"></film-list>
      </scroll-view>
    </main>
  </div>
</template>
<script>
import search from '@/components/search'
import filmList from '@/components/film_list'
import {FILM_LIST} from '@/mixin'
export default {
  mixins: [FILM_LIST],
  components: {
    search,
    filmList
  },
  onLoad() {
    Object.assign(this, this.$options.data())
  },
  methods: {
    goSearch(v) {
      this.getList(true, v)
    }
  }
}
</script>
