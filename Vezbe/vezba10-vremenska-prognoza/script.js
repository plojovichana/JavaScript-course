const API_KEY = `dde669c54dbec53c562abad52d716702`;
const BASE_URL = `https://api.openweathermap.org/data/2.5`;
const container = document.querySelector(".div");
const input = document.querySelector(".input")
const btn = document.querySelector(".btn")


 async function getData (city) {
    const data = await fetch(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
    const response = await data.json();
    return response;
}
btn.addEventListener("click", () => {
    
    getData(input.value).then((res)=>{
    console.log(res);

    let cityname = document.createElement("h3");
    cityname.innerText =  input.value;
    container.appendChild(cityname)

    input.value = "";
    
    let img = document.createElement("img");
    img.src = `https://openweathermap.org/img/w/${res.weather[0].icon}.png`;
    container.appendChild(img)
    img.style.width = "140px";


    let weather = document.createElement("h1");
    weather.innerText =  res.main.temp + "C"; 
    container.appendChild(weather)

    let maxtemp = document.createElement("p");
    maxtemp.innerText = "Maximalna temperatura: "+ res.main.temp_max + "C";
    container.appendChild(maxtemp)

    let mintemp = document.createElement("p");
    mintemp.innerText = "Minimalna temperatura: "+ res.main.temp_min + "C";
    container.appendChild(mintemp)

    let opis = document.createElement("h4");
    opis.innerText = res.weather[0].description;
    container.appendChild(opis);

    let vlaznost = document.createElement("p");
    vlaznost.innerText = "Vlaznost: " + res.main.humidity;
    container.appendChild(vlaznost);

    let pritisak = document.createElement("p");
    pritisak.innerText = "Pritisak: " + res.main.pressure;
    container.appendChild(pritisak);

    let oblaci = document.createElement("p");
    oblaci.innerText = "Oblaci: " + res.clouds.all;
    container.appendChild(oblaci);

    let vetar = document.createElement("p");
    vetar.innerText = "Vetar: " + res.wind.speed;
    container.appendChild(vetar);

    let sunr = document.createElement("p");
    sunr.innerText = "Izlazak sunca: " + new Date(res.sys.sunrise * 1000).toLocaleTimeString();
    container.appendChild(sunr);

    let suns = document.createElement("p");
    suns.innerText = "Zalazak sunca: " + new Date(res.sys.sunset * 1000).toLocaleTimeString();
    container.appendChild(suns);

    let crta = document.createElement("p");
    crta.innerText = "______________________________________________" ;
    crta.style.margin = "20px 0px";
    container.appendChild(crta);



});

});