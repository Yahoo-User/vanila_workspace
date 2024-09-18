let xhr = new XMLHttpRequest();

xhr.open('GET', 'http://152.70.233.29/person.json', true);
// xhr.open('GET', '/json/person.json', true);

xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
xhr.setRequestHeader("Vary", "Origin");


xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200) {
        console.log('ready to read a json ...');

        let persons = JSON.parse(xhr.responseText);
        console.log(persons);
    } // if
};

xhr.send();