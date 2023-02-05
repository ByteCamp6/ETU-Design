import { expect, test } from "vitest";
import Drawer from "../src/drawer.vue";
import { mount } from "@vue/test-utils";

test("switch Test", () => {
  console.log(Drawer);
  const wrapper = mount(Drawer);
  console.log(expect(wrapper.text()));
});
