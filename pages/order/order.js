// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList:["我购买的","我售卖的"],
    activeIndex: "",
    // 初始化将allOrder置为空数组
    allOrder: [
      { order_id:1,
        merchantName:"哈哈镜",
        order_goods:[
          {             image_url:"http://mpic.tiankong.com/669/9fe/6699fe29299550c97fc5d14092c88a82/640.jpg@!670w",
           good_name: "",
           status:"待发货",
           good_num:100,
           good_weight:25,
           ship_price:"免配送费",
           price:"8290",
           deliver_status:"我已发货"
           },
          {
            image_url: "http://mpic.tiankong.com/669/9fe/6699fe29299550c97fc5d14092c88a82/640.jpg@!670w",
            good_name: "",
            status: "待发货",
            good_num: 100,
            good_weight: 25,
            ship_price: "免配送费",
            price: "8290",
            deliver_status: "我已发货"
          },
          {
            image_url: "http://mpic.tiankong.com/669/9fe/6699fe29299550c97fc5d14092c88a82/640.jpg@!670w",
            good_name: "",
            status: "待发货",
            good_num: 100,
            good_weight: 25,
            ship_price: "免配送费",
            price: "8290",
            deliver_status: "我已发货"
          }
        ]
      },
      {
        order_id: 1,
        merchantName: "哈哈镜",
        order_goods: [
          {
            image_url: "http://mpic.tiankong.com/669/9fe/6699fe29299550c97fc5d14092c88a82/640.jpg@!670w",
            good_name: "",
            status: "待发货",
            good_num: 100,
            good_weight: 25,
            ship_price: "免配送费",
            price: "8290",
            deliver_status: "我已发货"
          },
          {
            image_url: "http://mpic.tiankong.com/669/9fe/6699fe29299550c97fc5d14092c88a82/640.jpg@!670w",
            good_name: "",
            status: "待发货",
            good_num: 100,
            good_weight: 25,
            ship_price: "免配送费",
            price: "8290",
            deliver_status: "我已发货"
          },
          {
            image_url: "http://mpic.tiankong.com/669/9fe/6699fe29299550c97fc5d14092c88a82/640.jpg@!670w",
            good_name: "",
            status: "待发货",
            good_num: 100,
            good_weight: 25,
            ship_price: "免配送费",
            price: "8290",
            deliver_status: "我已发货"
          }
        ]
      },
      {
        order_id: 1,
        merchantName: "哈哈镜",
        order_goods: [
          {
            image_url: "http://mpic.tiankong.com/669/9fe/6699fe29299550c97fc5d14092c88a82/640.jpg@!670w",
            good_name: "",
            status: "待发货",
            good_num: 100,
            good_weight: 25,
            ship_price: "免配送费",
            price: "8290",
            deliver_status: "我已发货"
          },
          {
            image_url: "http://mpic.tiankong.com/669/9fe/6699fe29299550c97fc5d14092c88a82/640.jpg@!670w",
            good_name: "",
            status: "待发货",
            good_num: 100,
            good_weight: 25,
            ship_price: "免配送费",
            price: "8290",
            deliver_status: "我已发货"
          },
          {
            image_url: "http://mpic.tiankong.com/669/9fe/6699fe29299550c97fc5d14092c88a82/640.jpg@!670w",
            good_name: "",
            status: "待发货",
            good_num: 100,
            good_weight: 25,
            ship_price: "免配送费",
            price: "8290",
            deliver_status: "我已发货"
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  tabItemClick:function(e){
    this.setData({
      activeIndex: e.currentTarget.dataset.pos
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