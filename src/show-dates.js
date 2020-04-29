const week = [];

function getDates() {
  const today = new Date();

  for (let i = 1; i <= 7; i++) {
    const monday = today.getDate() - today.getDay() + i;
    const options = {
      weekday: "short", year: "numeric", month: "long", day: "numeric",
    };
    const day = new Date(today.setDate(monday)).toLocaleDateString("en-EN", options);
    week.push(day);
  }
}

function showDates() {
  const days = document.querySelectorAll(".day");

  getDates();

  days.forEach((day, i) => {
    day.insertAdjacentHTML(
      "beforeend",
      `<span>${week[i]}</span>`,
    );
  });
}

export default showDates;
