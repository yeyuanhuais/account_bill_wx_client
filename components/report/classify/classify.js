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
    ecPie: {
      lazyLoad: true,
    },
    time: { ...getStartEndTime() },
    chartData: { title: 0 }, //title (0 支出 ，1 收入)
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
  },
  ready() {
    this.ecPieComponent = this.selectComponent("#mychart-dom-pie");
    this.initChart();
  },
  lifetimes: {
    detached: function () {
      this.dispose(this.chart);
      this.chart = null;
      this.ecPieComponent = null;
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initChart() {
      this.ecPieComponent.init((canvas, width, height, dpr) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr, // new
        });
        this.getPieOption(chart);
        this.chart = chart;
        chart.on("click", params => {
          const { chartData } = this.data;
          if (params.componentType && params.componentType === "title") {
            this.setData({ chartData: { ...chartData, title: chartData.title ? 0 : 1 } }, () => {
              this.getPieOption(chart);
            });
          }
        });
        // 注意这里一定要返回 chart 实例，否则会影响事件处理等
        return chart;
      });
    },
    getPieOption(chart) {
      const { chartData } = this.data;
      const option = {
        title: {
          text: `{label|总${chartData.title ? "支出" : "收入"}}\n{value|￥33333.65}\n{icon|⇋}`,
          textStyle: {
            color: "#666666",
            align: "center",
            lineHeight: 26,
            width: 10,
            rich: {
              label: {
                fontSize: 14,
                fontWeight: "normal",
              },
              value: {
                fontSize: 18,
                fontWeight: "bold",
              },
              icon: {
                fontSize: 25,
                fontWeight: "normal",
              },
            },
          },
          textAlign: "center",
          textVerticalAlign: "center",
          left: "49%",
          top: "49%",
          right: "50%",
          bottom: "50%",
          triggerEvent: true,
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}: \n{c} ({d}%)",
          confine: true, //防止tooltip被覆盖
        },
        series: [
          {
            type: "pie",
            center: ["50%", "50%"],
            radius: ["60%", "95%"],
            label: {
              show: false,
            },
            data: [
              {
                value: 55,
                name: "北京",
              },
              {
                value: 20,
                name: "武汉",
              },
              {
                value: 10,
                name: "杭州",
              },
              {
                value: 20,
                name: "广州",
              },
              {
                value: 38,
                name: "上海",
              },
            ],
          },
        ],
      };
      chart.setOption(option);
    },
    // 时间段选择
    bindStartDateChange(e) {
      let { time } = this.data;
      this.setData({
        time: { ...getStartEndTime({ start: e.detail.value, end: time.endTime }) },
      });
    },
    bindEndDateChange(e) {
      let { time } = this.data;
      this.setData({
        time: { ...getStartEndTime({ start: time.startTime, end: e.detail.value }) },
      });
    },
    dispose: function (chart) {
      if (chart) {
        chart.dispose();
      }
    },
  },
});
