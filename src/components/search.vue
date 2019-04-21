<template>
  <div class="search flex-align">
    <div class="inputWrap">
      <i class="icon-search"></i>
      <i v-show="keyword" class="icon-clear" @tap="clearInput"></i>
      <input class="searchInput" :placeholder="placeholder" :value="keyword" @input="input" @blur="goSearch">
    </div>
    <a class="operateBtn" @tap="goSearch">{{operateText}}</a>
  </div>
</template>
<script>
export default {
  props: ['placeholder'],
  data() {
    return {
      keyword: '',
      isChanged: false
    }
  },
  computed: {
    operateText() {
      return this.keyword ? '搜索' : '取消'
    }
  },
  watch: {
    keyword(val, oldVal) {
      if(this.$util.removeSpace(val) !== this.$util.removeSpace(oldVal)) {
        this.isChanged = true
      }
    }
  },
  onLoad() {
    Object.assign(this, this.$options.data())
  },
  methods: {
    // 监听搜索框变化
    input(e) {
      this.keyword = e.mp.detail.value
    },
    // 执行搜索
    goSearch() {
      if(this.keyword) {
        if(this.isChanged) {
          this.$emit('goSearch', this.$util.removeSpace(this.keyword))
        }
      } else {
        this.$router.back()
      }
      this.isChanged = false
    },
    // 清空搜索框
    clearInput() {
      this.keyword = ''
      this.$emit('goSearch', this.keyword)
    }
  }
}
</script>
<style lang="scss" scoped>
.search {
  padding: 10px 15px;
  font-size: 15px;
  .inputWrap {
    position: relative;
    width: 85%;
    .icon-search,
    .icon-clear {
      position: absolute;
      color: #999;
      top: 50%;
      transform: translateY(-50%);
    }
    .icon-search {
      left: 10px;
    }
    .icon-clear {
      right: 10px;
    }
    .searchInput {
      padding: 5px 30px;
      line-height: 20px;
      border: 1px solid #e6e6e6;
      border-radius: 4px;
      background-color: #fff;
    }
  }
  .operateBtn {
    width: 15%;
    text-align: center;
    color: #f0423b;
  }
}
</style>

