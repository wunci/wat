export function getDaysInOneMonth(year, month) {
  month = parseInt(month, 10);
  var d = new Date(year, month, 0);
  return d.getDate();
}

export function getRange(oData) {
  let {
    minYear,
    maxYear,
    minMonth,
    maxMonth,
    minDays,
    maxDays,
    minHours,
    maxHours,
    minMinutes,
    maxMinutes,
    type,
    aDefaultValue,
  } = oData;
  let aYears = [];
  let aMonths = [];
  let aDays = [];
  let aHours = [];
  let aMinutes = [];
  // 初始化判断当前月最多的天数
  if (aDefaultValue.length > 0 && /YYYY/.test(type) && /MM/.test(type)) {
    let d = getDaysInOneMonth(aDefaultValue[0], aDefaultValue[1]);
    maxDays = maxDays <= d ? maxDays : d;
  }
  // year
  if (/YYYY/.test(type)) {
    for (let i = minYear; i <= maxYear; i++) {
      aYears.push(i);
    }
  }
  // month
  if (/MM/.test(type)) {
    for (let i = minMonth; i <= maxMonth; i++) {
      aMonths.push(i < 10 ? '0' + i : i);
    }
  }
  // day
  if (/DD/.test(type)) {
    for (let i = minDays; i <= maxDays; i++) {
      aDays.push(i < 10 ? '0' + i : i);
    }
  }
  // hours
  if (/hh/.test(type)) {
    for (let i = minHours; i <= maxHours; i++) {
      aHours.push(i < 10 ? '0' + i : i);
    }
  }
  // minute
  if (/mm/.test(type)) {
    for (let i = minMinutes; i <= maxMinutes; i++) {
      aMinutes.push(i < 10 ? '0' + i : i);
    }
  }
  return [aYears, aMonths, aDays, aHours, aMinutes].filter(
    aVal => aVal.length > 0,
  );
}
