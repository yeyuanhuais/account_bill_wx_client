Component({
  properties: {
    // tuichu | tixing | avatar | tuige | jia1 | jian | wushuju | bargenjinjilu | jia | bargengduo | baryinhangka | tongji | shuliangtongji | ico_e_advice | wode | barshujutongji | gengduo1 | daikuan | shoukuan | xianjinqianbao | qiankuan | zhifubao | weixin | shoukuanma | yinhangka | qianbao | ka | business | bonus | clothes | daily | food | donate | houserent | intrest | fuel | entertainment | other | medicine | salary | makeup | shopping | study | phone | tour | smoke_wine | traffic | winning | investment | xianjin | touzizhongxin | jieru | jiechu | mayihuabei | jingdongbaitiao | xinyongqia | yinhangqia | yaopin | fangzu | taobao | yinpin | hongbao | huazhuangpin | dianying | yiwu | shuiguo | riyongpin | maicai | lingshi | yiban | canyin | jiaotong | bianji | lvyoudujia | chongwu | xiuliweihu | liwu | youxi | shujijiaocai | qicheyongpin | jiaju | yundong | jiadian | jiaoyu | yule | hunyinlianai | yinleyule | shumachanpin | yuer | arrowup | arrowdown | add
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function(color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 50,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * wx.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    colors: '',
    svgSize: 50 / 750 * wx.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
  methods: {
    fixColor: function() {
      var color = this.data.color;
      var hex2rgb = this.hex2rgb;

      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color;
      }

      return color.map(function (item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item;
      });
    },
    hex2rgb: function(hex) {
      var rgb = [];

      hex = hex.substr(1);

      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
      }

      hex.replace(/../g, function(color) {
        rgb.push(parseInt(color, 0x10));
        return color;
      });

      return 'rgb(' + rgb.join(',') + ')';
    }
  }
});
