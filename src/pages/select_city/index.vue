<template>
  <div>
    <div class="absolute left0 right0 top0 bottom0 font-size0 ts-bgcolor-bg color-666">
      <wxc-indexlist :normal-list="list" :show-index="showIndex">
      </wxc-indexlist>
    </div>
  </div>
</template>

<script>
import WxcIndexlist from '@/components/weex-ui/wxc-indexlist/index.vue'
export default {
  components: { WxcIndexlist },
  data() {
    return {
      list: [],
      showIndex: true,
    }
  }
}
</script>
