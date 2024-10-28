let count = 0;
countEl = document.getElementById('count-el');
saveEl = document.getElementById('save-el');

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let strich = " - ";
    saveEl.textContent += count + strich;
    countEl.textContent = 0;
    count = 0;
}