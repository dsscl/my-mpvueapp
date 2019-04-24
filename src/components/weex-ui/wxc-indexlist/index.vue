<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 16/11/02. -->
<!-- Update by Tw93 on 17/10/13. -->
<!--A index list. -->

<template>
<div>
  <main class="absolute top0 bottom0 width100 height100">
    <scroll-view scroll-y style="height:100%;" :scroll-into-view="toView">
      <section v-for="(item, i) in formatList" :key="i"
      :id="item.title==='定位'?'index-0':(item.title==='热门'?'index-1':'index-' + item.title)">
        <div v-if="!onlyShowList" class="line-height40" style="padding: 24rpx 30rpx 16rpx 40rpx">{{item.title}}</div>
        <div v-if="item.type && item.type === 'group' && !onlyShowList" class="bgcolor-white padding20X padding-left30 padding-right80">
          <p v-for="(jitem, j) in item.data" :key="j">
            <a @tap="switchCity(kitem.city)"  v-for="(kitem, k) in jitem" :key="k" class="inline-block keywordOption">{{kitem.city}}</a>
          </p>
        </div>
        <div v-if="item.type ==='list'" class="bgcolor-white padding-left30 padding-right80">
          <a @tap="switchCity(jitem.city)" v-for="(jitem, j) in item.data" :key="j" class="border-bottom1 line-height80">{{jitem.city}}</a>
        </div>
      </section>
    </scroll-view>
  </main>
  <nav v-if="showIndex && !onlyShowList" class="fixed right0 translateY text-align-center font-size-2" style="padding: 2rpx 10rpx;z-index: 101">
    <li v-for="(item, index) in formatList" :key="index" @tap="gotoIndex(item.title)">{{item.title}}</li>
  </nav>
</div>
</template>

<script>
import * as Format from './format';
import { cityList, hotList, locateList } from '@/utils/city'
export default {
  props: {
    onlyShowList: {
      type: Boolean,
      default: false
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    callbackUrl: {
      type: String,
    }
  },
  computed: {
    formatList () {
      return Format.totalList(cityList, hotList, locateList);
    }
  },
  data() {
    return {
      toView: ''
    }
  },
  methods: {
    switchCity(v) {
      this.$store.commit(this.$types.SET_CITY, v)
      this.$router.back()
    },
    // 滚动条移动到指定索引
    gotoIndex (key) {
      if(key === '定位') {
        this.toView = 'index-0'
      } else if (key === '热门') {
        this.toView = 'index-1'
      } else {
        this.toView = 'index-' + key
      }
    }
  }
}
</script>
<style lang="css" scoped>
  .keywordOption {
    margin: 10rpx;
    padding: 10rpx 40rpx;
    border: 2rpx solid #e6e6e6;
    border-radius: 8rpx;
  }
</style>
