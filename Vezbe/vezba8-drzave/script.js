const countriesDiv = document.getElementById("countries");

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      const countryDiv = document.createElement("div");
      countryDiv.className = "country-card";

      const flagImg = document.createElement("img");
      flagImg.src = country.flags.svg;
      flagImg.alt = `${country.name.common} flag`;
      countryDiv.appendChild(flagImg);

      const nameP = document.createElement("p");
      nameP.textContent = country.name.common;
      nameP.style.fontWeight = "bold";
      nameP.style.margin = "15px 0px";
      nameP.style.textAlign = "bottom";
      countryDiv.appendChild(nameP);

      const detailsDiv = document.createElement("div");
      detailsDiv.className = "country-details";

      const capitalP = document.createElement("p");
      capitalP.textContent = `Capital: ${country.capital}`;
      detailsDiv.appendChild(capitalP);

      const populationP = document.createElement("p");
      populationP.textContent = `Population: ${country.population}`;
      detailsDiv.appendChild(populationP);

      const languageP = document.createElement("p");
      languageP.textContent = `Language: ${Object.values(country.languages)[0]}`;
      detailsDiv.appendChild(languageP);

      countryDiv.appendChild(detailsDiv);

      countryDiv.addEventListener("click", () => {
        detailsDiv.style.display = detailsDiv.style.display === "none" ? "block" : "none";
      });

      countriesDiv.appendChild(countryDiv);
    });
  })
  .catch((error) => console.error(error));
