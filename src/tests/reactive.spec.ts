import { reactive } from '../reactivity/reactive';
describe("reactive", () => {
  it("happy path", () => {
    const obj = { foo: 1 };
    const newObj = reactive(obj);

    expect(newObj).not.toBe(obj);
    expect(newObj.foo).toBe(1);
  });
});
