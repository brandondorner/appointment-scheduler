const sortArrayByDate = (array) => {
  return array.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date)
  })
}

export default sortArrayByDate
