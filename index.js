const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let win = array.find(e => {return e.result === 'W'})
  if (win){
    return win.year
  }
  else {
    return undefined
  }
}