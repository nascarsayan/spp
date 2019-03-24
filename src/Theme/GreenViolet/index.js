import _ from 'lodash'
const lim = (arr, idx = 0) => idx < 0 ? arr[arr.length - _.clamp(idx, 1 - arr.length, -1)] : arr[_.clamp(idx, 0, arr.length - 1)]

const GreenViolet = {
  col: {
    violet: {
      card: (i) => lim(['#7F63C8', '#C1B3E6'], i) ,
      pr: (i) => lim(['#694ABF'], i),
      // hr: (i) => lim(['#926AD3']),
      // text: (i) => lim(['#652FBF']),
      text: (i) => lim(['#9892A7'], i),
      dark: (i) => lim(['#2B2047', '#652FBF'], i),
      shades: (i) => lim(['#2B2047', '#533A9C', '#4649AC'], i)
    },
    green: {
      pr: (i) => lim(['#37D6A8', '#2FA787'], i),
    },
    grey: {
      pr: (i) => lim(['#DEDEDE', '#CBCBCB', '#CCCCCC'], i),
    },
    white: {
      pr: (i) => lim(['#ffffff'], i),
    }
  }
}
export default GreenViolet