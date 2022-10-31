const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${[year, month, day].map(formatNumber).join("-")} ${[hour, minute, second].map(formatNumber).join(":")}`;
};

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
};
/**
 * @description 获取年月日的第一天和最后一天
 * @param { String } type day|week|month|year
 * @param { Object } dateObj {start:"",end:""}
 * @return { Object } description...
 */
export const getStartEndTime = (dateObj = { start: "", end: "" }, type = "day") => {
  let { start = "", end = "" } = dateObj;
  /* ======== 一天的开始时间 ======== */
  function getStartTimeFun(time) {
    const nowTimeDate = time ? new Date(time) : new Date();
    return nowTimeDate.setHours(0, 0, 0, 0);
  }
  /* ======== 一天的结束时间 ======== */
  function getEndTimeFun(time) {
    const nowTimeDate = time ? new Date(time) : new Date();
    return nowTimeDate.setHours(23, 59, 59, 999);
  }
  /* ======== 一周开始时间和结束时间 ======== */
  function getWeekStartTimeAndEndTimeFun(time) {
    const current = time ? new Date(time) : new Date();
    // current是本周的第几天
    let nowDayOfWeek = current.getDay();
    if (nowDayOfWeek === 0) nowDayOfWeek = 7;
    const dayNum = 1 * 24 * 60 * 60 * 1000;
    // 获取本周星期一的时间，星期一作为一周的第一天
    const firstDate = new Date(current.valueOf() - (nowDayOfWeek - 1) * dayNum);
    // 获取本周星期天的时间，星期天作为一周的最后一天
    const lastDate = new Date(new Date(firstDate).valueOf() + 6 * dayNum);
    return {
      startTime: new Date(getStartTimeFun(firstDate)),
      endTime: new Date(getEndTimeFun(lastDate)),
    };
  }
  /* ======== 月的第一天 ======== */
  function getMonthFirstFun(time) {
    const date = time ? new Date(time) : new Date();
    date.setDate(1);
    return getStartTimeFun(date);
  }
  /* ======== 月的最后一天 ======== */
  function getMonthLastFun(time) {
    const date = time ? new Date(time) : new Date();
    const currentMonth = date.getMonth();
    const nextMonth = currentMonth + 1;
    const nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
    const oneDay = 24 * 60 * 60 * 1000;
    return getEndTimeFun(new Date(nextMonthFirstDay - oneDay));
  }
  /* ======== 年的第一天 ======== */
  function getYearFirstFun(time) {
    time = time ? new Date(time) : new Date();
    time.setDate(1);
    time.setMonth(0);
    return getStartTimeFun(time);
  }
  /* ======== 年的最后一天 ======== */
  function getYearLastFun(time) {
    time = time ? new Date(time) : new Date();
    time.setFullYear(time.getFullYear() + 1); // 设置到明年
    time.setMonth(0); // 明年的0月，也就是对应到1月，是存在的哦，不是不存在的0
    time.setDate(0); // 明年的0日
    return getEndTimeFun(time);
  }

  let startTime, endTime;
  switch (type) {
    case "day":
      startTime = getStartTimeFun(start);
      endTime = getEndTimeFun(end);
      break;
    case "week":
      ({ startTime, endTime } = getWeekStartTimeAndEndTimeFun(date));
      break;
    case "month":
      startTime = getMonthFirstFun(start);
      endTime = getMonthLastFun(end);
      break;
    case "year":
      startTime = getYearFirstFun(start);
      endTime = getYearLastFun(end);
      break;
    default:
      startTime = getStartTimeFun(start);
      endTime = getEndTimeFun(end);
      break;
  }
  return { startTime: formatTime(new Date(startTime)), endTime: formatTime(new Date(endTime)) };
};
