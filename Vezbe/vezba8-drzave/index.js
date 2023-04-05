const countryGrid = document.getElementById("country-grid");

fetch("https://restcountries.com/v3.1/all")
	.then(response => response.json())
	.then(data => {
		data.forEach(country => {
			const countryBox = document.createElement("div");
			countryBox.classList.add("country-box");
			countryBox.addEventListener("click", () => {
				window.location.href = `details.html?name=${country.name.common}`;
			});
			
			const flagImg = document.createElement("img");
			flagImg.src = country.flags.png;
			flagImg.alt = `${country.name.common} zastava`;
			countryBox.appendChild(flagImg);
			
			const countryName = document.createElement("p");
			countryName.innerText = country.name.common;
			countryBox.appendChild(countryName);
			
			countryGrid.appendChild(countryBox);
			countryBox.style.width = "300px";
			countryBox.style.height = "200px";
		});
	})
	.catch(error => {
		console.log("Došlo je do greške pri dobavljanju podataka o državama:", error);
	});

	