// code your solution here
function superbowlWin(arr) {
    const result = arr.find(ele => ele.result === 'W')
    return result ? result.year : undefined
}
