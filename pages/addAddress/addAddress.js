
Page({
    data:{
        array: ['美国', '中国', '巴西', '日本'],
        selProvince: '请选择'
    },

    bindPickerChange: function(e){
        let that = this;
        this.setData({
            selProvince: that.data.array[e.detail.value]
        })
    }
})