<template>
  <div class="home clear">
    <main class="fixed top0 width100" style="height: calc(100% - 2rpx)">
      <scroll-view scroll-y style="height: 100%;" @scrolltolower="loadMore">
        <header class="border-bottom1 flex-align-spacebetween" style="height: 40px">
          <a class="flex-align paddingX10" @tap="$router.push('selectCity')">
            {{curCity}}<i class="icon-uparrow rotate180 color-999"></i>
          </a>
          <div class="font-size1 bold flex-align">
            <p :class="['headerTab', {'cur': headerTab===1}]" @tap="switchTab('header', 1)">热映</p>
            <p :class="['headerTab', {'cur': headerTab===2}]" @tap="switchTab('header', 2)">待映</p>
          </div>
          <a class="height100 padding-left10 padding-right15 borderleft1 flex-align-justify" @tap="$router.push('search')">
            <i class="icon-search font-size4 bold color-red"></i>
          </a>
        </header>
        <film-list :mainList="mainList" :noMore="noMore" :noData="noData"></film-list>
      </scroll-view>
    </main>
  </div>
</template>
<script>
import filmList from '@/components/filmList'
import {FILM_LIST} from '@/mixin'
export default {
  mixins: [FILM_LIST],
  components: {
    filmList
  },
  data() {
    return {
      headerTab: 1,
      footerTab: 1,
    }
  },
  computed: {
    curCity() {
      return this.$store.state.city
    }
  },
  onLoad() {
    Object.assign(this, this.$options.data())
    this.getList(true)
  },
  methods: {
    switchTab(type, val) {
      if(type === 'header') {
        this.headerTab = val
      } else {
        this.footerTab = val
      }
      this.getList(true)
    },
  }
}
</script>
<style lang="scss" scoped>
$color-red: #f0423b;
.home {
  .headerTab {
    margin: 0 10px;
    height: 15px;
    padding: 10px 5px;
    color: 999;
    border-bottom: 1px solid transparent;
    &.cur {
      color: $color-red;
      border-color: $color-red;
    }
  }
}
</style>
