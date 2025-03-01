const cards = document.querySelectorAll(".task-card");

const nowDate = new Date().toLocaleString("en-US", { dateStyle: "medium" });
const todayDate = document.getElementById("today-date");
todayDate.innerText = nowDate;

const nowDay = new Date().toLocaleString("en-US", { weekday: "long" });
const todayDay = document.getElementById("today-day");
todayDay.innerText = nowDay;

const nowTime = new Date().toLocaleString("en-US", { timeStyle: "short" });

taskCountView = document.querySelector(".task-count");
let cardsCount = cards.length < 10 ? "0" + cards.length : cards.length;
taskCountView.innerText = cardsCount;

const taskCompleted = document.getElementById("task-completed-count");

const cardButton = document.querySelectorAll(".task-card button");
const cardTitle = document.querySelectorAll(".task-card h1");
const historyView = document.getElementById("history-main");

const historyButton = document.getElementById("clear-history");

for (let i = 0; i < cards.length; i++) {
    
  cardButton[i].addEventListener("click", () => {
    //dicrease task count
    let a = cardsCount--;
    sum = a - 1;
    taskCountView.innerText = sum < 10 ? "0" + sum : sum;
    //increase task completed count
    taskCompleted.innerText++;
    //deabled button
    cardButton[i].setAttribute("disabled", true);
    //alert message
    alert("You Have Completed : " + cardTitle[i].innerText);
    //add to history
    historyView.innerHTML += `<h2 class="text-sm text-justify rounded-md px-4 py-2 bg-blue-50 w-full">You Have Completed :<br><span class="font-semibold">${cardTitle[i].innerText}</span><br>at <span class="font-semibold">${nowTime}, ${nowDate}</span></h2>`;
    //enable history button
    historyButton.removeAttribute("disabled");
  });
}

//for clear history

  historyButton.addEventListener("click", () => {
    historyView.innerHTML = "";
    historyButton.setAttribute("disabled", true);
    alert("Full History cleared !");
  });


