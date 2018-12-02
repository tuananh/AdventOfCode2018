const fs = require('fs').promises

async function readInput() {
    const txt = await fs.readFile(__dirname + '/input.txt')
    const boxIds = txt.toString().split('\n')
    return boxIds
}

function count(boxId) {
    const chars = boxId.split('')
    return chars.reduce((acc, val) => {
        if (!acc[val]) {
            acc[val] = 0
        }

        acc[val] += 1
        return acc
    }, {})
}

(async function () {
    const boxIds = await readInput()
    let seenTwice = 0
    let seenThreeTimes = 0

    for (let i =0; i < boxIds.length; i += 1) {
        const boxId = boxIds[i]
        const charCounts = count(boxId)

        const twoChars = Object.keys(charCounts).filter(c => charCounts[c] === 2)
        const threeChars = Object.keys(charCounts).filter(c => charCounts[c] === 3)

        if (twoChars.length) {
            seenTwice += 1
        }

        if (threeChars.length) {
            seenThreeTimes += 1
        }
    }

    console.log(seenTwice * seenThreeTimes)
})()