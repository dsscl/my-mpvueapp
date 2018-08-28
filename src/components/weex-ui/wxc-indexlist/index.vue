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
        <div v-if="!onlyShowList" class="lineheight20" style="padding: 12px 15px 8px 15px">{{item.title}}</div>
        <div v-if="item.type && item.type === 'group' && !onlyShowList" class="ts-bgcolor-white padding10X paddingleft15 paddingright40">
          <p v-for="(jitem, j) in item.data" :key="j">
            <a @tap="$router.push({path: callbackUrl, query: {city: kitem.city}})"  v-for="(kitem, k) in jitem" :key="k" class="inlineBlock keywordOption">{{kitem.city}}</a>
          </p>
        </div>
        <div v-if="item.type ==='list'" class="ts-bgcolor-white paddingleft15 paddingright40">
          <a @tap="$router.push({path: callbackUrl, query: {city: jitem.city}})" v-for="(jitem, j) in item.data" :key="j" class="borderbottom1 lineheight40">{{jitem.city}}</a>
        </div>
      </section>
    </scroll-view>
  </main>
  <nav v-if="showIndex && !onlyShowList" class="fixed right0 translateY textAlignCenter fontsize-1" style="padding: 1px 5px;z-index: 101">
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
  data: () => ({
    toView: ''
  }),
  async onLoad() {
  },
  methods: {
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
    margin: 5px;
    padding: 5px 20px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
  }
</style>
