import { mount } from "@vue/test-utils";
import Link from "../src/link.vue";
import { describe, expect, test } from "vitest";

describe("Link.vue", () => {
  test("renders the correct style for success", () => {
    const type = "success";
    const wrapper = mount(Link, {
      props: { type },
    });
    const vm = wrapper.vm;
    console.log(vm, "!!");
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["etu-link--success"]),
    );
  });
});
