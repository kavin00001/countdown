const endDate = "15 july 2024 1:12 pm";
let end = document.querySelector(".enddate");
end.innerText = endDate;
let inputs = document.querySelectorAll("input");

const Clock = () => {
  let endTime = new Date(endDate);
  let nowTime = new Date();
  let diff = (endTime - nowTime) / 1000;
  if (diff < 0) return;
  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;
};
Clock();

setInterval(() => {
  Clock();
}, 1000);
