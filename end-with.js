function solution(str, ending){
  // TODO: complete

  let end = ending.length
  let strEnd = str.slice(-end)
  if (strEnd === ending) {
    return true
    } else {
      return false 
      }
}
