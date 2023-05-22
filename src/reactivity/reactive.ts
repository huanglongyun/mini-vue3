import { track } from "./effect";

export function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const result = Reflect.get(target, key);
      // 依赖收集
      track(target,key)
      return result;
    },
    set(target, key, value) {
      const result = Reflect.set(target, key, value);
      // TODO 触发依赖
      return result;
    },
  });
}
