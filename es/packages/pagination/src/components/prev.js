const paginationPrevProps = {
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  }
};
const paginationPrevEmits = {
  click: (evt) => evt instanceof MouseEvent
};
export {
  paginationPrevEmits,
  paginationPrevProps
};
