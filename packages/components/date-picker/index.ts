import DatePicker from "./src/date-picker.vue";
import type { App } from "vue";

DatePicker.install = (app: App) => {
  app.component(DatePicker.name, DatePicker);
};

export default DatePicker;
export * from "./src/date-picker";
