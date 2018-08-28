<template>
  <div>
    <div class="absolute left0 right0 top0 bottom0 fontsize0 ts-bgcolor-bg ts-color-paragraph">
      <wxc-indexlist :normal-list="list" :show-index="showIndex" :callbackUrl="callbackUrl">
      </wxc-indexlist>
    </div>
  </div>
</template>

<script>
import WxcIndexlist from '@/components/weex-ui/wxc-indexlist/index.vue';
export default {
	components: { WxcIndexlist },
  data: () => ({
    list: [],
    showIndex: true,
    callbackUrl: 'home'
  })
}
</script>
