"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
require("../../types.js");
const shared_esmBundler = require("../../../../node_modules/@vue/shared/dist/shared.esm-bundler.js");
const fromPairs = require("../../../../node_modules/lodash-es/fromPairs.js");
const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => shared_esmBundler.isObject(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!shared_esmBundler.isObject(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (shared_esmBundler.hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      vue.warn(
        `Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(
          val
        )}.`
      );
    }
    return valid;
  } : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if (shared_esmBundler.hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(
  Object.entries(props).map(([key, option]) => [
    key,
    buildProp(option, key)
  ])
);
exports.buildProp = buildProp;
exports.buildProps = buildProps;
exports.definePropType = definePropType;
exports.epPropKey = epPropKey;
exports.isEpProp = isEpProp;
