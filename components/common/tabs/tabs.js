Component({
  options: {
    addGlobalClass: true,
    pureDataPattern: /^_/,
    multipleSlots: true,
  },
  properties: {
    tabs: { type: Array, value: [] }, //数据项格式{title:"选项一"}
    tabClass: { type: String, value: "" }, //选项卡样式
    swiperClass: { type: String, value: "" }, //内容区域 swiper 的样式
    activeClass: { type: String, value: "" }, //选项激活时class
    tabActiveTextColor: { type: String, value: "#76BA99" }, //激活时文字颜色
    tabInactiveTextColor: { type: String, value: "#000000" }, //未选中时文字颜色
    tabBackgroundColor: { type: String, value: "#ffffff" }, //选项卡背景色
    activeTab: { type: Number, value: 0 }, //当前激活tab
    animation: { type: Boolean, value: true }, //是否使用动画
    duration: { type: Number, value: 500 }, //动画过渡时间
    isCenter: { type: Boolean, value: false }, //动画过渡时间
  },
  data: {
    currentView: 0,
  },
  observers: {
    activeTab(_activeTab) {
      var len = this.data.tabs.length;
      if (len === 0) return;
      var currentView = _activeTab - 1;
      if (currentView < 0) currentView = 0;
      if (currentView > len - 1) currentView = len - 1;
      this.setData({ currentView: currentView });
    },
  },
  methods: {
    handleTabClick(e) {
      var index = e.currentTarget.dataset.index;
      this.setData({ activeTab: index });
      this.triggerEvent("tabclick", { index: index });
    },
    handleSwiperChange(e) {
      var index = e.detail.current;
      this.setData({ activeTab: index });
      this.triggerEvent("change", { index: index });
    },
  },
});
