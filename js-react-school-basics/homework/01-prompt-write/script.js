let name = prompt('What is your name');
let birthday = prompt('What is your birthday');
let city = prompt('What is your city');

document.getElementById('name').innerText = name;
document.getElementById('birthday').innerText = `Дата рождения: ${birthday}`;
document.getElementById('city').innerText = `Место жительства: ${city}`;
