export interface BaseClassData {
  widgets?: any[];
  sections?: any[];
}

export class BaseClass<T extends BaseClassData = BaseClassData> {
  _data: T;

  public type = this.constructor.name;

  constructor(data?: T) {
    this.type = this.constructor.name;
    const type = this.constructor.prototype;
    this._data = data || ({} as T);

    const proxy = new Proxy(this, {
      get: (instance: any, key: string) => {
        if (key === "type") {
          return type;
        }

        if (key in instance) {
          return instance[key];
        }

        if (key.length > 3) {
          if (key.startsWith("set")) {
            const newKey = key[3].toLowerCase() + key.slice(4);
            return <T>(value: T) => {
              const data = value instanceof BaseClass ? value.getData() : value;

              instance._data[newKey] = data;
              return proxy;
            };
          }

          if (key.startsWith("add")) {
            const newKey = `${key[3].toLowerCase()}${key.slice(4)}s`;

            return <T>(...values: T[]) => {
              const value = values.length === 1 ? values[0] : values;
              const data = value instanceof BaseClass ? value.getData() : value;

              instance._data[newKey] = instance._data[newKey] || [];
              instance._data[newKey].push(data);
              return proxy;
            };
          }
        }

        return undefined;
      },
    });
    return proxy;
  }

  getData() {
    return {
      ...this._data,
      type: this.type,
    };
  }
}
