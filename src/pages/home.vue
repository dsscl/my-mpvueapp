<template>
  <div class="home clear">
    <main class="fixed top0 width100" style="height: calc(100% - 2rpx)">
      <scroll-view scroll-y style="height: 100%;" @scrolltolower="loadMore">
        <header class="border-bottom1 flex-align-spacebetween" style="height: 80rpx">
          <a class="flex-align paddingX20" @tap="$router.push('/pages/select_city')">
            {{curCity}}<i class="icon-uparrow rotate180 color-999"></i>
          </a>
          <div class="font-size2 bold flex-align">
            <p :class="['headerTab', {'cur': headerTab===1}]" @tap="switchTab(1)">热映</p>
            <p :class="['headerTab', {'cur': headerTab===2}]" @tap="switchTab(2)">待映</p>
          </div>
          <a class="height100 padding-left20 padding-right30 border-left1 flex-align-justify" @tap="$router.push('search')">
            <i class="icon-search font-size8 bold color-red"></i>
          </a>
        </header>
        <film-list :mainList="mainList" :nodata="nodata"></film-list>
      </scroll-view>
    </main>
  </div>
</template>
<script>
import filmList from '@/components/film_list'
import {FILM_LIST} from '@/mixin'
export default {
  mixins: [FILM_LIST],
  components: {
    filmList
  },
  data() {
    return {
      headerTab: 1,
    }
  },
  computed: {
    curCity() {
      return this.$store.state.city
    }
  },
  onLoad() {
    Object.assign(this, this.$options.data())
    this.getList({isRefresh: true})
  },
  methods: {
    switchTab(v) {
      this.headerTab = v
      this.headerTab === 2 ? this.getList({isRefresh: true, isShow: 0}) : this.getList({isRefresh: true})
    },
  }
}
</script>
<style lang="scss" scoped>
$color-red: #f0423b;
.home {
  .headerTab {
    margin: 0 20rpx;
    height: 30rpx;
    padding: 20rpx 10rpx;
    color: #999;
    border-bottom: 2rpx solid transparent;
    &.cur {
      color: $color-red;
      border-color: $color-red;
    }
  }
}
</style>
