// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [],
    isShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // wx.setNavigationBarTitle({
    //   title: '首页',
    // })
    wx.request({
      url: 'https://api.it120.cc/tz/shop/goods/list?categoryId=&nameLike=',
      data: {
        categoryId: '',
        nameLike: ''
      },
      success: function (response) {
        console.log(response.data)
        // var goods = []
        // for (var i = 0; i < response.data.data.length; i++) {
        //   goods.push(response.data.data[i]);
        // }
        that.setData({
          goods: response.data.data
        })
      }
    })
  },

  onBlance: function () {
    wx.navigateTo({
      url: '../../pages/shoplist/index',
    })
  },
  onShopping: function () {
    var that = this;
    that.setData({
      isShow: true
    })
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
    var that = this;
    that.setData({
      isShow: false
    })
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