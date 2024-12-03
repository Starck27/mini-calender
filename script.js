const monthNameElement = document.getElementById("month-name");
const dayNameElement = document.getElementById("day-name");
const dayNumberElement = document.getElementById("day-number");
const yearElement = document.getElementById("year");

const language = "id";

function updateCalender(language) {
  const date = new Date();
  monthNameElement.innerText = date.toLocaleString(language, {
    month: "long",
  });
  dayNameElement.innerText = date.toLocaleString(language, {
    weekday: "long",
  });
  dayNumberElement.innerText = date.toLocaleString(language, {
    day: "2-digit",
  });
  yearElement.innerText = date.toLocaleString(language, {
    year: "numeric",
  });
}

updateCalender(language);
