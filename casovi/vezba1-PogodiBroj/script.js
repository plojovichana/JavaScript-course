let input = document.querySelector('input');
let button = document.querySelector('button');
let p = document.querySelector('p');
let random = Math.floor(Math.random() * 5) + 1;
let brojac = 0;

button.addEventListener('click', function() {
    let pogodi = Number(input.value);
    brojac++;
    if (pogodi === random) {
        p.textContent = 'Pogodili ste broj iz ' + brojac +". pokusaja";
        button.disabled = true;
    } else if (pogodi < random) {
        p.textContent = 'Broj treba da bude veci!';
    } else if (pogodi > random) {
        p.textContent = 'Broj treba da bude manji!';
    }
    }
);