const { trampoline } = require('./trampoline')

function countDown (num) {
  if (num === 1) return 1
  if (num % 1000 === 0) console.log(num)
  return () => countDown(num - 1)
}

const tramped = trampoline(countDown)

tramped(30000)
