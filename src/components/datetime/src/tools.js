export function getDaysInOneMonth(year, month) {
  month = parseInt(month, 10);
  var d = new Date(year, month, 0);
  return d.getDate();
}

export function getRange(minYear, maxYear, defaultVal) {
  let aYears = [];
  let aMonths = [];
  let aDays = [];
  let aHours = [];
  let maxDays = 31;
  // 初始化判断当前月最多的天数
  if (defaultVal.length > 0) {
    maxDays = getDaysInOneMonth(defaultVal[0], defaultVal[1]);
  }
  for (let i = minYear; i <= maxYear; i++) {
    aYears.push(i);
  }
  for (let i = 1; i <= 12; i++) {
    aMonths.push(i < 10 ? '0' + i : i);
  }
  for (let i = 1; i <= maxDays; i++) {
    aDays.push(i < 10 ? '0' + i : i);
  }
  for (let i = 1; i <= 24; i++) {
    aHours.push(i < 10 ? '0' + i : i);
  }
  return [aYears, aMonths, aDays];
}
