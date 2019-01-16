//index.js
//获取应用实例
const app = getApp()

Page({
  handleJump:function(e){
    //1.获取扩展属性值
    console.log(e.target.dataset.id);
    var id=e.target.dataset.id;
    //2.
    if(id==1){
      wx.navigateTo({
        url: "/pages/shoplist/shoplist",
      })
    }
   
  },
  /**
   * 页面的初始数据
   */                                                                                                                                          
  data: {
    list:[
      { id: 1, img_url: "http://127.0.0.1:3000/img/banner-01.png" },
      { id: 2, img_url: "http://127.0.0.1:3000/img/banner-02.png" },
    ],
    navlist:[
      {id:1,title:"美食",img_url:"http://127.0.0.1:3000/img/grid-01.png"},
      {id:2,title:"结婚啦",img_url:"http://127.0.0.1:3000/img/grid-03.png"},
      {id:3,title:"卡拉OK",img_url:"http://127.0.0.1:3000/img/grid-04.png"},
      {id:4,title:"找工作",img_url:"http://127.0.0.1:3000/img/grid-05.png"},
      {id:5,title:"辅导班",img_url:"http://127.0.0.1:3000/img/grid-06.png"},
      {id:6,title:"汽车保养",img_url:"http://127.0.0.1:3000/img/grid-07.png"},
      {id:7,title:"租房",img_url:"http://127.0.0.1:3000/img/grid-08.png"},
      {id:8,title:"装修",img_url:"http://127.0.0.1:3000/img/grid-09.png"},
      {id:9,title:"更多",img_url: "http://127.0.0.1:3000/img/grid-02.png"}
    ]
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
