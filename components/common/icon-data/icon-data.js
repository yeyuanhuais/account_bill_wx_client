// components/common/icon-data/icon-data.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    icon: "icon-avatar | icon-tuige | icon-jia1 | icon-jian | icon-wushuju | icon-bargenjinjilu | icon-jia | icon-bargengduo | icon-baryinhangka | icon-tongji | icon-shuliangtongji | icon-ico_e_advice | icon-wode | icon-barshujutongji | icon-gengduo1 | icon-daikuan | icon-shoukuan | icon-xianjinqianbao | icon-qiankuan | icon-zhifubao | icon-weixin | icon-shoukuanma | icon-yinhangka | icon-qianbao | icon-ka | icon-business | icon-bonus | icon-clothes | icon-daily | icon-food | icon-donate | icon-houserent | icon-intrest | icon-fuel | icon-entertainment | icon-other | icon-medicine | icon-salary | icon-makeup | icon-shopping | icon-study | icon-phone | icon-tour | icon-smoke_wine | icon-traffic | icon-winning | icon-investment | icon-xianjin | icon-touzizhongxin | icon-jieru | icon-jiechu | icon-mayihuabei | icon-jingdongbaitiao | icon-xinyongqia | icon-yinhangqia | icon-yaopin | icon-fangzu | icon-taobao | icon-yinpin | icon-hongbao | icon-huazhuangpin | icon-dianying | icon-yiwu | icon-shuiguo | icon-riyongpin | icon-maicai | icon-lingshi | icon-yiban | icon-canyin | icon-jiaotong | icon-bianji | icon-lvyoudujia | icon-chongwu | icon-xiuliweihu | icon-liwu | icon-youxi | icon-shujijiaocai | icon-qicheyongpin | icon-jiaju | icon-yundong | icon-jiadian | icon-jiaoyu | icon-yule | icon-hunyinlianai | icon-yinleyule | icon-shumachanpin | icon-yuer | icon-arrowup | icon-arrowdown | icon-add",
    icon_data: [],
  },
  ready() {
    const { icon } = this.data;
    this.setData({ icon_data: icon.split(" | ") });
  },
  /**
   * 组件的方法列表
   */
  methods: {
    tapIcon({
      currentTarget: {
        dataset: { icon },
      },
    }) {
      this.triggerEvent("tap", { icon });
    },
  },
});
