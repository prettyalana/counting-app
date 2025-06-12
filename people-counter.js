let countEl = document.getElementById("count");

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

let deincrementCount = document.getElementById("count");

function deincrement() {
  count -= 1;
  deincrementCount.textContent = count;
  if (count <= 0) {
    return (deincrementCount.textContent = 0), (count = 0);
  }
}

let saveEl = document.getElementById("save-el");

function save() {
  let saveCount = [count + " - "];
  saveEl.textContent += saveCount;
  countEl.textContent = 0;
  count = 0;
}

let resetCount = document.getElementById("count");

function reset() {
  count = 0;
  countEl.textContent = 0;
}

let reloadPage = document.getElementById("reload");

function reload() {
  count = 0;
  countEl.textContent = 0;
  saveEl.textContent = null;
}
