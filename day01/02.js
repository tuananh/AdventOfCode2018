const fs = require('fs').promises

;(async function () {
    const txt = await fs.readFile(__dirname + '/input.txt') // same input as 01
    const lines = txt.toString().split('\n')
    const values = lines.map(Number)

    const seenFreqDict = {}
    let repeatTwice = false
    let freq = 0
    while (!repeatTwice) {
        for (let i =0; i < values.length; i += 1) {
            const val = values[i]
            freq += val
            if (seenFreqDict[freq] === undefined) {
                seenFreqDict[freq] = 1
            } else {
                repeatTwice = true
                console.log(freq)
                break
            }
        }
    }
})()