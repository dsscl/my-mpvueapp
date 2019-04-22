### 1. 简介
mpvue + 云开发的入门demo —— 仿猫眼电影小程序<br>
有以下功能的简单示例：<br>
1）tab1：通过云函数从云数据库获取电影列表<br>
2）tab2：内嵌h5<br>
3）tab3：授权登录<br>
4）城市索引及切换（静态）<br>
在此基础上拓展一些功能，可以帮助快速上手小程序<br>

### 2. 运行步骤：
1）npm install<br>
2）npm run dev<br>
3）微信开发者工具-导入项目-选择my-mpvueapp/dist目录，AppID需用自己注册的，**不可使用测试号（云开发需要以真实的AppID作为标识）**<br>
4）此时代码会报红，因为没开通云服务，点击微信开发者工具-云开发-开通-新建一个环境 <br>
5）云开发控制台-云数据库-添加一个集合，命名为films，将/static/clouddatabase/film.json文件导入，并将/src/main.js云数据库配置的云环境id“dev-727957”替换为你的云环境id<br>
6）检查/dist/project.config.json文件是否有"cloudfunctionRoot"字段，没有的话手动添加"cloudfunctionRoot": "./static/cloudfunctions/"<br>
7）微信开发者工具-将/static/cloudfunctions/下的云函数上传到云端-右键-创建并部署：云端安装依赖<br>
8）重新编译，报红解除，然后开始拓展自己的功能吧~


### 3. 云开发的配置
老项目配置过后也可以使用云开发<br>

1）在`src/app.json`文件添加以下配置
```json
"cloud": true,
```

2）在`src/main.js`文件添加以下语句对云开发进行初始化
```js
wx.cloud.init({
  traceUser: true
})
```
必须要初始化才能使用云开发，`traceUser`决定是否在将用户访问记录到用户管理中，在控制台中可见。

3）在`project.config.json`文件中增加cloudfunctionRoot字段用于指定存放云函数的目录（本项目将云函数存放在/static/cloudfunctions目录下）

```json
"cloudfunctionRoot": "./static/cloudfunctions/",
```

### 4. 参考文档
[mpvue中使用小程序云开发总结](https://segmentfault.com/a/1190000016641238)

