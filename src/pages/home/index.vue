<template>
  <div class="home">
    <header class="borderbottom1 flex-align-spacebetween" style="height: 40px">
      <a class="flex-align paddingX10" href="/pages/selectCity/main">
        杭州<i class="color-999">▼</i>
      </a>
      <div class="flex-align">
        <p :class="['headerTab', {'cur': headerTab===1}]" @click="switchTab('header', 1)">热映</p>
        <p :class="['headerTab', {'cur': headerTab===2}]" @click="switchTab('header', 2)">待映</p>
      </div>
      <div class="height100 paddingleft10 paddingright15 borderleft1 flex-align-justify">
        <i class="icon-search fontsize2 the-color-red"></i>
      </div>
    </header>
    <main>
      <ul class="paddingleft10">
        <li v-for="(item, index) in filmList" :key="index" class="width100 padding10X borderbottom1 flex">
          <img src="" class="itemflex-00auto" style="width: 70px;height: 95px">
          <div class="marginleft10 width100 paddingright10">
            <div class="flex-align-spacebetween">
              <p class="flex-align" style="width: 65%">
                <span class="color-333 fontsize2 lineEllipsis">{{item.title}}</span>
                <span v-if="item.is3D" class="marginleft5 icon-3DIMAX itemflex-00auto"></span>
              </p>
              <p class="paddingleft5 itemflex-00auto the-color-yellow" style="max-width: 35%">
                <span v-if="item.expect">{{item.expect}}<span class="fontsize-4">人想看</span></span>
                <span v-else-if="item.score">{{item.score}}<span class="fontsize-4">分</span></span>
                <span v-else class="fontsize-2 color-999">暂无评分</span></span>
              </p>
            </div>
            <div class="margintop5 color-666 lineEllipsis">{{item.type}}</div>
            <div class="color-666 flex-align-spacebetween">
              <p class="lineEllipsis" style="width: 83%">{{item.actor}}</p>
              <p>
                <button v-if="item.isShow" class="btn-red">购票</button>
                <button v-else class="btn-blue">预售</button>
              </p>
            </div>
            <div class="margintop5 color-999 lineEllipsis">今天{{item.cinema}}家影院放映{{item.field}}场</div>
          </div>
        </li>
      </ul>
    </main>
    <footer class="fixed bottom0 width100 padding5X bordertop1 bgcolor-white flex-align-spacebetween">
      <div :class="['width33', 'textAlignCenter', footerTab===1 ? 'the-color-red':'color-999']" @click="switchTab('footer', 1)">
        <i class="icon-film fontsize2 bold"></i>
        <p class="fontsize-1 margintop5">电影</p>
      </div>
      <div :class="['width33', 'textAlignCenter', footerTab===2 ? 'the-color-red':'color-999']" @click="switchTab('footer', 2)">
        <i class="icon-cinema fontsize2 bold"></i>
        <p class="fontsize-1 margintop5">影院</p>
      </div>
      <div :class="['width33', 'textAlignCenter', footerTab===3 ? 'the-color-red':'color-999']" @click="switchTab('footer', 3)">
        <i class="icon-person fontsize2 bold"></i>
        <p class="fontsize-1 margintop5">我的</p>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  data () {
    return {
      headerTab: 1,
      footerTab: 1,
      filmList: [
        { title: '蚁人2：黄蜂女现身', is3D: true, expect: '317304', score: '', type: '动作，冒险，科幻', actor: '保罗.路德，伊万杰琳.莉莉，迈克.乔丹', cinema: '117', field: '143' },
        { title: '一出好戏', is3D: false, expect: '', score: '8.2', type: '剧情，喜剧', actor: '黄渤，舒淇，王宝强', isShow: true, cinema: '157', field: '1677' },
        { title: '巨齿鲨', is3D: true, expect: '', score: '8.8', type: '冒险，科幻', actor: '杰森.斯坦森，李冰冰，雷恩.威尔森', isShow: true, cinema: '155', field: '1529' },
        { title: '大师兄', is3D: false, expect: '94909', score: '', type: '喜剧，动作', actor: '甄子丹，陈乔恩，喻亢', isShow: false, cinema: '13', field: '13' },
        { title: '快把我哥带走', is3D: false, expect: '', score: '', type: '喜剧，奇幻', actor: '张子枫，彭昱畅，赵今麦', isShow: false, cinema: '154', field: '1239' },
      ]
    }
  },

  components: {
  },

  methods: {
    switchTab(type, val) {
      if(type === 'header') {
        this.headerTab = val
      } else {
        this.footerTab = val
      }
    }
  }
}
</script>

<style scoped>
</style>
