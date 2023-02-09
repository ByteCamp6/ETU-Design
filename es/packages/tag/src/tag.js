const tagProps = {
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", "primary"],
    default: "primary"
  },
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: ["large", "default", "small"],
    default: "default"
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
};
const tagEmits = {
  close: (evt) => evt instanceof MouseEvent,
  click: (evt) => evt instanceof MouseEvent
};
export {
  tagEmits,
  tagProps
};
