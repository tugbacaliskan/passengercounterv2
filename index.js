let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("total-el");

let gecmisBilgi = localStorage.getItem("gecmisBilgi");
let totalPeople = localStorage.getItem("totalpeople");

let totalCount;

if (gecmisBilgi !== null) {
  saveEl.textContent = localStorage.getItem("gecmisBilgi");
  totalEl.textContent = localStorage.getItem("totalPeople");
} else {
  saveEl.textContent = "";
}

if (totalPeople == null) {
  totalCount = 0;
} else {
  totalCount = parseInt(totalPeople);
  totalEl.textContent = `Total People: ${totalCount}`;
}

let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  totalCount += parseInt(count);
  totalEl.textContent = `Total People: ${totalCount}`;

  let countStr = count + " - ";
  saveEl.textContent += countStr;

  localStorage.setItem("gecmisBilgi", saveEl.textContent);
  localStorage.setItem("totalpeople", totalCount);

  countEl.textContent = 0;
  count = 0;
}
