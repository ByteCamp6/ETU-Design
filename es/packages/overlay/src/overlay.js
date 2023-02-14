const overlayProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  maskEvent: {
    type: Boolean,
    default: false
  },
  zIndex: {
    type: Number
  }
};
const overlayEmits = {
  click: (evt) => evt instanceof MouseEvent
};
export {
  overlayEmits,
  overlayProps
};
