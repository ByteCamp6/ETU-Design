import type { Plugin } from 'vue';
export type SFCWithInstall<T> = T & Plugin;
export const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = function (app) {
    const { name } = comp as unknown as { name: string }
    app.component(name, comp as SFCWithInstall<T>)
  };
  return comp as SFCWithInstall<T>;
};
