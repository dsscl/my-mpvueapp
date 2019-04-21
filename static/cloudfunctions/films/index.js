// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

exports.main = async (event, context) => {
  console.log(event)
  return await db.collection('films')
  .where({
    title: db.RegExp({
      regexp: event.keyWord || '.',
      options: 'i',
    })
  })
  .skip((event.pageNo-1)*event.pageSize) // 跳过结果集中的前 10 条，从第 11 条开始返回
  .limit(event.pageSize) // 限制返回数量为 10 条
  .get()
}