import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Tag from "../src/tag.vue";

describe("Tag.vue", () => {
  test("render text & class", () => {
    const wrapper = mount(Tag, {
      props: {
        type: "primary",
      },
      slots: {
        default: "222",
      },
    });
    expect(wrapper.text()).toEqual("222");
    const vm = wrapper.vm;

    expect(vm.$el.classList.contains("etu-tag")).toEqual(true);
    expect(vm.$el.classList.contains("etu-tag__close")).toEqual(false);
    expect(vm.$el.classList.contains("is-closeable")).toEqual(false);
  });

  test("type", () => {
    const wrapper = mount(Tag, {
      props: {
        type: "success",
      },
    });
    const vm = wrapper.vm;
    expect(vm.$el.classList.contains("etu-tag--success")).toEqual(true);
  });

  test("round", () => {
    const wrapper = mount(Tag, {
      props: {
        round: true,
      },
    });
    const vm = wrapper.vm;
    expect(vm.$el.classList.contains("is-round")).toEqual(true);
  });

  test("theme", () => {
    const wrapper = mount(Tag, {
      props: {
        effect: "dark",
      },
    });
    const vm = wrapper.vm;
    const el = vm.$el;
    expect(el.className.includes("etu-tag--dark")).toEqual(true);
    expect(el.className.includes("etu-tag--light")).toEqual(false);
    expect(el.className.includes("etu-tag--plain")).toEqual(false);
  });

  // should also support large size
  test("size", () => {
    const wrapper = mount(Tag, {
      props: {
        size: "large",
      },
    });
    const vm = wrapper.vm;
    const el = vm.$el;
    expect(el.className.includes("etu-tag--large")).toEqual(true);
    expect(el.className.includes("etu-tag--default")).toEqual(false);
    expect(el.className.includes("etu-tag--small")).toEqual(false);
  });
});
