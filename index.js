let promiseObj = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.responseText);
            resolve(data)
        } else if (request.readyState === 4) {
            reject("nem sikerült lekérni az adatot!");
        }
    });
    request.open('GET', "https://jsonplaceholder.typicode.com/posts");
    request.send();
});

function print(data){
    data.forEach(item => {
        console.log(item)
    })
}

console.log(promiseObj);
promiseObj
    .then(data => {
    console.log(data);
    print(data);
    //createTitles(data.title);
})

promiseObj.catch(error => {
    console.log("error on rejected", error);
});