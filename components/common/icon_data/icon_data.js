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
    icon: "tixing | avatar | tuige | jia1 | jian | wushuju | bargenjinjilu | jia | bargengduo | baryinhangka | tongji | shuliangtongji | ico_e_advice | wode | barshujutongji | gengduo1 | daikuan | shoukuan | xianjinqianbao | qiankuan | zhifubao | weixin | shoukuanma | yinhangka | qianbao | ka | business | bonus | clothes | daily | food | donate | houserent | intrest | fuel | entertainment | other | medicine | salary | makeup | shopping | study | phone | tour | smoke_wine | traffic | winning | investment | xianjin | touzizhongxin | jieru | jiechu | mayihuabei | jingdongbaitiao | xinyongqia | yinhangqia | yaopin | fangzu | taobao | yinpin | hongbao | huazhuangpin | dianying | yiwu | shuiguo | riyongpin | maicai | lingshi | yiban | canyin | jiaotong | bianji | lvyoudujia | chongwu | xiuliweihu | liwu | youxi | shujijiaocai | qicheyongpin | jiaju | yundong | jiadian | jiaoyu | yule | hunyinlianai | yinleyule | shumachanpin | yuer | arrowup | arrowdown | add",
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
