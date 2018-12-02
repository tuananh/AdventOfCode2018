const fs = require('fs').promises

async function readInput() {
    const txt = await fs.readFile(__dirname + '/input.txt')
    const boxIds = txt.toString().split('\n')
    return boxIds
}

function distance(s1, s2) {
    // assume same length?
    let dist = 0
    for (let i = 0; i < s1.length; i += 1) {
        if (s1[i] !== s2[i]) {
            dist += 1

            // The boxes will have IDs which differ by exactly one character at the same position in both strings.
            if (dist > 1) return dist
        }
    }

    return dist
}

function findCorrectBoxId(boxIds) {
    for (let i = 0; i < boxIds.length; i += 1) {
        for (let j = 0; j < boxIds.length; j += 1) {

            // The boxes will have IDs which differ by exactly one character at the same position in both strings.
            if (distance(boxIds[i], boxIds[j]) === 1) {
                // return the correct box id
                const s1 = boxIds[i]
                const s2 = boxIds[j]

                let output = ''
                for (let k = 0; k < s1.length; k += 1) {
                    if (s1[k] === s2[k]) {
                        output += s1[k]
                    }
                }
                return output
            }
        }
    }

    return 'unable to find correct box id'
}

(async function () {
    const boxIds = await readInput()

    console.log(findCorrectBoxId(boxIds));

})()