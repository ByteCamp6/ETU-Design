import dayjs from "../../../../node_modules/dayjs/dayjs.min.js";
const sharedProps = {
  value: {
    type: dayjs.Dayjs
  },
  model: {
    type: dayjs.Dayjs
  },
  index: {
    type: Number,
    default: -1
  }
};
export {
  sharedProps
};
