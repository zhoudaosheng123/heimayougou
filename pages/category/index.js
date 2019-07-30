// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  //  数据分为左右两块,左边的页面加载时全部渲染,右边的值渲染大家电的数据
      leftMenuList:[],
      rightGoodsList:[],
      currentIndex:0
  },
   allGoods:[],
  onLoad(){
    this.getCategoryList()
},
getCategoryList(){
  wx.request({
    url: 'https://api.zbztb.cn/api/public/v1/categories',
    success: (result) => {
     console.log(result) 
     const {message} =result.data
    //  获取左边的数据
 const leftMenuList= message.map(v=>({cat_id:v.cat_id,cat_name:v.cat_name}))
  // console.log(leftMenuList)
  //获取右边的数据
   const rightGoodsList = message[0].children
     this.setData({
      leftMenuList,
      rightGoodsList
     })
    },
    fail: () => {},
    complete: () => {}
  });
    
},
handelChange(e){
  // console.log(e)
  const index = e.currentTarget.dataset.set
  this.data.currentIndex = index

  // console.log(this.data.currentIndex)
  this.setData({
   currentIndex:index
   
  })
}
})