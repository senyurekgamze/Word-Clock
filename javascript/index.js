function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let lostAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
    lostAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Amsterdam
  let amsterdamElement = document.querySelector("#amsterdam");
  if (amsterdamElement) {
    let amsterdamDateElement = amsterdamElement.querySelector(".date");
    let amsterdamTimeElement = amsterdamElement.querySelector(".time");
    let amsterdamTime = moment().tz("Europe/Amsterdam");

    amsterdamDateElement.innerHTML = amsterdamTime.format("MMMM	Do YYYY");
    amsterdamTimeElement.innerHTML = amsterdamTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Casablanca
  let casablancaElement = document.querySelector("#casablanca");
  if (casablancaElement) {
    let casablancaDateElement = casablancaElement.querySelector(".date");
    let casablancaTimeElement = casablancaElement.querySelector(".time");
    let casablancaTime = moment().tz("Africa/Casablanca");

    casablancaDateElement.innerHTML = casablancaTime.format("MMMM	Do YYYY");
    casablancaTimeElement.innerHTML = casablancaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Singapore
  let singaporeElement = document.querySelector("#singapore");
  if (singaporeElement) {
    let singaporeDateElement = singaporeElement.querySelector(".date");
    let singaporeTimeElement = singaporeElement.querySelector(".time");
    let singaporeTime = moment().tz("Asia/Singapore");

    singaporeDateElement.innerHTML = singaporeTime.format("MMMM	Do YYYY");
    singaporeTimeElement.innerHTML = singaporeTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
