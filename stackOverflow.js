function countDown (num) {
  if (num === 1) return 1
  if (num % 1000 === 0) console.log(num)
  return countDown(num - 1)
}
countDown(30000)
