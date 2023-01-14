import { isClient } from '@vueuse/core';
import { isNumber, isObject, isString } from '../types';
import type { CSSProperties } from 'vue';

export function addUnit(value?: string | number, defaultUnit = 'px') {
  if (!value) return '';
  if (isString(value)) {
    return value;
  } else if (isNumber(value)) {
    return `${value}${defaultUnit}`;
  }
}
