export function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const result = Reflect.get(target, key);
      // TODO 依赖收集
      return result;
    },
    set(target, key, value) {
      const result = Reflect.set(target, key, value);
      // TODO 触发依赖
      return result;
    },
  });
}
