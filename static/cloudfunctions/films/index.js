// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = (event, context) => {
  console.log(event)
  console.log(context)
  return {
    list: ['1','2']
  }
}