/*
* auth: siguang.liu
* date: 2017/10/26
*/
const appInstance = getApp();

Page({
    data: {
        banners: [
            '/img/pic-1.jpg',
            '/img/pic-2.jpg',
            '/img/pic-3.jpg',
            '/img/pic-4.jpg'            
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 600,
        message: appInstance.globalData.messageInfo
    },

    getGoodsDetail: (evt) => {
        wx.navigateTo({
            url: '../goodsDetails/goodsDetails'
        })
    }
    

})
