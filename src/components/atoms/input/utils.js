export const inputMask = (val) => {
  const onlyNumbersRegex = /\d/
  const dotRegex = /\./g
  const lettersRegex = /\D/g

  const isNumberOrDot = (val) => onlyNumbersRegex.test(val) || dotRegex.test(val)
  const countDots = (val) => (String(val).match(dotRegex) || []).length
  const replaceDots = (val) => String(val).replace(dotRegex, '').replace(lettersRegex, '')
  
  val = isNumberOrDot(val)
    ? val = replaceDots(val)
    : countDots(val)

 
  return val;

}

