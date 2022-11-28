// //Code your solutions in this file

function writeCards(arrayOfNames, eventName) {
    let card = []
    for (let i = 0; i < arrayOfNames.length; i++) {
        card.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return card
}

function countDown(positiveInteger) {
    while (positiveInteger > 0 ) {
        console.log(positiveInteger)
        positiveInteger -= 1
    }
    console.log(positiveInteger)
}
