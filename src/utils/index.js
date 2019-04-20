function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

function removeSpace (val) {
  const reg = /\s+/g
  return val.replace(reg, '')
}

const util = {
  /*
  * 无数据
  **/
  switchNodata(arr) {
    return arr && arr.length > 0 ? false : true
  }
}

module.exports = {
  formatNumber,
  formatTime,
  removeSpace,
  util
}
