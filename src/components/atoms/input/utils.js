const onlyNumbersRegex = /\d/
const dotRegex = /\./g
const isNumberOrDot = (val) => onlyNumbersRegex.test(val) || dotRegex.test(val)
const countDots = (val) => (val.match(dotRegex) || []).length
const replaceDots = (val) => val.replace('.', '').replace(dotRegex, '').replace('', '.')


export const maskFloat = (val) => {
  return val = replaceDots(val)
 
}

export const acceptOnlyNumber = (val) => 
  // keypress
    isNumberOrDot(val)
      ? true 
      : false

export const maskInputToFloat = (val) => 
  //keyup
    (countDots(val) == 0) 
      ? true
      : maskFloat(val)

export const maskInput = (val) => {
  acceptOnlyNumber(val)
  ? maskInputToFloat(val)
  : ""
  
}

console.log(replaceDots("1.222...1112233.."))