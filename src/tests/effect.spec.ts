import { reactive } from "../reactivity/reactive";
import { effect } from "../reactivity/effect";
describe("effect", () => {
  it("happy path", () => {
    const user = reactive({ name: "zs", age: 18 });

    let age;
    effect(() => {
      age = user.age + 1;
    });
    expect(age).toBe(19);

    // update 
    user.age++
    expect(age).toBe(20)
  });
});
