import { sharedProps } from "./shared.js";
const dateNavProps = {
  left: {
    type: Boolean,
    default: true,
  },
  right: {
    type: Boolean,
    default: true,
  },
  change: {
    type: Boolean,
    default: true,
  },
  ...sharedProps,
};
export { dateNavProps };
