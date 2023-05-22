import { reactive } from '../src/reactivity/reactive';
describe("reactive", () => {
  it("happy path", async () => {
    const obj = { foo: 1 };
    const newObj = reactive(obj);

    expect(newObj).not.toBe(obj);
    expect(newObj.foo).toBe(1);
  });
});
