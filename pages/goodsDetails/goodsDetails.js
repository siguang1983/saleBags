/*
* auth: siguang.liu
* date: 2017/10/26
*/
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

        // 规则 
        specData: [ '100ml', '200ml', '300ml', '400ml', '500ml' ],
        selectSpec: '',

        hideShopPopup: false,
        shopType: 'buy',        // buy购买、addShopCart加入购物车

        // 商品数量
        goodsNum: 0
    },

    // 打开结账
    tapBuy: function(){
        this.setData({
            hideShopPopup: true,
            shopType: 'buy'
        })
    },

    // 打开添加购物车
    tapAddShopCart: function(){
        this.setData({
            hideShopPopup: true,
            shopType: 'addShopCart'
        })
    },

    // 关闭窗口
    closeBuyPanel: function(){
        this.setData({
            hideShopPopup: false
        })
    },

    // 立即购买
    clickBuy: function(){
        wx.navigateTo({
            url: '/pages/shopList/shopList'
        })
    },

    // 加入购物车
    addGoodsCart: function(){
        debugger;
        wx.request({
            url: 'http://goucai.diyicai.com/lottery/getissue.action',
            data: {
                lotteryId: '001',
                issueLen: 10,
                d: 1509363811433
            },
            header: {
                'content-type': 'application/json'
            },
            method: 'get',
            success: function(res){
                debugger;
            },
            error: function(err){
                console.log(err);
            }
        })
    },

    // 加数量
    addGoodsCount: function(){
        let that = this;
        this.setData({
            goodsNum: that.data.goodsNum+1
        })
    },

    // 减数量
    subGoodsCount: function(){
        let that = this;  
        if(that.data.goodsNum <= 0){
            return false;
        }
        this.setData({
            goodsNum: that.data.goodsNum-1
        })
    },

    // 选择规格
    clickSpec: function(evt){
        let that = this;
        let idx = evt.currentTarget.dataset.spcenum;
        this.setData({
            selectSpec: that.data.specData[idx]
        })
    }

})