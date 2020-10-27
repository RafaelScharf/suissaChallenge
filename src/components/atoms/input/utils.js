const onlyNumbersRegex = /\d/
const dotRegex = /\./g
const isNumberOrDot = (val) => onlyNumbersRegex.test(val) || dotRegex.test(val)
const countDots = (val) => (val.match(dotRegex) || []).length
const replaceDots = (val) => val.replace('.', '').replace(dotRegex, '').replace('', '.')

export { 
  onlyNumbersRegex,
  dotRegex,
  isNumberOrDot,
  countDots,
  replaceDots
}