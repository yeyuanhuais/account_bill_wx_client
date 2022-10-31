import calculatorStrings from "./calculatorStrings";
// components/bill/keyboard/keyboard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    KeyboardKeys: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "."],
    screenData: "",
    keyHidden: false,
    isCalculate: false //是否需要计算
  },
  observers: {
    screenData: function (newValue) {
      if (newValue.indexOf("+") > -1 || newValue.indexOf("-") > -1) this.setData({ isCalculate: true });
      else this.setData({ isCalculate: false });
      this.triggerEvent("handleSubmit", { data: { value: newValue } });
    }
  },
  ready() {
    this.setData({
      screenData: this.properties.value
    });
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 键盘输入
    handleKey(e) {
      const { key } = e.currentTarget.dataset;
      const { screenData } = this.data;
      if (key === "X") {
        // 退格
        if (!screenData || screenData === "0") {
          this.setData({
            screenData: "0"
          });
          return;
        }
        let money = screenData.substring(0, screenData.length - 1);
        if (!money || money === "-" || money === "+") money = "0";
        this.setData({
          screenData: money
        });
      } else if (key === "C") {
        //清屏C
        this.setData({ screenData: "0" });
      } else {
        // 添加数字
        let money = screenData;
        if (screenData === "0" && key !== ".") {
          money = key;
        } else {
          money = screenData + key;
        }
        this.setData({
          screenData: money
        });
      }
    },
    handleSubmit() {
      const { screenData, isCalculate } = this.data;
      let answers = calculatorStrings(screenData);
      if (isCalculate) {
        this.triggerEvent("handleSubmit", { data: { remark: screenData, value: answers, isCalculate } });
      } else {
        this.triggerEvent("handleSubmit", { data: { value: screenData, isCalculate } });
      }
      this.setData({ isCalculate: false, screenData: answers });
    }
  }
});
