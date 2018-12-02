const fs = require('fs').promises

;(async function () {
    const txt = await fs.readFile(__dirname + '/input.txt')
    const lines = txt.toString().split('\n')
    const sum = lines.map(Number).reduce((acc, currentVal) => acc + currentVal, 0)
    console.log(sum)
})()