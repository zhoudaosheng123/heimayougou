// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     swiperList:[],
     NavList:[],
     floorTiltle:[]
      
  },

  //生命周期函数
  onLoad(){
    this.getBanerList();
    this.getNavList(),
    this.getHotelList()
  },


 getBanerList(){
  wx.request({
    url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
    success: (result) => {
      // console.log(result)
      const {message} = result.data
      this.setData({
        swiperList:message
      })
     
    },
    fail: () => {},
    complete: () => {}
  });
 },
 getNavList(){
   wx.request({
     url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
     success: (result) => {
      //  console.log(result)
       const {message} = result.data
       this.setData({
         navList:message
       })
     },
     fail: () => {},
     complete: () => {}
   });
     
 },
 getHotelList(){
   wx.request({
     url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
     success: (result) => {
      //  console.log(result)
      // this.data.floorTiltle=result.data.message
       const {message} = result.data
       this.setData({
        floorTiltle:message
       })
     },
     fail: () => {},
     complete: () => {}
   });
     
 }
     
   
  
  
  
  
})
