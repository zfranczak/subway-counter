let countUp = document.getElementById('count');
let count = 0;
let lastSave = document.getElementById('save-list');
let saveStr = document.getElementById('paste');
let saveList = [];

function incUp() {
  count++;
  countUp.textContent = count;
}

function saves() {
  let countStr = count + ' - ';

  saveList.push(count);
  saveStr.textContent += countStr;
  // This method uses an array instead of a string:
  //  saveStr.textContent = saveList;
  console.log(saveList);
  count = 0;
  countUp.textContent = count;
}
