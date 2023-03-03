const sortArrayByTime = (array) => {
  return array.sort(function (a, b) {
    return new Date('1970/01/01 ' + a.time) - new Date('1970/01/01 ' + b.time)
  })
}

export default sortArrayByTime
