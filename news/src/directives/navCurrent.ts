interface IBinding {
  value: IConfig,
  oldValue: IConfig | undefined,
  [key: string]: any
}

interface IConfig {
  activeClass: string,
  className: string,
  curIdx: number
}

export default {
  mounted (el: HTMLElement, { value }: IBinding) {
    const { activeClass, className, curIdx } = value;
    const oNavItems: HTMLCollection = el.getElementsByClassName(className);

    oNavItems[curIdx].className += ` ${activeClass}`;
  },
  updated (el: HTMLElement, { value, oldValue }: IBinding) {
    const { activeClass, className, curIdx } = value;
    const oNavItems: HTMLCollection = el.getElementsByClassName(className);
    const oldCurIdx: number = oldValue!.curIdx;

    oNavItems[oldCurIdx].className = `${className}`;
    oNavItems[curIdx].className += ` ${activeClass}`;
  }
}