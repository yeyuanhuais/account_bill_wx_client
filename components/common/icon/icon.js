Component({
  properties: {
    // icon-avatar | icon-tuige | icon-jia1 | icon-jian | icon-wushuju | icon-bargenjinjilu | icon-jia | icon-bargengduo | icon-baryinhangka | icon-tongji | icon-shuliangtongji | icon-ico_e_advice | icon-wode | icon-barshujutongji | icon-gengduo1 | icon-daikuan | icon-shoukuan | icon-xianjinqianbao | icon-qiankuan | icon-zhifubao | icon-weixin | icon-shoukuanma | icon-yinhangka | icon-qianbao | icon-ka | icon-business | icon-bonus | icon-clothes | icon-daily | icon-food | icon-donate | icon-houserent | icon-intrest | icon-fuel | icon-entertainment | icon-other | icon-medicine | icon-salary | icon-makeup | icon-shopping | icon-study | icon-phone | icon-tour | icon-smoke_wine | icon-traffic | icon-winning | icon-investment | icon-xianjin | icon-touzizhongxin | icon-jieru | icon-jiechu | icon-mayihuabei | icon-jingdongbaitiao | icon-xinyongqia | icon-yinhangqia | icon-yaopin | icon-fangzu | icon-taobao | icon-yinpin | icon-hongbao | icon-huazhuangpin | icon-dianying | icon-yiwu | icon-shuiguo | icon-riyongpin | icon-maicai | icon-lingshi | icon-yiban | icon-canyin | icon-jiaotong | icon-bianji | icon-lvyoudujia | icon-chongwu | icon-xiuliweihu | icon-liwu | icon-youxi | icon-shujijiaocai | icon-qicheyongpin | icon-jiaju | icon-yundong | icon-jiadian | icon-jiaoyu | icon-yule | icon-hunyinlianai | icon-yinleyule | icon-shumachanpin | icon-yuer | icon-arrowup | icon-arrowdown | icon-add
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
