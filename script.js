
let calendarData
const displayBoard = function() {

    const monthContainerNode = document.getElementById("board-container") 

    for (let dayNumber = 1; dayNumber <= 76; dayNumber++) { 

        let newDayNode = document.createElement("div") 
        newDayNode.classList.add("day") 
        newDayNode.innerText = dayNumber 
        //newDayNode.onclick = selectday
        monthContainerNode.appendChild(newDayNode)
    }
}
window.onload=function(){
    displayBoard()
}