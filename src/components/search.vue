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
import { removeSpace } from '@/utils'
export default {
  data: () => ({
    keyword: '',
    isChanged: false
  }),
  computed: {
    operateText() {
      return this.keyword ? '搜索' : '取消'
    }
  },
  watch: {
    keyword(val, oldVal) {
      if(removeSpace(val) !== removeSpace(oldVal)) {
        this.isChanged = true
      }
    }
  },
  methods: {
    // 监听搜索框变化
    input(e) {
      this.keyword = e.mp.detail.value
    },
    // 执行搜索
    goSearch() {
      if(this.isChanged) {
        if(this.keyword) {
          this.$emit('goSearch', removeSpace(this.keyword))
        } else {
          wx.navigateTo({
            url: this.callbackUrl
          })
        }
      }
      this.isChanged = false
    },
    // 清空搜索框
    clearInput() {
      this.keyword = ''
      this.$emit('goSearch', this.keyword)
    }
  },
  props: ['callbackUrl', 'placeholder']
}
</script>
<style lang="scss" scoped>
.search {
  padding: 5px 10px;
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
      border: 1px solid #e6e6e6;
      padding: 3px 30px;
      background-color: #fff;
      border-radius: 4px;
    }
  }
  .operateBtn {
    width: 15%;
    text-align: center;
    color: #f0423b;
  }
}
</style>

