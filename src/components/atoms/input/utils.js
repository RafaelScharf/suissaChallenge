const onlyNumbersRegex = /\d/
const dotRegex = /\./g
const backspaceRegex = /\b/

const isNumberOrDot = (evt) => {
  const val = evt.target.value + evt.key
  return onlyNumbersRegex.test(evt.key) 
    || dotRegex.test(evt.key)
    // || backspaceRegex.test(evt.key)

}

const countDots = (evt) => {
  const val = evt.target.value + evt.key
  return (val.match(dotRegex) || []).length
}

const replaceDots = (evt) => {
  const val = evt.target.value //+ evt.key
  if ( evt.keyCode == 8 )
    return evt.target.value.slice(0, -1)


  console.log('replaceDots: ', {val}, evt.target.value, evt.key)
  return val
    .replace(/[a-zA-Z]|,/gim, '')
    .replace('.', '_')
    .replace(dotRegex, '')
    .replace('_', '.')
    .replace(/^0{2,}/, '')
}

export { 
  isNumberOrDot,
  countDots,
  replaceDots
}