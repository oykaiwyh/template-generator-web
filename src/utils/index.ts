const checkIsNull = (value: unknown): value is number => {
  if (value !== null) {
    return true;
  }
  return false;
};

// 使用parseInt提取数字，复杂数据格式需换正则
// 其转换过程为:从字符串第一个字符开始读取数字(跳过前导空格),直到遇到非数字字符时停止读取,将已经读取的数字字符转换为整数并返回其值。
const getNumber = (value: string) => parseInt(value, 10);

export { checkIsNull, getNumber };
export default {};
