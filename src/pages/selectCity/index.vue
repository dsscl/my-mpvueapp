<template>
  <div>
    <div class="absolute left0 right0 bottom0 fontsize0 ts-color-paragraph" style="top: 45px">
      <wxc-indexlist :normal-list="list"
        @wxcIndexlistItemClicked="wxcIndexlistItemClicked"
        :show-index="showIndex">
      </wxc-indexlist>
    </div>

    <a href="/pages/home/main" class="home">去往首页</a>
  </div>
</template>

<script>
import WxcIndexlist from '../../components/weex-ui/wxc-indexlist/index.vue';
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
