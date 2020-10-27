const onlyNumbersRegex = /\d/
const dotRegex = /\./g

const isNumberOrDot = (evt) => {
  const val = evt.target.value + evt.key
  return onlyNumbersRegex.test(evt.key) || dotRegex.test(evt.key)

}

const countDots = (evt) => {
  const val = evt.target.value + evt.key
  return (val.match(dotRegex) || []).length
}

const replaceDots = (evt) => {
  const val = evt.target.value + evt.key
  
  return val
    .replace(/[a-zA-Z]|,/gim, '')
    .replace('.', '_')
    .replace(dotRegex, '')
    .replace('_', '.')
}

export { 
  isNumberOrDot,
  countDots,
  replaceDots
}