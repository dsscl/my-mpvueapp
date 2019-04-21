export const FILM_LIST = {
    data() {
        return {
            mainList: [],
            noMore: false,
            noData: false,
            pageNo: 1,
            pageSize: 10
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
                console.log(res)
                if(res.result.data.length < this.pageSize) {
                    this.noMore = true
                }
                this.mainList.push(...res.result.data)
                this.noData = this.$util.switchNodata(this.mainList)
                wx.hideLoading()
            })
        },
        loadMore() {
            if(!this.noMore) {
                this.getList(false)
            }
        }
    }
}