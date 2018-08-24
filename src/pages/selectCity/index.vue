<template>
  <div>
    <div class="absolute left0 right0 top0 bottom0 fontsize0 ts-bgcolor-bg ts-color-paragraph">
      <wxc-indexlist :normal-list="list"
        @wxcIndexlistItemClicked="wxcIndexlistItemClicked"
        :show-index="showIndex">
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
  }),
  mounted() {
	},
  methods: {
    wxcIndexlistItemClicked (e) {
      console.log(e)
    //   this.$router.push({
    // 		path:'/searchDoctor',
    // 		query: {
    // 			'diseaseId': e.id,
    // 			'diseaseName': e.diseaseName
    // 		}
    // 	})
    }
  }
}
</script>
