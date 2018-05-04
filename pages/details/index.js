// pages/details/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [{
      shopName: '米乐意华北总店',
      address: '河北省秦皇岛',
      goodList: [{
        pic: 'https://cdn.it120.cc/apifactory/2017/10/30/b07ee85fa64f0c68aa9a45fba20ec689.jpg',
        goodName: '米乐意大米 二级',
        spec: '25kg/袋',
        free: '100袋免费送',
        price: '￥87/袋',
        goodNum: '30'
      },
      {
        pic: 'https://cdn.it120.cc/apifactory/2017/10/30/bc15e96f20fb13cc7d35f90d743ccb17.jpg',
        goodName: '米乐意大米 一级',
        spec: '25kg/袋',
        free: '100袋免费送',
        price: '￥100/袋',
        goodNum: '10'
      }]
    },
    {
      shopName: '喜羊羊大米总店',
      address: '辽宁哈哈市',
      goodList: [{
        pic: 'https://cdn.it120.cc/apifactory/2017/10/30/bc15e96f20fb13cc7d35f90d743ccb17.jpg',
        goodName: '喜羊羊大米 二级',
        spec: '25kg/袋',
        free: '100袋免费送',
        price: '￥105/袋',
        goodNum: '30'
      }]
    }],
    totalFee: '8825',
    otherFee: '156'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})