let xhr = new XMLHttpRequest();
xhr.open('GET', "https://ipinfo.io/json", true);
document.getElementById('uhr')
    .innerHTML = xhr;