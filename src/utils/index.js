const util = {
    /**
     * 判断nodata
     */
    switchNodata (list) {
      return !list || list.length === 0
    },
    /**
     * 去除空格
     */
    removeSpace (val) {
      const reg = /\s+/g
      return val.replace(reg, '')
    }
  }
  
  export default util