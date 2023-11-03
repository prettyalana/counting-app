let countEl = document.getElementById("count")
// console.log(countEl)

let count = 0;

function increment() {
    count += 1
    countEl.textContent = count
}

let deincrementCount = document.getElementById("count")

function deincrement() {
    count -= 1
    deincrementCount.textContent = count
    if(count <= 0) {
        return deincrementCount.textContent = 0, count = 0
    } 
}

let saveEl = document.getElementById("save-el")


function save() {
    let saveCount = [count + " - "]
    saveEl.textContent += saveCount
    countEl.textContent = 0
    count = 0
}

let resetCount = document.getElementById("count")

function reset() {
    count = 0
    countEl.textContent = 0 
}

let reloadPage = document.getElementById("reload")

function reload() {
    count = 0
    countEl.textContent = 0
    saveEl.textContent = null
}

// let totalEntries = document.getElementById("total-entries")

// function total() {
//     entryMax = saveCount
// }

// let maxVisitors = document.getElementById("max-visitors")

// function max() {
//     if() {

//     }
// }
// If the previous entries equate to max display a message that says "You have reached your Max!" and display the max number 








// document.getElementById("count").innerText = 8

// let count = 5 

// count = count + 1;

// console.log(count)


//  let websiteVisitors = document.getElementById("count").innerText = 0

// let websiteVisitors = document.getElementById("count").innerText


// console.log(websiteVisitors)




