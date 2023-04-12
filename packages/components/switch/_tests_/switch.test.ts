import { expect, test } from "vitest";
import Switch from "../src/switch.vue";
import { mount } from "@vue/test-utils";

test("switch Test", () => {
  console.log(Switch);
  const wrapper = mount(Switch);
  console.log(expect(wrapper.text()));
});
