import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";

export const WEEKSSHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const MONTHSSHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

dayjs.extend(isLeapYear);

type DatePickerProps = string | number | Date;

export function now() {
  return dayjs();
}

export function getDate(date) {
  if (date === undefined || !date) return "";
  return dayjs(date);
}

export function initValue(
  value: DatePickerProps | Array<DatePickerProps>,
  type: string,
) {
  const today = now();
  const res: Array<dayjs.Dayjs> = [];
  console.log(value);
  if (Array.isArray(value)) {
    res.push(value[0] ? getDate(value[0]) : today);
    res.push(value[1] ? getDate(value[1]) : today.add(1, "month"));
  } else {
    res.push(value ? getDate(value) : today);
  }
  return type === "daterange" ? res : res[0];
}

export function initModel(
  value: DatePickerProps | Array<DatePickerProps>,
  type: string,
) {
  const res: Array<dayjs.Dayjs> = [];
  if (Array.isArray(value)) {
    res.push(value[0] ? getDate(value[0]) : "");
    res.push(value[1] ? getDate(value[1]) : "");
  } else {
    res.push(getDate(value));
  }
  return type === "daterange" ? res : res[0];
}

export function getDays(year, month) {
  let res = 31;
  if (month === 2) {
    if (dayjs(year).isLeapYear()) {
      res = 29;
    } else {
      res = 28;
    }
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    res = 30;
  }
  return res;
}

export function initFormate(type) {
  switch (type) {
    case "year":
      return "YYYY";
      break;
    case "month":
      return "YYYY-MM";
      break;
    case "date":
      return "YYYY-MM-DD";
      break;
    default:
      break;
  }
}

export function getFormate(date, format = "YYYY-MM-DD") {
  if (!date) return "";
  if (Array.isArray(date)) {
    return [dayjs(date[0]).format(format), dayjs(date[1]).format(format)];
  }
  return dayjs(date).format(format);
}

export function getStartDayWeek(year, month) {
  if (month <= 2) {
    month += 12;
    year--;
  }
  const week =
    (1 +
      2 * month +
      (3 * (month + 1)) / 5 +
      year +
      year / 4 -
      year / 100 +
      year / 400) %
    7;
  let weekstr = 0;
  switch (Math.floor(week)) {
    case 0:
      weekstr = 1;
      break;
    case 1:
      weekstr = 2;
      break;
    case 2:
      weekstr = 3;
      break;
    case 3:
      weekstr = 4;
      break;
    case 4:
      weekstr = 5;
      break;
    case 5:
      weekstr = 6;
      break;
    case 6:
      weekstr = 7;
      break;
  }
  return weekstr;
}

function isSeleted(model, selected, cnt) {
  for (const select of selected) {
    if (
      model.year() === select.year() &&
      model.month() === select.month() &&
      cnt === select.date()
    ) {
      return true;
    }
  }
  return false;
}

export function getDates(date, originDate, selected) {
  const today = now();
  const year = date.year(),
    month = date.month(),
    day = date.date();
  const tYear = today.year(),
    tMonth = today.month(),
    tDay = today.date();
  const oYear = originDate ? originDate.year() : "",
    oMonth = originDate ? originDate.month() : "",
    oDay = originDate ? originDate.date() : "";
  const week = getStartDayWeek(year, month + 1);
  const limit = getDays(year, month + 1);
  const res = new Array(6).fill(0).map((item) => {
    return new Array(7).fill(0).map((item) => {
      return {};
    });
  });
  let r = 0,
    i = week % 7;
  let cnt = 1;
  while (cnt <= limit) {
    res[r][i % 7].value = cnt;
    if (year === tYear && month === tMonth && cnt === tDay) {
      res[r][i % 7].today = true;
    }
    if (originDate) {
      if (
        (year === oYear && month === oMonth && cnt === oDay) ||
        isSeleted(originDate, selected, cnt)
      ) {
        res[r][i % 7].selected = true;
      }
    }

    i++;
    if (i % 7 === 0) {
      r++;
    }
    cnt++;
  }
  if (r * 7 + (i % 7) < 35) res.splice(-1);
  return res;
}

export function getMonthEn(month) {
  return MONTHS[month];
}

export function getMonthShortEn(month) {
  return MONTHSSHORT[month];
}
