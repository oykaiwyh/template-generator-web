import { transformValue } from './const';

// 转化属性值中的数据（带单位的带单位）---字体等加上px单位
const handleTransformValue = (attribute: string, value: string | any) => {
  if (transformValue.includes(attribute)) {
    return `${value}px`;
  }
  return value;
};

export { handleTransformValue };

export default {};
