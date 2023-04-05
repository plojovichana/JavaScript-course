const countryNameElement = document.getElementById("country-name");
const countryDetailsElement = document.getElementById("country-details");

const searchParams = new URLSearchParams(window.location.search);
const countryName = searchParams.get("name");

fetch(`https://restcountries.com/v3.1/name/${countryName}`)
	.then(response => response.json())
	.then(data => {
		const country = data[0];
		
		countryNameElement.innerText = country.name.common;
		
		const flagElement = document.getElementById("country-flag");
		flagElement.src = country.flags.svg;
		
		const countryDetailsList = document.createElement("ul");
		
		const capitalItem = document.createElement("li");
		capitalItem.innerText = `Glavni grad: ${country.capital}`;
		countryDetailsList.appendChild(capitalItem);
		
		const regionItem = document.createElement("li");
		regionItem.innerText = `Regija: ${country.region}`;
		countryDetailsList.appendChild(regionItem);
		
		const subregionItem = document.createElement("li");
		subregionItem.innerText = `Podregija: ${country.subregion}`;
		countryDetailsList.appendChild(subregionItem);
		
		const populationItem = document.createElement("li");
		populationItem.innerText = `Stanovništvo: ${country.population}`;
		countryDetailsList.appendChild(populationItem);
		
		const languageItem = document.createElement("li");
		const languages = Object.values(country.languages);
		languageItem.innerText = `Jezik: ${languages.join(", ")}`;
		countryDetailsList.appendChild(languageItem);
		
		const currencyItem = document.createElement("li");
		const currencies = Object.values(country.currencies).map(currency => currency.name);
		currencyItem.innerText = `Valuta: ${currencies.join(", ")}`;
		countryDetailsList.appendChild(currencyItem);
		
		countryDetailsElement.appendChild(countryDetailsList);
	})
	.catch(error => {
		console.log("Došlo je do greške pri dobavljanju detalja o državi:", error);
	});
