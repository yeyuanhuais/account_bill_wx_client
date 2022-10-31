import * as echarts from "../../common/ec-canvas/echarts";
import { getStartEndTime } from "../../../utils/util.js";
// components/report/classify/classify.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    ecLineDate: {
      lazyLoad: true,
    },
    classifyItem: [
      { name: "类别1", value: 2333, ratio: "30%" },
      { name: "类别1", value: 2333, ratio: "30%" },
      { name: "类别1", value: 2333, ratio: "30%" },
      { name: "类别1", value: 2333, ratio: "30%" },
      { name: "类别1", value: 2333, ratio: "30%" },
      { name: "类别1", value: 2333, ratio: "30%" },
      { name: "类别1", value: 2333, ratio: "30%" },
      { name: "类别1", value: 2333, ratio: "30%" },
      { name: "类别1", value: 2333, ratio: "30%" },
      { name: "类别1", value: 2333, ratio: "30%" },
      { name: "类别1", value: 2333, ratio: "30%" },
      { name: "类别1", value: 2333, ratio: "30%" },
    ],
    time: "2022-09",
  },
  ready() {
    this.ecLineDateComponent = this.selectComponent("#mychart-dom-line");
    this.initDateChart();
  },
  lifetimes: {
    detached: function () {
      this.dispose(this.chart);
      this.chart = null;
      this.ecLineDateComponent = null;
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initDateChart() {
      this.ecLineDateComponent.init((canvas, width, height, dpr) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr, // new
        });
        this.getOption(chart);
        this.chart = chart;
        // 注意这里一定要返回 chart 实例，否则会影响事件处理等
        return chart;
      });
    },
    initMonthChart() {
      this.ecLineMonthComponent.init((canvas, width, height, dpr) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr, // new
        });
        this.getOption(chart);
        this.chartMonth = chart;
        // 注意这里一定要返回 chart 实例，否则会影响事件处理等
        return chart;
      });
    },
    getOption(chart) {
      const option = {
        title: {
          show: false,
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}: \n{c} ({d}%)",
          confine: true, //防止tooltip被覆盖
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "收入",
            type: "line",
            data: [10, 52, 200, 334, 390, 330, 220],
          },
          {
            name: "支出",
            type: "line",
            data: [200, 52, 200, 334, 390, 330, 220],
          },
          {
            name: "结余",
            type: "line",
            data: [300, 52, 200, 334, 390, 330, 220],
          },
        ],
      };
      chart.setOption(option);
    },
    // 时间段选择
    bindDateChange(e) {
      let { time } = this.data;
      this.setData({
        time: e.detail.value,
      });
    },
    dispose: function (chart) {
      if (chart) {
        chart.dispose();
      }
    },
  },
});
