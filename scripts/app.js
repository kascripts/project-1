const grid = document.querySelector('.grid ')
const cells = [] 


const width = 16
const totalCells = width * width

let playerPosition = 242

let blueVill1 = [53, 171]
let blueVill1Start = [63,175]

let redVill1 = [73,74]
let redVill1Start = [79,79]

let redVill3 = [96, 97]
let redVill3Start = [111,111]

let redVill4 = [211, 212]
let redVill4Start = [223,223]


let redVill5 = [186, 187]
let redVill5Start = [191,191]

let blueVill2 = [133]
let blueVill2Start = [143]

let blueVill3 = [231]
let blueVill3Start = [239]

let blueVill4 = [198]
let blueVill4Start = [207]

let blueVill5 = [93]
let blueVill5Start = [95]

let blueVill6 = [171]
let blueVill6Start = [175,175]

let blackVill = [63]
let blackVillStart = [47]

let specialIt = [36, 153]

const timerArray = []



const escapePassage = [17, 18, 19, 20, 21, 22,23,24,26,27,28,29,30]




const endOfMap = [16,32,48,64,80,96,112,128,144,160,176,192,208,224,240]

// const redVill1 = [180,181,182]
// const redVill2 = [49,50,51]

const safeSection = [112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127]

const blackMoveArea = [17,18,19,20,21,22,23,
  24,25,26,27,28,29,30,33,34,35,36,37,38,39,
  40,41,42,43,44,45,46]

const blackMoveConstraint = 28

const hiddenCells = 
[0,1,2,3,4,5,6,7,8,9,
  10,11,12,13,14,15,16,31,
  32,47,48,63,64,79,80,95,
  96,111,112,127,128,143,144,
  159,160,175,176,191,192,207,
  208,223,224,239,240,255]

const winCells = [25]

function hideCells(cells) {
  for (let index = 0; index < hiddenCells.length; index++) {
    cells[hiddenCells[index]].classList.add('hiddenCells');
    console.log(cells)
  }
}
console.log(hideCells[hiddenCells])

function playerPos() {
  cells[playerPosition].classList.add('playerGreen')
}


function blueVillains(villain) {
  for (let index = 0; index < villain.length; index++) {
    blueVill1.forEach(blueEnemy => {
      cells[villain[index]].classList.add('blueSprite')
    })
  }
}



function redVillains(villain) {
  for (let index = 0; index < villain.length; index++) {
    cells[villain[index]].classList.add('redSpriteFront')
  } 
}

function redVillains2(villain) {
  for (let index = 0; index < villain.length; index++) {
    cells[villain[index]].classList.add('redSpriteFront')
  } 
}

function redVillains3(villain) {
  for (let index = 0; index < villain.length; index++) {
    cells[villain[index]].classList.add('redSpriteFront')
  } 
}

function redVillains4(villain) {
  for (let index = 0; index < villain.length; index++) {
    cells[villain[index]].classList.add('redSpriteFront')
  } 
}

function redVillains5(villain) {
  for (let index = 0; index < villain.length; index++) {
    cells[villain[index]].classList.add('redSpriteFront')
  } 
}

function blackVillain(villain) {
  for (let index = 0; index < villain.length; index++) {
    cells[villain[index]].classList.add('blackSprite')
  } 
}


function safeArea(safe) {
  for (let index = 0; index < safe.length; index++) {
    cells[safe[index]].classList.add('pinkSprite')
  } 
}

function escape(win) {
  for (let index = 0; index < win.length; index++) {
    cells[win[index]].classList.add('escapeSprite')
  } 
}


function specialItems(item) {
  for (let index = 0; index < item.length; index++) {
    cells[item[index]].classList.add('specialItem')
  } 
}
// function blackVillIndex() {
//   cells[playerPosition].classList.add('blackSprite')
// }


//! GRID CREATION


function createGrid() {
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div')
    cell.textContent = i
    grid.appendChild(cell)
    cells.push(cell)
  }
  playerPos()
  // blueVillains(blueVill1)
  blueVillains(blueVill2)
  blueVillains(blueVill3)
  blueVillains(blueVill4)
  blueVillains(blueVill5)
  blueVillains(blueVill5)
  blueVillains(blueVill6)
  redVillains(redVill1)
  redVillains3(redVill3)
  redVillains4(redVill4)
  redVillains5(redVill5)
  specialItems(specialIt)
  blackVillain(blackVill)
  safeArea(safeSection)
  escape(escapePassage)
  // redVillains(redVill1)
  
  // redVillains(redVill2)
  hideCells(cells)
  
} 

createGrid()


// const lengthOfCells = cells.length

// console.log(lengthOfCells)



//* Moving the squares around *//

// let blueMovementIndex = 0


//     blueVill1.forEach(blueEnemy => {
//       blueMovementIndex -= 1
//       cells[blueEnemy].classList.remove('blueSprite')
//       blueEnemy -= 1
//       cells[blueEnemy].classList.add('blueSprite')


// let playerIsDead = false

let blueMovementIndex = 0

let redMovementIndex = 0
//! this to look at if/else issue
// const blueMove2 = setInterval(() => {
  
//   blueVill2 = blueVill2.map((blueEnemy, i) => {
//     if (endOfMap.includes(blueEnemy)) {
//       blueEnemy = blueVill2Start[i]
//       // console.log(blueVill1[i], blueVill1Start[i])
//     } else if ((blueVill2.includes(specialIt)) {
//       redMovementIndex += 1
//       cells[blueEnemy].classList.remove('blueSprite')
//       blueEnemy -= 16
//       cells[blueEnemy].classList.add('blueSprite')
//       return blueEnemy
//     } else {
//       redMovementIndex += 1
//       cells[blueEnemy].classList.remove('blueSprite')
//       blueEnemy -= 1
//       cells[blueEnemy].classList.add('blueSprite')
//       return blueEnemy

//     }
//   })
//   checkIfDead(blueMove2)
  
// }, 632)

const blueMove3 = setInterval(() => {
  
  blueVill3 = blueVill3.map((blueEnemy, i) => {
    if (endOfMap.includes(blueEnemy)) {
      blueEnemy = blueVill3Start[i]
      // console.log(blueVill1[i], blueVill1Start[i])
    }
    redMovementIndex += 1
    cells[blueEnemy].classList.remove('blueSprite')
    blueEnemy -= 1
    cells[blueEnemy].classList.add('blueSprite')
    return blueEnemy
  })
  checkIfDead(blueMove3)
  
}, 280)



const blueMove4 = setInterval(() => {
  
  blueVill4 = blueVill4.map((blueEnemy, i) => {
    if (endOfMap.includes(blueEnemy)) {
      blueEnemy = blueVill4Start[i]
    }
    redMovementIndex += 1
    cells[blueEnemy].classList.remove('blueSprite')
    blueEnemy -= 1
    cells[blueEnemy].classList.add('blueSprite')
    return blueEnemy
  })
  checkIfDead(blueMove4)
  
}, 220)
stopAll = []

stopAll.push()



const blueMove5 = setInterval(() => {
  
  blueVill5 = blueVill5.map((blueEnemy, i) => {
    if (endOfMap.includes(blueEnemy)) {
      blueEnemy = blueVill5Start[i]
      // console.log(blueVill1[i], blueVill1Start[i])
    }
    redMovementIndex += 1
    cells[blueEnemy].classList.remove('blueSprite')
    blueEnemy -= 1
    cells[blueEnemy].classList.add('blueSprite')
    return blueEnemy
  })
  
  checkIfDead(blueMove5)

}, 500)

const blueMove6 = setInterval(() => {
  
  blueVill6 = blueVill6.map((blueEnemy, i) => {
    if (endOfMap.includes(blueEnemy)) {
      blueEnemy = blueVill6Start[i]
      // console.log(blueVill1[i], blueVill1Start[i])
    }
    redMovementIndex += 1
    cells[blueEnemy].classList.remove('blueSprite')
    blueEnemy -= 1
    cells[blueEnemy].classList.add('blueSprite')
    return blueEnemy
  })
  
  checkIfDead(blueMove5)

}, 500)



const redMove1 = setInterval(() => {
  
  redVill1 = redVill1.map((redEnemy, i) => {
    if (endOfMap.includes(redEnemy)) {
      redEnemy = redVill1Start[i]
      // console.log(blueVill1[i], blueVill1Start[i])
    }
    redMovementIndex += 1
    cells[redEnemy].classList.remove('redSpriteFront')
    redEnemy -= 1
    cells[redEnemy].classList.add('redSpriteFront')
    return redEnemy
  })
  
  checkIfDead(redMove1)
}, 720)

// const redMove2 = setInterval(() => {
  
//   redVill2 = redVill2.map((redEnemy, i) => {
//     if (endOfMap.includes(redEnemy)) {
//       redEnemy = redVill2Start[i]
//       // console.log(blueVill1[i], blueVill1Start[i])
//     }
//     redMovementIndex += 1
//     cells[redEnemy].classList.remove('redSpriteFront')
//     redEnemy -= 1
//     cells[redEnemy].classList.add('redSpriteFront')
//     return redEnemy
//   })
//   checkIfDead(redMove2)
  
// }, 900)

const redMove3 = setInterval(() => {
  
  redVill3 = redVill3.map((redEnemy, i) => {
    if (endOfMap.includes(redEnemy)) {
      redEnemy = redVill3Start[i]
      // console.log(blueVill1[i], blueVill1Start[i])
    }
    redMovementIndex += 1
    cells[redEnemy].classList.remove('redSpriteFront')
    redEnemy -= 1
    cells[redEnemy].classList.add('redSpriteFront')
    return redEnemy
  })
  checkIfDead(redMove3)
  
}, 562)

const redMove4 = setInterval(() => {
  
  redVill4 = redVill4.map((redEnemy, i) => {
    if (endOfMap.includes(redEnemy)) {
      redEnemy = redVill4Start[i]
      // console.log(blueVill1[i], blueVill1Start[i])
    }
    redMovementIndex += 1
    cells[redEnemy].classList.remove('redSpriteFront')
    redEnemy -= 1
    cells[redEnemy].classList.add('redSpriteFront')
    return redEnemy
  })
  checkIfDead(redMove3)
  timerArray.push[redMove4]
}, 2002)



const redMove5 = setInterval(() => {
  
  redVill5 = redVill5.map((redEnemy, i) => {
    if (endOfMap.includes(redEnemy)) {
      redEnemy = redVill5Start[i]
      // console.log(blueVill1[i], blueVill1Start[i])
    }
    redMovementIndex += 1
    cells[redEnemy].classList.remove('redSpriteFront')
    redEnemy -= 1
    cells[redEnemy].classList.add('redSpriteFront')
    return redEnemy
  })
  checkIfDead(redMove5)
  console.log(redMove5)
},400)



const blackVillMovementArray = [63,62,61,60,44,43,
  42,41,57,56,55,39,38,37,53,
  52,51,35,34,33,49,48]


let blackVillMovementIndex = 0

const blackMove = setInterval(() => {
  
  blackVill = blackVill.map((end, i) => {
    if (endOfMap.includes(end)) {
      blackVillMovementIndex = 0
    }
    blackVillMovementIndex += 1
    cells[end].classList.remove('blackSprite')
    end = blackVillMovementArray[blackVillMovementIndex]
    cells[end].classList.add('blackSprite')

    return end
  })

  checkIfDead()
  
}, 200)


let playerIsDead = true



function checkIfDead (timer){
  if ((blueVill2.includes(playerPosition) || blueVill5.includes(playerPosition) || 
  blueVill3.includes(playerPosition) || blueVill4.includes(playerPosition) || blueVill6.includes(playerPosition) || redVill1.includes(playerPosition) || redVill3.includes(playerPosition) || redVill4.includes(playerPosition) || redVill5.includes(playerPosition)))  {
    console.log(timer)
    clearInterval(timer)
    cells[playerPosition].classList.remove('specialItem')
    alert('you died')
    playerIsDead = true
    cells[playerPosition].classList.remove('playerGreen')
    playerPosition = 242
    cells[playerPosition].classList.add('playerGreen')
  }
  
}

function youWin () {
  alert('you win')
}

//! grabItems function

const points = document.querySelector('#points')
const lives = document.querySelector('#lives')

let livesNum = 0
let pointScore = 0

function grabSpecialItem (){
  if ((specialIt.includes(playerPosition)))  {
    cells[playerPosition].classList.remove('specialItem')
    pointScore++
    points.innerHTML = pointScore   
  } else if (pointScore === specialIt.length){
    livesNum++
    lives.innerHTML = livesNum
    pointScore = 0
  } 
}









// const rowPosition = playerPosition % width
// const colPosition = Math.floor(playerPosition / width)

document.addEventListener('keyup', (event) => { 
  const key = event.code
  console.log(event.code)

  if (key === 'KeyW') {
    if (cells[playerPosition - 16].classList.contains('hiddenCells') || cells[playerPosition - 16].classList.contains('escapeSprite') ) {
      return
    } else {
      cells[playerPosition].classList.remove('playerGreen')
      playerPosition -= 16
      cells[playerPosition].classList.add('playerGreen')
    } 
  
  } else if (key === 'KeyD') {
    if (cells[playerPosition + 1].classList.contains('hiddenCells')) {
      return
    } 
    cells[playerPosition].classList.remove('playerGreen')
    playerPosition += 1
    cells[playerPosition].classList.add('playerGreen')
  } else if (key === 'KeyA') {
    if (cells[playerPosition - 1].classList.contains('hiddenCells')) {
      return
    } 
    cells[playerPosition].classList.remove('playerGreen')
    playerPosition -= 1
    cells[playerPosition].classList.add('playerGreen')
  } else if (key === 'KeyS') {
    if (cells[playerPosition - 16].classList.contains('hiddenCells') && playerPosition > cells.length) {
      return
    } 
    cells[playerPosition].classList.remove('playerGreen')
    playerPosition += 16
    cells[playerPosition].classList.add('playerGreen')
  } 
  if (winCells.includes(playerPosition)) {
    console.log('u win')
    youWin()
  }
  grabSpecialItem()
  checkIfDead()
}
)



// function discoLights() {
//   setInterval(() => {
//     cells[dancePosition].classList.remove('light')
//     dancePosition = Math.floor(Math.random() * cells.length) 
//     cells[dancePosition].classList.add('light')
//   }, 1000)
// }

// discoLights()




// let blueMovementIndex6 = 0

// const blueMove6 = setInterval(() => {
//   if (blueMovementIndex6 === 15){ 
//     clearInterval(blueMove6)
//   } else {
//     blueMovementIndex6 += 1
//     cells[blueVill16].classList.remove('blueSprite')
//     blueVill16 -= 1
//     cells[blueVill16].classList.add('blueSprite')
//   }

// }, 300)

