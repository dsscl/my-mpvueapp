export const FILM_LIST = {
    data() {
        return {
            mainList: [],
            nodata: false,
            pageNo: 1,
            pageSize: 6,
            hasMore: true
        }
    },
    methods: {
        getList(isRefresh, v='') {
            wx.showLoading({
                title: '加载中'
            })
            if(isRefresh) {
                this.pageNo = 1
                this.mainList = []
            } else {
                this.pageNo ++
            }
            wx.cloud.callFunction({
                name: 'films',
                data: {
                  keyWord: v,
                  pageNo: this.pageNo,
                  pageSize: this.pageSize
                },
            }).then(res => {
                this.hasMore = res.result.data.length < this.pageSize ? false : true
                this.mainList.push(...res.result.data)
                this.nodata = this.$util.switchNodata(this.mainList)
                wx.hideLoading()
            })
        },
        loadMore() {
            if(this.hasMore) {
                this.getList(false, this.keyWord)
            }
        }
    }
}